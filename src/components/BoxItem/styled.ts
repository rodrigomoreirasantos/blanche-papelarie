import styled from "styled-components";


export const BoxContainer = styled.div`
    padding: 1.7rem;
    
    `

export const BoxProduct = styled.div`
    width: 16rem;
    height: 21.375rem;
    /* padding: 1rem 1.5rem; */
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    
    
    background: ${props => props.theme['--orange-300']};
    border-radius: 8px;
    
    
    margin: 0 auto;
    overflow: hidden;

        

    img {
        width: 13em;
        height: 13rem;

        border-radius: 8px;


        /* transition: all 0.5s ease; */
    
        &:hover{
            /* transform: scale(1.1); */
        }

    }

    p {
        width: 13rem;

        font-size: 1rem;
        font-weight: 500;
    }
    
    div {
        width: 13rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 1rem;

        button{
            background: transparent;
            border: none;
            cursor: pointer;

            display: flex;
            align-items: center;

            &:first-child{
                color: ${(props) => props.theme['--gray-300']};

                transition: all 0.3s;

                &:hover {
                    color: ${(props) => props.theme['--orange-700']};
                }
            }   
            
            &:last-child {
                
                display: flex;
                align-items: center;
                justify-content: flex-end;
        
                color: ${props => props.theme['--red-500']};   
            }
        }

    }


`