import { Heart } from "phosphor-react";
import { useState } from "react";
import { BoxContainer, BoxProduct } from "./styled";

import ProductImage from '../../assets/productImage.svg'

export function BoxItem() {
    const [likeIcon, setLikeIcon] = useState(false)
    
    return(
        <BoxContainer>
            <BoxProduct>
                <img src={ProductImage} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis rem sapiente doloremque, minus laborum? Tenetur blanditiis numquam rem aspernatur debitis </p>
                
                <div>
                    <button className="buyItem">Buy</button>
                    <button
                        onClick={() => setLikeIcon(!likeIcon)}
                    >
                        <Heart size={28} weight={likeIcon ? 'fill' : 'regular'}/>
                    </button>
                </div>
                
            </BoxProduct>
        </BoxContainer>
    )
}