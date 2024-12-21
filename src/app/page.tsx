import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <Logo />
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
