import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ItemLikedContextProvider } from './contexts/ItemsLikedContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ItemLikedContextProvider>
          <Router />
        </ItemLikedContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    
  )
}

export default App
