import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './KPIs';
import KPIs from "./KPIs";
import { useState } from 'react';

function App() {
    const [startingCalories, setStartingCalories] = useState(0);

    return (
        <div className="App">
            <h1 className="pt-5 text-white">Macro Nutrient Calculator</h1>
            <KPIs setStartingCalories={setStartingCalories}/>

            <hr className="border-top my-3"/>
            <h1 className="text-white">Caloric Deficit Balancer</h1>
            <h2>{startingCalories}</h2>
        </div>
    );
}

export default App;
