import { render, screen, fireEvent, waitForElementToBeRemoved,  queryByRole, queryByText } from '@testing-library/react';
import Home from '../../pages/Home'
import {BrowserRouter} from 'react-router-dom'

describe('App', () => {
  
  test('renders learn react link', () => {
      render(<BrowserRouter><Home /></BrowserRouter>);
      screen.getByRole("heading")
      screen.getByRole("link")
  });

  test('renders learn react link', async () => {
      render(<BrowserRouter><Home /></BrowserRouter>);
      const buttonClick = screen.getByRole('link', {name: 'Start'})
      fireEvent.click(buttonClick)
      // await wwaitForElementToBeRemoved(
      //   () => () => queryByText('Badges Creator'),
      //   {timeout: 1000}
      // )
  });
})