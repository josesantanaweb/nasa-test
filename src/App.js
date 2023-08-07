import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {NavigationContainer} from '@react-navigation/native'
import themes from './theme'
import AppStack from './navigation/AppStack'

const App = () => {
  const [theme] = useState(themes.dark)

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
