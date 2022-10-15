import { BoxContainer, Collections } from "./styles";
import { ArrowRight } from 'phosphor-react'


interface BoxCollectionsProps {
    url: string
    description: string
}


export function BoxCollections({ url, description }:BoxCollectionsProps) {
    return(
        <BoxContainer>
            <Collections>
                <div>
                    <img src={url} alt="" />
                </div>

                <button>
                    {`See all collection ${description}`}
                    <ArrowRight />
                </button>

            </Collections>
            
        </BoxContainer>
    )
}