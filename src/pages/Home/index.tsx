import { BoxItem } from "../../components/BoxItem";
import { HomeContainer } from "./styles";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

import slideImageBlack from '../../assets/slideImage.svg'
import slideImageWhite from '../../assets/slideImage-white.svg'
// import slideImageBrand from '../../assets/brandImageSlider.svg'

export function Home() {
    const slideImages = [
        {
            url: slideImageBlack
        },
        {
            url: slideImageWhite,
        },
        // {
        //     url: slideImageBrand,
        // },
        
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
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
            </div>

        </HomeContainer>
    )
}