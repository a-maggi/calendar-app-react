import Header from 'components/Header';
const Layout = ({ children }) => (
  <>
    <div className="min-h-screen bg-gray-100 py-0 flex flex-col sm:py-4">
      <div className="md:container md:mx-auto py-3 bg-white rounded-lg shadow-sm">
        <Header></Header>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  </>
)

export default Layout;