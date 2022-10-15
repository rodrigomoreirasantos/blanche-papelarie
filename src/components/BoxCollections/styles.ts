import styled from "styled-components";

export const BoxContainer = styled.div`


    display: flex;
    align-items: center;
    justify-content: center;
`

export const Collections = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8rem;

    cursor: pointer;

    div{
        width: 35.25rem;
        height: 35.25rem;
        
        margin: 0 auto;
        overflow: hidden;
        
        border-radius: 8px 8px 0px 0px;

        img {
            width: 35.25rem;
            height: 35.25rem;
            
            transition: all 0.5s ease-in-out;
    
            &:hover{
                transform: scale(1.1);
            }
        }
    }

   
        
    button {
        width: 100%;
        
        padding: 1rem;

        background: ${(props) => props.theme['white']};
        
        border-radius: 0px 0px 8px 8px;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;

        
    }
    
    &:hover {
        button{
            transition: all 0.5s ease-in-out;
            background: ${(props) => props.theme['--orange-300']};
        }
    }
`
