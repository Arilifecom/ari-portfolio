const MainLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full inline-block z-0 border-t-4 border-solid border-dark p-7 pt-10 md:p-20 md:pt-20 lg:p-32 lg:pt-24 bg-bg_white ${className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
