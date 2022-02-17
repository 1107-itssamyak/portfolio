import insignia_image from '../image/insignia_image.jpg';
import forward_image from '../image/forward_image.jpg';
import pokedex_image from '../image/pokedex_image.jpg';
import typing_game_image from '../image/typing_game_image.jpg';
import portfolio_image from '../image/portfolio_image.jpg';

const data = [
    {
        id: 1,
        category: 'Full Stack Project',
        link1: 'https://github.com/1107-itssamyak/portfolio',
        link2: 'https://samyak-mehta.web.app/',
        title: 'Portfolio Website',
        image: `${portfolio_image}`,
        text: 'Created with only React, Framer-Motion, CSS3'
    },
    {
        id: 2,
        category: 'Web Game Project',
        link1: 'https://github.com/1107-itssamyak/Typing-game',
        link2: 'https://typing-game-1.web.app/',
        title: 'Typing Game',
        image: `${typing_game_image}`,
        text: 'Created with only HTML5, SCSS, JS'
    },
    {
        id: 3,
        category: 'Web Development',
        link1: 'https://github.com/1107-itssamyak/Forward',
        link2: 'https://forward-455dc.web.app/index.html',
        title: 'Forward',
        image: `${forward_image}`,
        text: 'Created using HTML5, CSS3, JS, CHART.JS, GOOGLE FIREBASE'
    },
    {
        id: 4,
        category: 'Frontend Project',
        link1: 'https://github.com/1107-itssamyak/Pokedex-Project',
        link2: 'https://pokedex-project-1107-itssamyak.vercel.app/',
        title: 'PokeDex Project',
        image: `${pokedex_image}`,
        text: 'Created using React JS, CSS3'
    },
    {
        id: 5,
        category: 'Frontend Development',
        link1: 'https://github.com/1107-itssamyak/Frontend-development-project',
        link2: 'http://frontend-development-project.vercel.app/',
        title: 'Figma Development',
        image: `${insignia_image}`,
        text: 'Created using HTML5, CSS3, JS'
    }
]

export { data };