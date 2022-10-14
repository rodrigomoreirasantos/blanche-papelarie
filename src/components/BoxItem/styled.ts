import styled from "styled-components";


export const BoxContainer = styled.div`
    padding: 2rem;
    
`

export const BoxProduct = styled.div`
    width: 20rem;
    height: 28rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    
    background: ${props => props.theme['--pink-500']};
    border-radius: 8px;
    
    img {
        width: 13rem;
        height: 13rem;
        border-radius: 8px;
    }

    p {
        width: 13rem;
    }
    
    div {
        width: 13rem;
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;

        button{
            background: transparent;
            border: none;
            cursor: pointer;

            &:first-child{
                padding: 0.3rem 2rem;
                flex: 1;
                background: ${(props) => props.theme['--gray-300']};
                color: ${(props) => props.theme['black']};

                border-radius: 8px;

                &:hover {
                    background: ${(props) => props.theme['--orange-700']};
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