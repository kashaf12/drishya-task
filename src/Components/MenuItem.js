/** @format */

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: "white",
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);
