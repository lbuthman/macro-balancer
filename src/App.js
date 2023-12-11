import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './MacroCalculator';
import MacroCalculator from "./MacroCalculator";
import { useState } from 'react';

function App() {
    const [startingCalories, setStartingCalories] = useState(0);

    return (
        <div className="App">
            <h1 className="pt-5 text-white">Macro Nutrient Calculator</h1>
            <MacroCalculator setStartingCalories={setStartingCalories}/>

            <hr className="border-top my-3"/>

            <h1 className="pt-3 text-white">Caloric Deficit Balancer</h1>
            <h2>{startingCalories}</h2>
        </div>
    );
}

export default App;
