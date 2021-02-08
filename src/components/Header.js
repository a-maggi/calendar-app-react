import Logo from 'assets/icons/jobsity';
const Header = () => (
  <>
    <div className="p-4 px-5 flex justify-between border-b-2 border-fuchsia-600">
      <div className="title col-start-1 text-2xl font-semibold">
        Calendar
      </div>
      <div className="col-end-auto title justify-items-right">
        <button className="user-account flex items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="rounded-full">
            <Logo />
          </div>
          <div className="pl-2">
            <div className="text-sm font-medium">Jobsity</div>
            <div className="text-xs font-light">Company</div>
          </div>
          <div className="pl-2">
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </>
)

export default Header;