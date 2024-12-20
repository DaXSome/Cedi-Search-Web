import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <Logo />
        <SearchBar />
      </main>
      <footer className="w-full py-4 text-center text-sm text-gray-600">
        Powered by{" "}
        <a
          href="https://daxsome.owbird.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          DaXSome
        </a>
      </footer>
    </div>
  );
};

export default Home;
