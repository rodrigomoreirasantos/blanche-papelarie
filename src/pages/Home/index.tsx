import { BoxCollections } from "../../components/BoxCollections";
import { BoxItem } from "../../components/BoxItem";
import { BoxCollectionContainer, BoxItemContainer, HomeContainer, SliderContainer } from "./styles";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

import slideImage from '../../assets/slideImage.svg'
import slideImageWhite from '../../assets/slideImage-white.svg'
import roxo from '../../assets/ROXO.jpg'


import twoNoteRaibow from '../../assets/2-CADERNOS.jpeg'
import sunflower from '../../assets/GIRASSOL.jpeg'
import noteColours from '../../assets/NOTES-COLOURS.jpeg'
import kidsNotebook from '../../assets/KIDS.jpeg'

import scheduleCollection from '../../assets/AGENDA.jpeg'
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
            url: twoNoteRaibow,
            title: 'FINANCIAL PLANNER',
            price: '25.00'

        },
        {
            id: '2',
            url: noteColours,
            title: 'COLOURS NOTES',
            price: '21.00'
        },
        {
            id: '3',
            url: kidsNotebook,
            title: 'KIDS NOTEBOOK',
            price: '18.00'
        },
        {
            id: '4',
            url: sunflower,
            title: 'SUNFLOWER NOTEBOOK',
            price: '15.00'
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
                {productsInfo.map((product, index) => {
                        return(
                            <BoxItem 
                                url={product.url}
                                title={product.title}
                                price={product.price}
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