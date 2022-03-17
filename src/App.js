import Header from "./components/header/Header"
import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Services from './components/services/Services';
import Contract from './components/contract/Contract';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contract />
      <Footer />
    </div>
  );
}

export default App;
