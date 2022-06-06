import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <div className='container my-10 mx-auto max-w-screen-lg'>
      <Header />
      <main>
        <Info />
      </main>
    </div>
  );
}

export default App;
