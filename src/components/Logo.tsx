import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-4xl font-bold text-primary">
      Cedi <span className="text-green-400"> Search</span>
    </Link>
  );
};

export default Logo;
