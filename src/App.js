import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './KPIs';
import KPIs from "./KPIs";

function App() {

    return (
        <div className="App">
            <h1 className="pt-5 text-white">Macro Nutrient Calculator</h1>
            <KPIs/>

            <hr className="border-top my-3"/>
            <h1 className="text-white">Caloric Deficit Balancer</h1>
        </div>
    );
}

export default App;
