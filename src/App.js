import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";

function App() {
  return (
    <div className='container my-10 mx-auto max-w-screen-lg'>
      <Header />
      <main>
        <Info />
        <Projects />
      </main>
    </div>
  );
}

export default App;
