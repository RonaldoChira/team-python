
import './assets/app.css';
import Footer from './components/footer';
import ListUser from './components/listuser';


function App() {
  return (
    <div className="App">
     <br/>
     <center> <h2>Trabajadores de la empresa Pedregal</h2></center>
      <ListUser />
   {/* <DataUsers /> */}
 
    </div>
  );
}

export default App;
