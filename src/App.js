import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';

const App = ({}) => {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
