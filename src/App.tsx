import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="absolute -top-full left-4 z-[101] rounded bg-blue-600 px-4 py-2 text-white outline-none transition-[top] duration-200 focus:top-4 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
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
