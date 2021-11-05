import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

const noop = () => {}

const intersectionObserverMock = () => ({
  observe: noop,
  disconnect: noop
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock)

describe("App Component", () => {
  it('renders About, Portfolio, and Contact sections', () => {
    const { queryByTestId } = render(<App />);
    
    const aboutSection = queryByTestId("about-section");
    const portfolioSection = queryByTestId("portfolio-section")
    const contactSection = queryByTestId("contact-section")
    
    expect(aboutSection).toBeInTheDocument();
    expect(portfolioSection).toBeInTheDocument();
    expect(contactSection).toBeInTheDocument();
  })
});
