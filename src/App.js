import './App.css';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Employees></Employees>
    </div>
  );
}

export default App;
