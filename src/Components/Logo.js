/** @format */
import React from "react";
import logo from "../logo.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	logo: {
		backgroundColor: "transparent",
		width: 90,
		padding: theme.spacing(1),
		"&:hover": {
			backgroundColor: "#3C4146",
		},
	},
}));
export default function Logo(props) {
	const classes = useStyles();
	return <img src={logo} alt='logo' className={classes.logo}></img>;
}
