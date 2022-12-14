import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    
    position: sticky;
    top: 0;

    z-index: 99999;
    
    padding: 1rem;
    
    background: ${(props) => props.theme['--gray-300']};
    border-bottom: 1px solid ${(props) => props.theme['--gray-700']};

    .logo {
        width: 4rem;
        height: 4rem;
    }

    form {
        margin: 0 auto;
    }

    div {
        display: flex;
        gap: 1rem;

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            transition: all .3s;
            &:hover{
                color: ${props => props.theme['--orange-500']};
            }

            position: relative;

            span {
                position: absolute;
                top: -1px;
                right: -6px;
                
                width: 1rem;
                height: 1rem;

                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 0.8rem;
                font-weight: bold;
                

                background: ${(props) => props.theme['--red-500']};
                color: ${(props) => props.theme['white']};

                border-radius: 999999px;


            }
        }
    }

    .avatar {
        div {
            border: 1px solid ${(props) => props.theme['--gray-700']};

        }
    }
`

export const InputSeachItem = styled.input`
    padding: 0.5rem 1rem;
    width: 16rem;
    border: 0;
    border-radius: 16px;

    &:focus{
        border: 2px solid ${(props) => props.theme['--orange-300']}
       
    }
`