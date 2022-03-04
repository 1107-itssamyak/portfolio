import { useState, useEffect } from "react";

// importing navigation sidebar to app 
import Sidebar from "./components/Sidebar";

// importing styled component
import styled from 'styled-components';

// adding icons from material react
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";

// importing all pages here
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import TimelinePage from "./pages/TimelinePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";

import './styles/HomeAnimation.css';

function App() {
	const [theme, setTheme] = useState('light-theme');
	const [checked, setChecked] = useState(true);
	const [navToggle, setNavToggle] = useState(false);

	useEffect(() => {
		localStorage.getItem('theme')
			? setTheme(localStorage.getItem('theme'))
			: localStorage.setItem('theme', 'light-theme');

		document.documentElement.className = theme;
	}, [theme]);

	const themeToggler = () => {
		if (theme === 'light-theme') {
			localStorage.setItem('theme', 'dark-theme');
			setTheme('dark-theme');
			setChecked(false)
		} else {
			localStorage.setItem('theme', 'light-theme');
			setTheme('light-theme');
			setChecked(true)
		}
	}

	// handling the side navbar
	const handleCloseNavbar = () => setNavToggle((prev) => !prev)

	// handling the arrow up button
	const handleArrowUpClick = () => {
		setTimeout(() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}, 150);
	}

	if (navToggle)
		window.onscroll = () => scrollFunction();

	const scrollFunction = () => {
		setNavToggle(false);
		const arrowUp = document.querySelector('.arrowUp');
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			arrowUp.style.display = "block";
		} else {
			arrowUp.style.display = "none";
		}
	}

	return (
		<>
			<div className="container">
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
				<div className="kartanesi"></div>
			</div>

			<div className="ham-burger-menu">
				<IconButton
					name="ham-burger-menu"
					aria-label="ham-burger-menu"
					onClick={handleCloseNavbar}
					id="ham-burger">
					<MenuIcon />
				</IconButton>
			</div>

			<Sidebar
				navToggle={navToggle}
				checked={checked}
				themeToggler={themeToggler}
				handleCloseNavbar={handleCloseNavbar} />

			<MainContentStyled>
				<HomePage />
				<AboutPage />
				<TimelinePage />
				<SkillsPage />
				<PortfolioPage />
				<ContactPage />
			</MainContentStyled>

			<div className="arrowUp">
				<IconButton
					onClick={handleArrowUpClick}
					aria-label="arrow-up-icon" >
					<ArrowUpwardIcon
						id="arrow-up-icon" />
				</IconButton>
			</div>
		</>
	);
}

const MainContentStyled = styled.main`
	position: relative;
	margin-right: 18.3rem;
	min-height: 100vh;
	@media screen and (max-width:1200px){
		margin-right: 0;
	}
`;

export default App;
