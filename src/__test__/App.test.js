import { render, screen } from '@testing-library/react';
import App from '../components/App'

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Badges Creator/i);
    expect(linkElement).toBeInTheDocument();
  });
})