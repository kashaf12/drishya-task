/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Divider, Grid, IconButton } from "@material-ui/core";
import { HelpSharp } from "@material-ui/icons";
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

export default function Help() {
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
				<HelpSharp fontSize='small' />
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
								padding: 10,
							}}>
							<div>
								<Typography
									color='#6A737C'
									style={{ fontSize: "12px", color: "blue" }}>
									Tour
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
								paddingTop: 0,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Start here for a quick overview of the
									<br />
									site
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
									style={{ fontSize: "12px", color: "blue" }}>
									Help Center
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
								paddingTop: 0,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Detailed answers to any questions
									<br />
									you might have
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
									style={{ fontSize: "12px", color: "blue" }}>
									Meta
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
								paddingTop: 0,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Discuss the working and policies of
									<br />
									this site
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
									style={{ fontSize: "12px", color: "blue" }}>
									About Us
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
								paddingTop: 0,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Learn more about Stack Overflow
									<br />
									the company
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
									style={{ fontSize: "12px", color: "blue" }}>
									Business
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							style={{
								padding: 10,
								paddingTop: 0,
							}}>
							<div>
								<Typography color='#6A737C' style={{ fontSize: "12px" }}>
									Learn more about hiring developers
									<br />
									or posting ads with us
								</Typography>
							</div>
						</Grid>
					</Grid>
				</MenuItem>
			</Menu>
		</div>
	);
}
