import { Heart } from "phosphor-react";
import { useState } from "react";
import { BoxContainer, BoxProduct } from "./styled";

import { Handbag } from 'phosphor-react'


interface ProductInfoProps {
    url: string
    title: string | undefined
}


export function BoxItem({ url, title }:ProductInfoProps) {
    const [likeIcon, setLikeIcon] = useState(false)
    
    return(
        <BoxContainer>
            <BoxProduct>

                <img src={url} alt="" />
                <p>{title}</p>

                
                <div>
                    <button className="buyItem">
                        <Handbag size={28} />
                    </button>
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