/** @format */

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from "@material-ui/core";
import Logo from "./Logo";
import Inbox from "./Inbox";
import Search from "./Search";
import Achievement from "./Acievement";
import Help from "./Help";
import Stack from "./Stack";
// import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		flex: 1,
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	navBar: {
		backgroundColor: "red",
		margin: 0,
		padding: 0,
		alignContent: "center",
	},
	login: {
		color: "#af3817",
		backgroundColor: "#f8dad2",
		boxShadow: "rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset",
		borderRadius: 3,
		borderWidth: 1,
		borderColor: "#af3817",
		fontSize: "12px",
		height: theme.spacing(4),
		margin: theme.spacing(1, 1, 1, 1),
		alignSelf: "center",
		"&:hover": {
			backgroundColor: "#F5C8BB",
		},
	},
	signup: {
		color: "#ffffff",
		fontSize: "12px",
		backgroundColor: "#dc461d",
		boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset",
		margin: theme.spacing(1, 1, 1, 0),
		borderRadius: 3,

		alignSelf: "center",
		height: theme.spacing(4),
		"&:hover": {
			backgroundColor: "#C54130",
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static' className={classes.navBar}>
				<Toolbar>
					<Logo />
					<Search />
					<Inbox />
					<Achievement />
					<Help />
					<Stack />

					{/* <IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'>
							<AccountCircle />
						</IconButton> */}

					<Button variant='outlined' className={classes.login}>
						Log in
					</Button>
					<Button variant='outlined' className={classes.signup}>
						Sign up
					</Button>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</div>
	);
}
