/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import stack from "../stack.svg";
import { Divider, Grid } from "@material-ui/core";
// import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
	logo: {
		color: "#9fa6ad",
		backgroundColor: "transparent",
		width: 16,
	},
	icon: {
		padding: theme.spacing(2, 1, 2, 1),
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

export default function Stack() {
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
			<img
				src={stack}
				aria-label='achievement'
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				className={classes.logo}
				alt='logo'></img>
			<Menu
				elevation={10}
				getContentAnchorEl={null}
				style={{ marginTop: 10, width: "20vw" }}
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
				<Grid
					container
					item
					xs={12}
					style={{
						backgroundColor: "#EFF0F1",
						padding: 10,
					}}>
					<div>
						<Typography
							color='#6A737C'
							style={{ fontSize: "12px", color: "blue" }}>
							Current Community
						</Typography>
					</div>
				</Grid>

				<MenuItem style={{ padding: 0 }}>
					<Grid container spacing={0} style={{ margin: 0, padding: 0 }}>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								padding: 10,
							}}>
							<div>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
										color: "blue",
										padding: 10,
									}}>
									Ask drishya
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								padding: 10,
							}}>
							<div>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
										color: "blue",
										padding: 10,
									}}>
									help
								</Typography>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
										color: "blue",
										padding: 10,
									}}>
									chat
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
								backgroundColor: "#EFF0F1",
								padding: 10,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Your Communities
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
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
										color: "blue",
									}}>
									Sign Up{" "}
								</Typography>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
									}}>
									or{" "}
								</Typography>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
										color: "blue",
									}}>
									Log in{" "}
								</Typography>
								<Typography
									color='#6A737C'
									style={{
										fontSize: "12px",
										display: "inline",
									}}>
									to customize your list
								</Typography>
							</div>
						</Grid>
					</Grid>
				</MenuItem>
			</Menu>
		</div>
	);
}
