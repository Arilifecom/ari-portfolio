import Footer from "src/compornents/Footer";
import Header from "src/compornents/Header";
import { AriIcon } from "src/compornents/Icons";

const CommonLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-bg_primary mx-auto z-0">
      <div className="flex items-center justify-end w-full py-2 pr-2 md:pt-2">
        <AriIcon className={"w-6"} />
        <h1 className="font-mont font-bold text-lg sm:text-xl md:text-2xl">
          Ari's Portfolio
        </h1>
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
