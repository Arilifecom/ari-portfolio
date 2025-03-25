import Footer from "src/compornents/Footer"
import Header from "src/compornents/Header"

const CommonLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center bg-bg_primary mx-auto z-0">
      <Header />      
      {children}
      <Footer />
    </div>
  )
}

export default CommonLayout