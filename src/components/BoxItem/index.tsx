import { Heart } from "phosphor-react";
import { useState } from "react";
import { BoxContainer, BoxProduct } from "./styled";

interface ProductInfoProps {
    url: string
}


export function BoxItem({url}:ProductInfoProps) {
    const [likeIcon, setLikeIcon] = useState(false)
    
    return(
        <BoxContainer>
            <BoxProduct>
                <img src={url} alt="" />
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