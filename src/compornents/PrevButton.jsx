import { useRouter } from "next/router";

const PrevButton = ({ className }) => {
  const router = useRouter();

  return (
    <div className={`px-7 md:px-20 lg:px-32 py-5 ${className}`}>
      <button
        onClick={() => router.back()}
        className="btn-base text-xl md:text-2xl flex items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6L5 12L11 18M18 6L12 12L18 18"
            stroke="#E6E6E6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Prev
      </button>
    </div>
  );
};

export default PrevButton;
