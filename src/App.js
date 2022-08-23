
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import States from "./components/States/States";
function App() {

  return (
      <div className="App">
          <Navbar />
          <Hero />
          <Form />
          <States />
          <Boost />
          <Footer/>
      </div>
  );
}

export default App;
