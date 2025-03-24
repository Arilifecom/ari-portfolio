import Footer from "src/compornents/Footer"

const CommonLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center bg-bg_primary mx-auto z-0">
      {children}
      <Footer />
    </div>
  )
}

export default CommonLayout