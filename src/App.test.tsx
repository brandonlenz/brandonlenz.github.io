import { render } from '@testing-library/react';

import App from './App';

const noop = () => {}

describe("App Component", () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', class { observe = noop; disconnect = noop });
  })

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
