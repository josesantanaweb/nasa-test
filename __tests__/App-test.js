import 'react-native'
import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import App from '../src/App.js'

describe(App, () => {
  it('Should Render Rover Button', () => {
    const {getByTestId} = render(<App />)
    const roverButton = getByTestId('rover-button')
    expect(roverButton).toBeTruthy()
    fireEvent.press(roverButton)
  })

  it('Should Render Rover Title', () => {
    const {getByText} = render(<App />)
    const roverTitle = getByText('Curiosity')
    expect(roverTitle).toBeTruthy()
  })

  it('Should Render Rover Photo', () => {
    const {getByTestId} = render(<App />)
    const roverPhoto = getByTestId('rover-photo')
    expect(roverPhoto).toBeTruthy()
  })
})
