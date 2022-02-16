import React from 'react'

// import styled component
import styled from 'styled-components';

// import { ButtonStyled } from '../styles/Layout';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const html_icon = <FontAwesomeIcon icon="fa-brands fa-html5" />;
// const css = <FontAwesomeIcon icon="fa-brands fa-css3" />
// const js = <FontAwesomeIcon icon="fa-brands fa-js" />
// const scss = <FontAwesomeIcon icon="fa-brands fa-sass" />
// const tailwind = <FontAwesomeIcon icon="fa-solid fa-file-code" />
// const cpp = <FontAwesomeIcon icon="fa-solid fa-binary" />
// const java = <FontAwesomeIcon icon="fa-brands fa-java" />
// const python = <FontAwesomeIcon icon="fa-brands fa-python" />
// const figma = <FontAwesomeIcon icon="fa-brands fa-figma" />
// const vscode = <FontAwesomeIcon icon="fa-solid fa-file-pen" />
// const react = <FontAwesomeIcon icon="fa-solid fa-file-pen" />
// const git = <FontAwesomeIcon icon="fa-brands fa-git-alt" />
// const mysql = <FontAwesomeIcon icon="fa-solid fa-database" />
// const firebase = <FontAwesomeIcon icon="fa-solid fa-fire-flame-curved" />

function SkillStats({ tools: { title } }) {
    return (
        // <ButtonStyled>
        //     {title}
        // </ButtonStyled>
        <SkillState>{title}</SkillState>
    )
}

const SkillState = styled.div`
    width: 75%;
    text-align: center;
    color: var(--primary-color);
    background-color: rgba(250, 250, 250, 0.2);
    text-transform: uppercase;
    padding: .5rem;
    border-radius: .5rem;
    margin: .5rem 0;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export default SkillStats;