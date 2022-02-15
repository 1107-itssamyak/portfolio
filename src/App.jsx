import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router';

// adding pages to app
import Sidebar from "./components/Sidebar";
import AboutPage from './components/AboutPage';

// import styled component
import styled from 'styled-components';

// adding icons from mui
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import { IconButton } from "@material-ui/core";

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

	return (
		<div className="App">
			<Sidebar navToggle={navToggle} />

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

			<div className="ham-burger-menu">
				<IconButton onClick={() => setNavToggle(!navToggle)}>
					<MenuIcon />
				</IconButton>
			</div>

			<MainContentStyled>
				<AboutPage />
				<Routes>
					<Route path="/about" element={<AboutPage />} exact />
				</Routes>
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
