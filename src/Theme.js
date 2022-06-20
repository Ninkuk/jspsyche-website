import {createTheme} from '@mui/material/styles';
import {grey} from "@mui/material/colors";

const theme = createTheme({
	typography: {
		fontFamily: ["Open Sans", 'sans-serif'].join(','),
		h1: {
			fontWeight: 700,
			fontSize: "x-large",
			color: grey[900]
		},
		h2: {
			fontWeight: 700,
			fontSize: "larger",
			color: grey[900]
		},
		h3: {
			fontWeight: 700,
			fontSize: "medium",
			color: grey[800]
		},
		h4: {
			fontWeight: 600,
			fontSize: "small",
			color: grey[800]
		},
		subtitle1: {
			fontSize: "small",
			color: grey[700]
		},
		body1: {
			fontSize: "smaller",
			color: grey[500]
		}
	},
	palette: {}
	// palette: {
	// 	primary: {
	// 		main: "#302144"
	// 	},
	// 	secondary: {
	// 		main: "#f9a000"
	// 	}
	// }
})

export default theme;
