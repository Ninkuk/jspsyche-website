import React from 'react';
import {Container, Fab, Grid, Typography} from "@mui/material";
import ExperimentCard from "../Components/ExperimentCard";
import AddIcon from "@mui/icons-material/Add";

const experimentsList = [
	{
		title: "AttentionSums",
		description: "Compares your ability to attend to two tasks at the same time compared to doing them in succession"
	},
	{
		title: "MemoryLimits",
		description: "Tests your ability to remember 2, 3 or 4 objects"
	},
	{
		title: "PeripheralVis_Workshop",
		description: "Demonstrates that your peripheral vision has less acuity than your central vision"
	},
	{
		title: "SaccadeTime_Workshop",
		description: "Tests the time it take you to reorient your central vision to the periphery"
	},
	{
		title: "TempImages4",
		description: "Our most important template. It displays one image and then asks the subject to identify the image they saw from a set of 4. We have a variety of TempImages4 routines labelled Blocks, Learn, Retry, and Sort"
	},
	{
		title: "FacesCateg",
		description: "Our best experiment. It tests which of 10 facial parameters we are able to best distinguish. We have not yet developed the approprirate data analysis for the results."
	},
]

function StudentDashboard(props) {
	return (
		<Container>
			<Typography variant="h1" mt={10}>
				My Experiments
			</Typography>
			<Typography variant="subtitle1">
				Signed in as Ninad Kulkarni
			</Typography>
			<Grid container spacing={2} mt={1}>
				{
					experimentsList.map(exp => (
						<Grid item xs={4}>
							<ExperimentCard
								title={exp.title}
								authorName="Ninad Kulkarni"
								description={exp.description}
							/>
						</Grid>
					))
				}
			</Grid>
			<Fab variant="extended" color="success" href={"/new-experiment"}
			     style={{
				     position: 'absolute',
				     bottom: 50,
				     right: 50,
			     }}>
				<AddIcon/>
				New experiment
			</Fab>
		</Container>
	);
}

export default StudentDashboard;
