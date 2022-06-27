// import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboard";
import NewExperiment from "./Pages/NewExperiment";
import MemoryLimits from "./Experiments/MemoryLimits/MemoryLimits";

function App() {
	return (
		<StudentDashboard/>
		// <MemoryLimits/>
	);
}

export default App;
