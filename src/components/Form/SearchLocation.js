import React, { useRef } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const SearchLocation = ({className, placeholder,onChange,getSelection=false,getGeoSelection=false}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['(regions)'],
      componentRestrictions: {
        country: "AR"
      }
    },
    debounce: 300
  });
  const ref = useRef();
  useOnclickOutside(ref, () => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });


  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
    onChange(e);
  };
  const handleSelect = (e) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(e.description, false);
    getSelection(e)
    clearSuggestions();
    // Get latitude and longitude via utility functions
    getGeocode({ address: e.description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        getGeoSelection({ lat, lng });
        console.log('📍 Coordinates: ', { lat, lng });
      }).catch(error => {
        console.log('😱 Error: ', error)
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;
      if (suggestion['terms'].length > 2)
        return (
          <li
            key={id}
            onClick={handleSelect(suggestion)}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
    });

  return (
    <div id="input-location" ref={ref}>
      <input
        className={className}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder={placeholder}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <div className="search-results"><ul>{renderSuggestions()}</ul></div>}
    </div>
  );
};

export default SearchLocation;