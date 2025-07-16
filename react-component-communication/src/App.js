import logo from './logo.svg';
import './App.css';
import Parent from './Parent'

function App() {
  return (
    <div style={{"backgroundColor":"pink", "height":"50px"}}>
      <h1>this is reactjs component communication</h1>
      <Parent></Parent>
    </div>
  );
}

export default App;
