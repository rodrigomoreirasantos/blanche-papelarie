import styled from "styled-components";

export const HomeContainer = styled.main`
        

    background: ${props => props.theme['--gray-300']};
    
    .slide-container{
        img {
            height:19rem;
        }
    }
    .boxItemCotainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .imagesSlider {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
        }
    }
   
`