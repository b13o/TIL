import Header from "./components/header";
import Markdown from "./components/markdown";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden flex-col mx-auto">
        <Header />
        <main className="flex-1 relative z-10">
          <Hero />
          <Markdown />
        </main>
      </div>
    </>
  );
}

export default App;
