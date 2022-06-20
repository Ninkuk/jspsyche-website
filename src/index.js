import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import App from './App';
import StudentDashboard from "./Pages/StudentDashboard";
import NewExperiment from "./Pages/NewExperiment";
import {ThemeProvider} from "@mui/material";
import theme from "./Theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App/>}/>
					<Route path="/student" element={<StudentDashboard/>}/>
					<Route path="/new-experiment" element={<NewExperiment/>}/>
				</Routes>
			</BrowserRouter>

		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
