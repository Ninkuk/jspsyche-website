import React from 'react';
import {grey} from '@mui/material/colors';
import {
	Card,
	CardActions,
	CardContent,
	Chip, Grid, IconButton,
	Tooltip,
	Typography
} from "@mui/material";
import {AutoFixHigh} from "@mui/icons-material";
import MemoryLimitsDialog from "../Experiments/MemoryLimits/MemoryLimitsDialog";


function TemplateExperimentCard(props) {
	return (
		<Card variant="outlined" sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
			<CardContent sx={{flex: 1}}>
				<Typography variant="subtitle1" gutterBottom>
					<span style={{fontWeight: "bold"}}>{props.title}</span>
				</Typography>
				{/*<Typography variant="body2">{props.authorName}</Typography>*/}
				<Typography variant="body1" gutterBottom>
					{props.description}
				</Typography>
				<Grid container spacing={1}>
					<Grid item><Chip label="Contextualizing" sx={{color: grey[500], fontSize: "x-small"}}
					                 variant="filled" size="small"/></Grid>
					<Grid item><Chip label="Categorizing" sx={{color: grey[500], fontSize: "x-small"}} variant="filled"
					                 size="small"/></Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Tooltip title="Remix">
					<IconButton onClick={() => props.dialog(true)}>
						<AutoFixHigh/>
					</IconButton>
				</Tooltip>
			</CardActions>
		</Card>
	);
}

export default TemplateExperimentCard;
