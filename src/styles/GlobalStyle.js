import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.light-theme{
    --primary-color: #004F76;
    --white-color: #3F3F3F;
    --primary-color-light: #057FFF;
    --background-dark-color: #fbfbfb;
    --box-shadow-color: #00000019;

    --button-styled-bg-color: #004F76;

    --background-light-color: #F6F9F9;
    --background-light-color-2: #037fff4d;
    --border-color: #cbced8;

    --portfolio-bg: #f9f9f9;

    --toggle-color: #037fff4d;

    --sidebar-dark-color: #F0F0F0;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

.dark-theme{
    --primary-color: #14829F;
    --white-color: #E1E1E1;
    --primary-color-light: #057FFF;
    --background-dark-color: #10121A;
    --box-shadow-color: #e4e4e4;
    
    --button-styled-bg-color: #004F76;
    --portfolio-bg: #fff1;

    --background-light-color: #FFF3;
    --background-light-color-2: #037fff4d;
    --border-color: #2e344e;

    --toggle-color:  #037fff4d;

    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Open-sans, sans-serif;
    letter-spacing: .5px;
    font-weight: 400;
    color: var(--white-color);
    scroll-behavior: smooth;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

textarea{
    max-width: 100%;
}

a{
    font-family: inherit;
    color: inherit;
}

h1{
    color: var(--white-color);
}

span{
    color: var(--primary-color);
    font-weight: 600;
}

h6{
    color: var(--white-color);
}

//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}

//Floting Toggler
.light-dark-mode{
    background-color: var(--toggle-color);
    border-radius: .75rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    svg{
      display: flex;
      align-items: center;
      color: var(--white-color);
    }
}

//Nav Toggler
.ham-burger-menu{
    position: fixed;
    right: 5%;
    top: 2%; 
    display: none;
    z-index: 15;
    @media screen and (max-width:1200px){
        display: block;
    }
}
    
.arrowUp{
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 15;
    display: block;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    -webkit-backface-visibility: hidden;
    @media screen and (max-width:800px){
        bottom: 2%;
    }
}

.nav-toggle{
    transform: translateX(0%);
    z-index: 20;
}
`;

export default GlobalStyle;
