import React from "react";
import './footer.css';
import { makeStyles } from "@material-ui/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Icon } from "@mui/material";
import { red } from "@mui/material/colors";


const useStyles = makeStyles((theme) => ({
	root: {
	 
	 
	},
}))
function Footer () {
	const classes = useStyles();

	return (
		<div className={classes.root}>
<head>
  <title>Footer Design</title>
  <meta charset="utf-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  <link rel="stylesheet" href="css/style.css"></link>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
</head>
<body>

  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<img className="logo" src="./images/logo_trial.png" alt=""></img>
				<br />
  	 			
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="https://google.com">Analytics</a></li>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Planning</a></li>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Data Management</a></li>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Integration</a></li>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Security</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Community</h4>
  	 			<ul>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Blogs</a></li>
  	 				<li><a href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">Newsletter</a></li>
  	 
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow Tennod <br /> socials</h4>
  	 			<div className="social-links"> 
  	 				<a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
  	 				<a href="https://instagram.com/tehmple__" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
  	 				<a href="https://tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
  	 			</div>
				<div className="copyright">
					<h5>copyright 2023</h5>
				</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer> 
</body>

</div>
	);
}
export default Footer;