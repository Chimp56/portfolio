import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <footer className="border-t border-neutral-200 bg-white px-8 py-8 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4">
          <SocialLinks />
          <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Vincent Tran
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
