import { useState, useEffect } from "react";

// importing navigation sidebar to app 
import Sidebar from "./components/Sidebar";

// importing styled component
import styled from 'styled-components';

// adding icons from material react
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import { IconButton } from "@material-ui/core";

// importing all pages here
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import TimelinePage from "./pages/TimelinePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";

// framer motion details
// import { motion } from "framer-motion";

function App() {
	const [theme, setTheme] = useState('light-theme');
	const [checked, setChecked] = useState(true);
	const [navToggle, setNavToggle] = useState(false);

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	const themeToggler = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
			setChecked(false)
		} else {
			setTheme('light-theme');
			setChecked(true)
		}
	}

	// handling the side navbar
	const handleCloseNavbar = () => (setNavToggle((prev) => !prev))

	// handling the arrow up button
	const handleArrowUpClick = () => {
		setTimeout(() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}, 200);
	}

	window.onscroll = () => scrollFunction();

	const scrollFunction = () => {
		const arrowUp = document.querySelector('#arrowUp');
		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			arrowUp.style.display = "block";
		} else {
			arrowUp.style.display = "none";
		}
	}

	return (
		<div className="App">
			<div className="ham-burger-menu">
				<IconButton
					onClick={handleCloseNavbar}>
					<MenuIcon />
				</IconButton>
			</div>

			<Sidebar
				navToggle={navToggle}
				handleCloseNavbar={handleCloseNavbar} />

			<div className="theme">
				<div className="light-dark-mode">
					<div className="left-content">
						<Brightness4Icon />
					</div>
					<div className="right-content">
						<Switch
							checked={checked}
							size="medium"
							onClick={themeToggler}
						/>
					</div>
				</div>
			</div>

			<MainContentStyled>
				<HomePage />
				<AboutPage />
				<TimelinePage />
				<SkillsPage />
				<PortfolioPage />
				<ContactPage />
			</MainContentStyled>

			<div className="arrow-up-icon">
				<IconButton onClick={handleArrowUpClick}>
					<ArrowUpwardIcon
						id="arrowUp"
					/>
				</IconButton>
			</div>
		</div>
	);
}

const MainContentStyled = styled.main`
	position: relative;
	margin-left: 16.3rem;
	min-height: 100vh;
	@media screen and (max-width:1200px){
		margin-left: 0;
	}
`;

export default App;
