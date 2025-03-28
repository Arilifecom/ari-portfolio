import { useState } from "react";
import HelloInteractionApp from "src/compornents/HelloInteractionApp";
import { HelloIcon, ResetIcon } from "src/compornents/Icons";

const HelloInteraction = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedAnimation(id); // クリックされたボタンのIDを状態として設定
    console.log(id);
  };

  const renderAnimation = () => {
    if (selectedAnimation === 0) {
      return <HelloInteractionApp />;
    }
    if (selectedAnimation === 3) {
      return null;
    }
    return null;
  };

  return (
    <div className="">
      <div className="relative max-w-xl p-7 bg-bg_primary rounded-22 border-2 border-solid border-dark">
        <div className="pt-2 flex">
          <h2 className="text-2xl md:text-4xl xl:6xl font-bold px-2">
            Say Hello to Ari
          </h2>
          <span>
            <HelloIcon className="w-8 md:w-12 animate-sway" />
          </span>
        </div>
        <div className="relative flex flex-col min-h-64 overflow-hidden items-center bg-bg_white p-3 my-3">
          {renderAnimation()}
        </div>
        <div className="flex md:flex-row items-center justify-center gap-2 pt-3">
          <button
            className="btn-base w-28 border-2 border-dark hover:bg-bg_primary hover:text-dark"
            onClick={() => handleButtonClick(0)}
          >
            Call
          </button>
          <button
            className="btn-base w-28 border-2 border-dark hover:bg-bg_primary hover:text-dark"
            onClick={() => handleButtonClick(1)}
          >
            Hello
          </button>
          <button
            className="btn-base w-28 border-2 border-dark hover:bg-bg_primary hover:text-dark"
            onClick={() => handleButtonClick(2)}
          >
            Play
          </button>
          <button
            className="btn-base w-28 border-2 border-dark hover:bg-bg_primary fill-light hover:fill-dark"
            onClick={() => handleButtonClick(3)}
          >
            <ResetIcon className={"w-6 "} />
          </button>
        </div>
        <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[104%] rounded-22 bg-[#C6C4C7]"></div>
      </div>
    </div>
  );
};

export default HelloInteraction;
