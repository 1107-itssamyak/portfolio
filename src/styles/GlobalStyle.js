import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.light-theme{
/*     
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4; */

    
    /* special color for title span's */
    --span-theme-color: #F1F1F1;
    
    --white-color: #151515;
    --primary-color: #004F76;
    --border-color: #cbced8;

    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

.dark-theme{
    /* 
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B; */

    /* special color for title span's */
    --span-theme-color: #191d2b70;
    
    --primary-color: #004F76;
    --white-color: #FFF;
    --primary-color-light: #057FFF;
    --primary-color-light: #057FFF;

    --border-color: #2e344e;

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
    font-family: 'Inter', Open-sans, sans-serif;
    letter-spacing: .5px;
    font-weight: 400;
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
    span{
        @media screen and (max-width: 502px){
        }
    }
    @media screen and (max-width: 502px){
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    padding-bottom: .6rem;
}

//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}

//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6rem;
    height: 3rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;

    .left-content, .right-content{
        margin: 0.1rem;
    }

    svg{
      display: flex;
      align-items: center;
      color: var(--white-color);
    }

    @media screen and (max-width:996px){
        height: 5rem;
        width: 3.5rem;
        flex-direction: column;
    }
  }

    //Nav Toggler
    .ham-burger-menu{
        position: fixed;
        right: 5%;
        top: 2%; 
        display: none;
        z-index: 15;
        svg{
        }
        @media screen and (max-width:1200px){
            display: block;
        }
    }
    
    .arrow-up-icon{
        position: fixed;
        right: 5%;
        bottom: 2%;
        display: none;
        z-index: 15;
        svg{
        }
        @media screen and (max-width:1200px){
            display: block;
        }
    }

    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
`;

export default GlobalStyle;
