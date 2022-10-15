import { BoxCollections } from "../../components/BoxCollections";
import { BoxItem } from "../../components/BoxItem";
import { BoxCollectionContainer, BoxItemContainer, HomeContainer, SliderContainer } from "./styles";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

import slideImage from '../../assets/slideImage.svg'
import slideImageWhite from '../../assets/slideImage-white.svg'
import roxo from '../../assets/ROXO.jpg'


import essentialNote from '../../assets/ESSENTIALNOTE.jpeg'
import noteColours from '../../assets/COOLNOTE.jpeg'
import notePag from '../../assets/NOTEPAG.jpeg'
import plannerNotebook from '../../assets/PLANNER.jpeg'


import watermelonBanana from '../../assets/MELANCIABANANA.jpeg'
import noteCollection from '../../assets/NOTE.jpeg'

export function Home() {
    const slideImages = [
        {
            id: '1',
            url: slideImage,
        },
        {
            id: '2',
            url: slideImageWhite,
        },
        {
            id: '3',
            url: roxo,
        },
        
    ]

    const productsInfo = [
        {
            id: '1',
            url: plannerNotebook,
            title: 'PLANNER',
            price: '10.00'

        },
        {
            id: '2',
            url: noteColours,
            title: 'COLOURS NOTEBOOK',
            price: '5.00'
        },
        {
            id: '3',
            url: notePag,
            title: 'NOTEPAD',
            price: '3.00'
        },
        {
            id: '4',
            url: essentialNote,
            title: 'THE ESSENTIAL NOTE',
            price: '5.00'
        },
    ]

    const collectionInfo = [
        {
            id: '1',
            url: watermelonBanana,
            description: 'Tropical',
        },
        {
            id: '2',
            url: noteCollection,
            description: 'Kids',
        }
    ]


    return(
        <HomeContainer>
            <SliderContainer>
                <Slide>

                    {slideImages.map((slideImage) => {
                        return (
                            <div className="imagesSlider" key={slideImage.id}>
                                <img src={slideImage.url} alt="" /> 
                            </div>
                        )
                    })}
                </Slide>
            </SliderContainer>

            <BoxItemContainer>
                {productsInfo.map((product) => {
                        return(
                            <BoxItem 
                                key={product.id}
                                url={product.url}
                                title={product.title}
                                price={product.price}
                                id={product.id}
                            />
                        )
               })}
            </BoxItemContainer>
            
            <BoxCollectionContainer>
               {collectionInfo.map((collection) => {
                    return (
                        <BoxCollections 
                            url={collection.url}
                            description={collection.description} 
                        
                        />
                    )
                })}
            </BoxCollectionContainer>

            

        </HomeContainer>
    )
}