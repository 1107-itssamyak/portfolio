import { useState, useEffect } from "react";

// importing navigation sidebar to app 
import Sidebar from "./components/Sidebar";

// importing styled component
import styled from 'styled-components';

// adding icons from mui
import Brightness4Icon from '@material-ui/icons/Brightness4';
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
// import { AnimatePresence } from "framer-motion";

function App() {
	const [theme, setTheme] = useState('dark-theme');
	const [checked, setChecked] = useState(false);
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

	const handleCloseNavbar = () => (setNavToggle((prev) => !prev))

	return (
		<div className="App">
			<div className="ham-burger-menu">
				<IconButton
					onClick={handleCloseNavbar} >
					<MenuIcon />
				</IconButton>
			</div>

			<Sidebar navToggle={navToggle} handleCloseNavbar={handleCloseNavbar} />

			<div className="theme">
				<div className="light-dark-mode">
					<div className="left-content">
						<Brightness4Icon />
					</div>
					<div className="right-content">
						<Switch
							value=""
							checked={checked}
							inputProps={{ 'aria-label': '' }}
							size="medium"
							onClick={themeToggler}
						/>
					</div>
				</div>
			</div>

			<MainContentStyled>
				{/* <AnimatePresence exitBeforeEnter> */}
				<HomePage />
				<AboutPage />
				<TimelinePage />
				<SkillsPage />
				<PortfolioPage />
				<ContactPage />
				{/* </AnimatePresence> */}
			</MainContentStyled>
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
