
import './App.css';
import BgImage from './components/BgImage';
import Header from './components/Header';
import Nav from './components/Nav';
import Menu from './components/Menu';
import MiddleContent from './components/MiddleContent';
import OurRooms from './components/OurRooms';
import About from './components/About';
import BottomContent from './components/BottomContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <BgImage />
      <Menu />
      <MiddleContent />
      <OurRooms />
      <About />
      <BottomContent />
      <Footer />
    </>
  );
}

export default App;
