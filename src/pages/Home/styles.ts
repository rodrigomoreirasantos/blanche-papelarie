import styled from "styled-components";

export const HomeContainer = styled.main`
        

    background: ${props => props.theme['--gray-300']};
    
    .imagesSlider {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
        }
    }
   
`

export const SliderContainer = styled.div`
    img {
        height:19rem;
    }
`

export const BoxItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const BoxCollectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    gap: 3.5rem;
`