import { Heart } from "phosphor-react";
import { useState } from "react";
import { BoxContainer, BoxProduct } from "./styled";

import { Handbag } from 'phosphor-react'


interface ProductInfoProps {
    url?: string
    title: string
    price?: string
    id: string 
}


export function BoxItem({ url, title, price, id }:ProductInfoProps) {
    const likedItem = {
        id,
        title: title
    }
    
    const [likedIcon, setLikedIcon] = useState(false)
    const [itemLikedArray, setItemLikedArray] = useState<ProductInfoProps[]>([likedItem])
    

    
    function handleItemLikedSelected(){
        setLikedIcon(!likedIcon)

        if (!likedIcon){

            setItemLikedArray([...itemLikedArray, likedItem])
            console.log(itemLikedArray)
        }
    }
    
    return(
        <BoxContainer>
            <BoxProduct>

                <img src={url} alt="" />
                <div className="description">
                    <p>{title}</p>
                    <p>$ {price}</p>
                </div>
                
                <div>
                    <button className="buyItem">
                        <Handbag size={28} />
                    </button>
                    <button
                        id={id}
                        onClick={handleItemLikedSelected}
                    >
                        <Heart size={28} weight={likedIcon ? 'fill' : 'regular'}/>
                    </button>
                </div>
                
            </BoxProduct>
        </BoxContainer>
    )
}