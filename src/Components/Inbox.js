/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button, Divider, Grid, IconButton } from "@material-ui/core";
import { InboxSharp } from "@material-ui/icons";
// import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
	logo: {
		color: "#9fa6ad",
		backgroundColor: "transparent",
		width: 16,
	},
	icon: {
		color: "#9fa6ad",
		padding: theme.spacing(0),
		alignSelf: "center",
		"&:hover": {
			backgroundColor: "#3C4146",
		},
	},

	signup: {
		color: "#ffffff",
		fontSize: "18px",
		backgroundColor: "#dc461d",
		boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset",
		margin: theme.spacing(1, 1, 1, 0),
		borderRadius: 3,
		alignSelf: "center",
		textAlign: "center",
		height: theme.spacing(5),
		"&:hover": {
			backgroundColor: "#C54130",
		},
	},
}));

export default function Inbox() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// return <img src={achievement} className={classes.logo} alt='logo'></img>;
	return (
		<div className={classes.icon}>
			<IconButton
				aria-label='inbox'
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				color='inherit'>
				<InboxSharp fontSize='small' />
			</IconButton>

			<Menu
				elevation={10}
				getContentAnchorEl={null}
				style={{ width: "20vw" }}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem style={{ padding: 0 }}>
					<Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
						<Grid
							item
							xs={12}
							style={{
								backgroundColor: "#EFF0F1",
								padding: 10,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Inbox
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									The inbox is where you receive notifications
									<br />
									when someone answers one of your
									<br />
									questions or comments on one of your
									<br />
									posts.
									<br />
									<br />
									To get started,
								</Typography>
							</div>
						</Grid>
					</Grid>
				</MenuItem>
				<Divider />
				<MenuItem style={{ padding: 0 }}>
					<Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
							}}>
							<div>
								<Typography
									color='#6A737C'
									style={{ fontSize: "18px", display: "inline" }}>
									Sign Up or{" "}
								</Typography>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "18px",
										display: "inline",
										color: "blue",
									}}>
									Log in
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
							}}>
							<div style={{ textAlign: "center" }}>
								<Button variant='outlined' className={classes.signup}>
									Sign up
								</Button>
							</div>
						</Grid>
					</Grid>
				</MenuItem>
			</Menu>
		</div>
	);
}
