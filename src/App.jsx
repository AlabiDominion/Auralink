import Header from "./components/Header";
import Hero from "./components/Hero";
import './animation.css';
function App() {


  return (
      <main>
        {/* Gradient image*/}
        <img className="absolute top-0 right-0 opacity-60 -z-10" src="./gradient.png" alt="gradient.png" />
        {/* Blur Effect */}
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#D918A5] -rotate-[30deg]"></div>

        <Header/>
        <Hero/>
      </main>
    
  );
}

export default App;
