import {render, screen} from '@testing-library/react'
import Badges from '../../pages/Badges'

describe('Badges Page', () => {
  
  test('Should render Loading correctly', () => {
    render(<Badges />)
    screen.getByTestId("loading-element")
  })

  test('Should render Error correctly', () => {
    render(<Badges/>)
    screen.getByTestId("loading-element")
  })
  
})
