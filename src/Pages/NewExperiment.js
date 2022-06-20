import React from 'react';
import {Chip, Container, Grid, InputAdornment, InputBase, Paper, Stack, TextField, Typography} from "@mui/material";
import Search from "@mui/icons-material/Search";
import {grey} from "@mui/material/colors";
import ExperimentCard from "../Components/ExperimentCard";

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
	{
		title: "",
		description: ""
	}
]

function NewExperiment(props) {
	function handleClick() {

	}

	return (
		<Container>
			<Typography variant="h1" mt={10}>
				New Experiment
			</Typography>
			<Typography variant="subtitle1">
				Select an experiment from the available templates below
			</Typography>

			{/* search */}
			<Paper sx={{borderRadius: 100, p: '2px 4px', background: 'none', marginTop: 5}} variant="outlined">
				<InputBase placeholder="Search" fullWidth sx={{ml: 1, p: 1}}
				           startAdornment={
					           <InputAdornment position="start"><Search/></InputAdornment>
				           }
				/>
			</Paper>

			{/*	filters */}
			{/*
			 - A quantifiable visual task
			 - Analyze a specific example of visual information
			 - Create a visual experience to communicate some information
			 */}
			<Typography variant="h3" mt={2}>
				Experiment Type
			</Typography>
			<Stack direction="row" spacing={1} mt={1}>
				<Chip label="Quantifiable" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Analyze an Example" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Visual Communication" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
			</Stack>

			{/*
			 - Contextualizing
			 - Categorizing
			 - Associating
			 - Prioritizing
			 - Analogizing
			*/}
			<Typography variant="h3" mt={2}>
				Cognitive Functions
			</Typography>
			<Stack direction="row" spacing={1} mt={1}>
				<Chip label="Contextualizing" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Categorizing" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Associating" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Prioritizing" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
				<Chip label="Analogizing" sx={{color: grey[500]}} variant="outlined" onClick={handleClick} />
			</Stack>

			{/*	cards grid */}
			<Grid container spacing={2} mt={5}>
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
		</Container>
	);
}

export default NewExperiment;
