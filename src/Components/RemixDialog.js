import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import {Upload} from "@mui/icons-material";

function RemixDialog(prop) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			{/*<DialogTitle variant="h2">Create a new Experiment</DialogTitle>*/}
			{/*<DialogContent>*/}
			{/*	<DialogContentText>*/}
			{/*		You can modify the following values:*/}
			{/*	</DialogContentText>*/}
			{/*	<Typography variant="h4" mt={2} gutterBottom>Images</Typography>*/}
			{/*	<Button variant={"outlined"} startIcon={<Upload/>}>Upload</Button>*/}
			{/*	<Typography variant="h4" mt={2} gutterBottom>Colors</Typography>*/}
			{/*	/!*<ColorPalette palette={palette}/>*!/*/}
			{/*	<Typography variant="h4" mt={2} gutterBottom>Values</Typography>*/}

			{/*</DialogContent>*/}
			{/*<DialogActions>*/}
			{/*	<Button onClick={handleClose}>Cancel</Button>*/}
			{/*	<Button onClick={handleClose}>Create</Button>*/}
			{/*</DialogActions>*/}

			{/*	Here we import the specific dialog content*/}
		</Dialog>
	)
}

export default RemixDialog;
