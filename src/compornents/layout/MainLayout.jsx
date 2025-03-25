
const MainLayout = ({children, className=""}) => {
  return (

    <div className={`w-full h-full min-h-[90vh] inline-block z-0 border-t-4 border-solid border-dark p-8 md:p-12 lg:p-32 bg-bg_white ${className}`}>
      {children}
    </div>
  )
}

export default MainLayout