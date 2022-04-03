// import image from storage
import insignia_image from '../image/insignia_image.webp';
import forward_image from '../image/forward_image.webp';
import pokedex_image from '../image/pokedex_image.webp';
import typing_game_image from '../image/typing_game.webp';
import portfolio_image from '../image/portfolio_image.webp';

const data = [
    {
        id: 1,
        link1: 'https://github.com/1107-itssamyak/portfolio',
        link2: 'https://samyak-mehta.web.app/',
        title: 'Portfolio Website',
        description: 'A Personal Project for displaying my intel & portfolio stack',
        image: `${portfolio_image}`,
        text: 'Developed using React JS, Framer-Motion, Scss, css3, Google Firebase'
    },
    {
        id: 2,
        link1: 'https://github.com/1107-itssamyak/Typing-game',
        link2: 'https://typing-game-1.web.app/',
        title: 'Typing Game',
        description: 'A Typing Game using which a user can increase his typing speed, if he/she plays the game consistently.',
        image: `${typing_game_image}`,
        text: 'Developed using html5, scss, js, Google Firebase'
    },
    {
        id: 3,
        link1: 'https://github.com/1107-itssamyak/Forward',
        link2: 'https://forward-455dc.web.app/index.html',
        title: 'Forward',
        description: 'A Web Dev Project which helps in keeping track of time. The Project also displays the tracked time using Beautiful Chart.',
        image: `${forward_image}`,
        text: 'Developed using html5, css3, chartjs, js, Google Firebase'
    },
    {
        id: 4,
        link1: 'https://github.com/1107-itssamyak/Pokedex-Project',
        link2: 'https://pokedex-project-1107-itssamyak.vercel.app/',
        title: 'PokeDex Project',
        description: 'A React Project which fetches Pokemon detail from the API randomly, and displays Winner among 2 players automatically from the Pokemons user had received',
        image: `${pokedex_image}`,
        text: 'Developed using React JS, CSS3'
    },
    {
        id: 5,
        link1: 'https://github.com/1107-itssamyak/Frontend-development-project',
        link2: 'http://frontend-development-project.vercel.app/',
        title: 'Insignia Development',
        description: 'A Freelance Frontend Project developed by me. This Prototype development was completed using the mockups prepared in Figma.',
        image: `${insignia_image}`,
        text: 'Developed using html5, css3, js'
    }
]

export { data };