// importing styled component
import styled from 'styled-components'

const MainLayout = styled.div`
    padding: 5rem;
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    @media screen and (max-width: 571px){
        padding: 2rem .4rem;
    }
`;

const InnerLayout = styled.div`
    padding: 1rem 0;
`;

export { MainLayout, InnerLayout }