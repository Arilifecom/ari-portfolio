import Link from "next/link";
import SocialLinks from "src/compornents/SocialLinks";

const Footer = ({ className }) => {
  return (
    <footer
      className={`flex flex-col justify-center w-full border-t-4 border-solid border-dark font-mont font-bold  px-8 md:px-12 lg:px-32 ${className}`}
    >
      <div className="pt-8 pb-20 md:py-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        <span className="">
          {new Date().getFullYear()}&copy; All Rights reserved.{" "}
        </span>
        <SocialLinks />
        <div className="flex items-center lg:py-2">
          build by <span className="text-pink text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="/"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Ari
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
