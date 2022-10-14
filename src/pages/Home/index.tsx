import { BoxItem } from "../../components/BoxItem";
import { HomeContainer } from "./styles";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

import slideImageBlack from '../../assets/slideImage.svg'
import slideImageWhite from '../../assets/slideImage-white.svg'
import colorido from '../../assets/COLORIDO.svg'


import agenda from '../../assets/AGENDA.jpeg'
import note from '../../assets/NOTE.jpeg'

export function Home() {
    const slideImages = [
        {
            url: slideImageBlack
        },
        {
            url: slideImageWhite,
        },
        {
            url: colorido,
        },
        
    ]

    const productsInfo = [
        {
            url: agenda
        },
        {
            url: note
        },
    ]


    return(
        <HomeContainer>
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="imagesSlider" key={index}>
                        <img src={slideImage.url} alt="" /> 
                    </div>
                ))} 
                </Slide>
            </div>
            <div className="boxItemCotainer">
               
               {productsInfo.map((product, index) => {
                return(
                    <BoxItem url={product.url}/>
                )
               })}
            </div>

        </HomeContainer>
    )
}