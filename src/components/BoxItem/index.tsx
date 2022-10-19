import { Heart } from "phosphor-react";
import { useContext, useState, useEffect } from "react";
import { BoxContainer, BoxProduct } from "./styled";

import { Handbag } from 'phosphor-react'
import { ItemsLikedContext } from "../../contexts/ItemsLikedContext";


interface ProductInfoProps  {
    url?: string
    title?: string 
    price?: string 
    id?: string
}


export function BoxItem({ url, title, price, id }:ProductInfoProps) {
    
    const likedItem: ProductInfoProps = {
        id,
        title: title
    }
    const { itemsLikedSelected } = useContext(ItemsLikedContext)
    const [likedIcon, setLikedIcon] = useState(false)
    const [itemLikedSelected, setItemLikedSelected] = useState<ProductInfoProps>(likedItem)
    
    function handleItemLikedSelected(){
        setLikedIcon(!likedIcon)
        setItemLikedSelected(likedItem)
        itemsLikedSelected(itemLikedSelected)
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