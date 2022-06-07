import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='container my-10 mx-auto max-w-screen-lg'>
      <Header />
      <main>
        <Info />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
