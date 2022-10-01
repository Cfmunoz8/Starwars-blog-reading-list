
import './styles/App.css';
import Header from "./components/header";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Characters from './components/characters';
import Planets from './components/planets';
import Vehicles from './components/vehicles';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Characters />
      <Planets />
      <Vehicles />
      <Footer />
    </div>
  );
}

export default App;
