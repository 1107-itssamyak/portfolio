import React from 'react'

// import styled component
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <div>
                Hi, I am <span>Samyak Mehta</span>
            </div>
            <div>
                Front-End Web Developer
            </div>
            <Link>
                <a href="google.com">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="google.com">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="google.com">
                    <i className="fab fa-github"></i>
                </a>
            </Link>
        </>
    )
}

const Link = styled.div`
    a{
        img{
            color: black;
        }
    }
`

export default Home;