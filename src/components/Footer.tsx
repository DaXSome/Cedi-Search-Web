import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="flex justify-around items-center ">
        <div className="flex">
          <a href="/about" className="hover:text-gray-500">
            About
          </a>
        </div>

        <p className="text-lg text-gray-500">
          Powered by{" "}
          <Link href="https://daxsome.org">
            DaXSome
          </Link>
        </p>

        <p>
          &copy; {new Date().getFullYear()} Cedi Search. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
