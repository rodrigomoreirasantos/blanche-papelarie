import { HeaderContainer, InputSeachItem } from "./styled";

import { NavLink } from "react-router-dom";

import { Avatar,Box,TextField, InputAdornment} from '@mui/material';
import { AccountCircle } from '@mui/icons-material'

import { User, ShoppingCart, Heart, Headlights  } from 'phosphor-react'
import logoBlanchePapelarie from '../../assets/blache-logo.svg'
import  userImage from '../../assets/userImage.svg'
import '../../assets/logo-project.jpg'
import { useContext, useEffect, useState } from "react";
import { ItemsLikedContext } from "../../contexts/ItemsLikedContext";

export function Header() {
    const { itemLiked } = useContext(ItemsLikedContext)
    const [itemLikedArray, setItemLikedArray] = useState<any[]>([])
    const [itemLikeIcon, setItemLikedIcon] = useState<any[]>([])
    useEffect(() => {
        itemLiked.map((item) => {            
            if(!itemLikeIcon.includes(item.id)) {
                setItemLikedIcon((state) => [...state, item.id])
            } else {
                const index = itemLikeIcon.indexOf(item.id)
                if (index > -1) {
                    itemLikeIcon.splice(index, 1)
                    setItemLikedArray(itemLikedArray.splice(index,1))
                }

            }
            

        })
    },[itemLiked])

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
                    <Heart size={24} />
                    <span>
                        <p>
                            {itemLikeIcon.length}
                        </p>
                    </span>
                </button>
                    
                <button>
                    <ShoppingCart size={24} />
                </button>
                <button className="avatar">
                    <Avatar src={userImage} />
                </button>

                
            </div>
        </HeaderContainer>
    )
}