import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './MacroCalculator';
import MacroCalculator from "./MacroCalculator";
import { useState } from 'react';
import DeficitBalancer from "./DeficitBalancer";

function App() {
    const [startingCalories, setStartingCalories] = useState(0);

    return (
        <div className="app">
            <h1 className="pt-5 pb-3 text-white drop-shadow">Macro Nutrient Calculator</h1>
            <MacroCalculator setStartingCalories={setStartingCalories}/>

            <hr className="border-top my-3"/>

            <h1 className="pt-3 text-white drop-shadow">Caloric Deficit Balancer</h1>
            <DeficitBalancer startingCalories={startingCalories}/>
        </div>
    );
}

export default App;
