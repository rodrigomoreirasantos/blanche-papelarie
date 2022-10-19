import { createContext, ReactNode, useState } from 'react'

interface ItemsLikedProps {
    url?: string
    title?: string 
    price?: string
    id?: string
}

interface ItemsLikedContextType {
    itemLiked: ItemsLikedProps[]
    itemsLikedSelected: (dataProduct: ItemsLikedProps) => void
}


export const ItemsLikedContext = createContext({} as ItemsLikedContextType)

interface ItemLikedContextProviderProps {
    children: ReactNode
  }

export function ItemLikedContextProvider({children}: ItemLikedContextProviderProps){

    const [itemLiked, setItemLiked] = useState<ItemsLikedProps[]>([])

    function itemsLikedSelected(dataProduct: ItemsLikedProps){
        
        setItemLiked([dataProduct])
    }


    return(
        <ItemsLikedContext.Provider value={{itemsLikedSelected, itemLiked}}>
            {children}
        </ItemsLikedContext.Provider>
    )
}