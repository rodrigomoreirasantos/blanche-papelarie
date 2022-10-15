import { createContext, ReactNode } from 'react'

export const ItemsLikedContext = createContext({})

interface ItemLikedContextProviderProps {
    children: ReactNode
  }

export function ItemLikedContextProvider({children}: ItemLikedContextProviderProps){
    return(
        <h1></h1>
    )
}