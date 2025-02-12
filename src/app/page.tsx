import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-50">
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <Logo />
        {process.env.NODE_ENV === "development" ? (
          <SearchBar />
        ) : (
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              Coming Soon
            </h2>
            <p className="text-gray-600 mt-2">
              We&apos;re working on something awesome. Stay tuned!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
