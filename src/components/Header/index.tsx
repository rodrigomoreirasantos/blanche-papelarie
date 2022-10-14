import { HeaderContainer, InputSeachItem } from "./styled";

import { NavLink } from "react-router-dom";

import { Avatar,Box,TextField, InputAdornment} from '@mui/material';
import { AccountCircle } from '@mui/icons-material'

import { User, ShoppingCart, Heart, Headlights  } from 'phosphor-react'
import logoBlanchePapelarie from '../../assets/blache-logo.svg'
import  userImage from '../../assets/userImage.svg'

export function Header() {
    return(
        <HeaderContainer>
           <div className="logo">
            <img src={logoBlanchePapelarie} alt="" />
           </div>

           <form action="">
            <div>
                <InputSeachItem 
                    placeholder="Find here"
                    
                />
            </div>
            
           </form>
            <div className="buttonsActions">
                <button>
                    <Heart size={24}/>
                </button>
                <button>
                    <ShoppingCart size={24}/>
                </button>
                <button className="avatar">
                    <Avatar src={userImage} />
                </button>

                
            </div>
        </HeaderContainer>
    )
}