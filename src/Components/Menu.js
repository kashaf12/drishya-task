/** @format */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

export const StyledMenu = withStyles({
	paper: {
		maxWidth: "50vw",
		marginTop: 10,
		background: "white",
		position: "relative",
	},
})((props) => (
	<Menu
		elevation={10}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "left",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "left",
		}}
		{...props}
	/>
));
