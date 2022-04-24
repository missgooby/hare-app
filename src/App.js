import "./App.css";
import PathfinderVisualizer from "./PathfinderVisualizer/PathfinderVisualizer.jsx";
import {Legend} from "./PathfinderVisualizer/Legend/Legend.jsx";


function App() {
  return (
    <div className="App">
      <PathfinderVisualizer></PathfinderVisualizer>
      <div className="PopUp">
        <Legend />
      </div>
    </div>
    
  );
}

export default App;