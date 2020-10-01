/** @format */

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Divider, Grid } from "@material-ui/core";
import { StyledMenu } from "./Menu";
import { StyledMenuItem } from "./MenuItem";

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:focus": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
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
		display: "block",
		color: "inherit",
		flex: 1,
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		flex: 1,
	},

	ask: {
		color: "#af3817",
		backgroundColor: "#f8dad2",
		boxShadow: "rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset",
		borderRadius: 3,
		borderWidth: 1,
		borderColor: "#af3817",
		fontSize: "12px",
		height: theme.spacing(3),
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
		"&:hover": {
			backgroundColor: "#F5C8BB",
		},
	},
	searchQuestion: {
		color: "#af3817",
		fontSize: "10px",
		height: theme.spacing(3),
		padding: theme.spacing(1, 1, 1, 1),
		margin: theme.spacing(1),
	},

	title1: {
		display: "inline",
		padding: 10,
		paddingRight: 0,
		fontSize: "12px",
		alignSelf: "left",
	},
	subTitle: {
		display: "inline",
		padding: 10,
		paddingLeft: 5,
		color: "gray",
		fontSize: "12px",
		alignSelf: "left",
	},
}));

export default function Search() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search…'
				edge='end'
				aria-label='account of current user'
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
			/>

			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<StyledMenuItem>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								[tag]
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								search within a tag
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								answers:0
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								unanswered questions
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								user:1234
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								search by author
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								score:3
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								posts with a 3+ score
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								"words here"
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								exact phrase
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='subtitle2' className={classes.title1}>
								isaccepted:yes
							</Typography>
							<Typography variant='subtitle1' className={classes.subTitle}>
								search within status
							</Typography>
						</Grid>
					</Grid>
				</StyledMenuItem>
				<Divider />
				<StyledMenuItem>
					<Grid container direction='row' justify='space-between' spacing={1}>
						<Grid item xs={12} sm={6}>
							<Button variant='outlined' className={classes.ask}>
								Ask a question
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div
								style={{
									flex: 1,
									textAlign: "right",
								}}>
								<Button variant='text' className={classes.searchQuestion}>
									Search help
								</Button>
							</div>
						</Grid>
					</Grid>
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}
