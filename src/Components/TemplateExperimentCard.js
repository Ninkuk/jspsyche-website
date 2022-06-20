import React, {useState} from 'react';
import {grey, purple, red} from '@mui/material/colors';
import {styled} from "@mui/material/styles";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Chip,
	Grid, IconButton,
	List,
	ListItem,
	Stack, Tooltip,
	Typography
} from "@mui/material";
import {AutoFixHigh, Edit} from "@mui/icons-material";


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
					<Grid item><Chip label="Contextualizing" sx={{color: grey[500], fontSize: "x-small"}} variant="filled" size="small"/></Grid>
					<Grid item><Chip label="Categorizing" sx={{color: grey[500], fontSize: "x-small"}} variant="filled" size="small"/></Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Tooltip title="Remix">
					<IconButton>
						<AutoFixHigh/>
					</IconButton>
				</Tooltip>
			</CardActions>
		</Card>
	);
}

export default TemplateExperimentCard;
