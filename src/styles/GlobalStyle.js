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
    opacity: 0.99;
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
    border-radius: .5rem;
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

.active-class{
    background-color: var(--background-light-color-2);
}

.arrowUp{
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 15;
    margin-right: 16rem;
    display: block;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    @media screen and (max-width:1200px){
        bottom: 2%;
        margin-right: 0;
    }
}

.nav-toggle{
    transform: translateX(0%);
    z-index: 20;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    filter: blur(.5px);
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--white-color);
    animation: animate 25s linear infinite;
    bottom: -150px;
    z-index: -1;
}

.circles li:nth-child(1){
    z-index: -1;
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    z-index: -1;
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    z-index: -1;
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    z-index: -1;
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    z-index: -1;
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    z-index: -1;
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    z-index: -1;
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    z-index: -1;
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    z-index: -1;
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    z-index: -1;
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
`;

export default GlobalStyle;
