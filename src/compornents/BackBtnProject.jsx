const BackBtnProject = () => {
  return (
    <div className="w-14 h-14 fixed text-xs bottom-10 md:bottom-8 right-2 p-2 rounded-full text-white shadow-lg hover:bg-blue/20 transition z-20">
      <a href="/" className="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="22"
          height="22"
          viewBox="0 0 100 100"
        >
          <path
            stroke="#272343"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="m16.845 47.1 32.612-28.895a.84.84 0 0 1 1.086 0l16.4 14.525M83.155 47.1 71.286 36.583M74.867 47.1v32.719c0 1.2-1.085 2.175-2.422 2.175h-44.89c-1.337 0-2.422-.974-2.422-2.175V47.1"
          />
          <path
            stroke="#272343"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="M40.352 71.341V55.089h19.296v26.905M66.938 32.73v-7.42a1.6 1.6 0 0 1 1.6-1.6h1.155a1.6 1.6 0 0 1 1.6 1.6v11.273"
          />
        </svg>
        HOME
      </a>
    </div>
  );
};

export default BackBtnProject;
