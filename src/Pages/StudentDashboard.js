import React, {useState} from 'react';
import {
	Avatar,
	Container,
	Fab,
	Grid,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
	Typography
} from "@mui/material";
import ExperimentCard from "../Components/ExperimentCard";
import AddIcon from "@mui/icons-material/Add";
import {AccountCircle, Logout, Settings} from "@mui/icons-material";

const experimentsList = [
	{
		title: "Experiment 1",
		description: "Lorem ipsum",
		categories: ["Categorization"]
	},
	{
		title: "Experiment 2",
		description: "Lorem ipsum",
		categories: ["Categorization", "Contextualization"]
	},
]

function StudentDashboard(props) {
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const menuOpen = Boolean(menuAnchorEl);
	const handleMenuOpen = (event) => {
		setMenuAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};

	return (
		<Container>
			<Grid container mt={10} justifyContent={"space-between"}>
				<Grid item>
					<Typography variant="h1">
						My Experiments
					</Typography>
				</Grid>
				<Grid item>
					<Tooltip title="Signed in as Ninad Kulkarni">
						<IconButton id={"bruh"} onClick={handleMenuOpen}>
							<Avatar variant="circular">NK</Avatar>
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>

			<Menu open={menuOpen} anchorEl={menuAnchorEl} onClose={handleMenuClose}
			      anchorOrigin={{
				      vertical: 'bottom',
				      horizontal: 'right',
			      }}
			      transformOrigin={{
				      vertical: 'top',
				      horizontal: 'right'
			      }}
			>
				<MenuItem>
					<ListItemIcon>
						<AccountCircle fontSize="small"/>
					</ListItemIcon>
					Profile
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize="small"/>
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize="small"/>
					</ListItemIcon>
					Sign Out
				</MenuItem>
			</Menu>

			{/*<Typography variant="subtitle1">*/}
			{/*	Signed in as Ninad Kulkarni*/}
			{/*</Typography>*/}
			<Grid container spacing={2} mt={1}>
				{
					experimentsList.map(exp => (
						<Grid item xs={4}>
							<ExperimentCard
								title={exp.title}
								authorName="Ninad Kulkarni"
								description={exp.description}
								categories={exp.categories}
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
