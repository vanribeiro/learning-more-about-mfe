import { render, screen } from '@testing-library/react';
import Loader from '.';

describe('Loader component', () => {
  it('should render with default props', () => {
    render(<Loader />);
    
    const loaderText = screen.getByText('Carregando...');
    expect(loaderText).toBeInTheDocument();
    
    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <Loader
        horizontalAlign="flex-start"
        verticalAlign="flex-end"
        iconSize={24}
        showIcon={false}
        iconColor="secondary"
      />
    );
    
    const loaderText = screen.getByText('Carregando...');
    expect(loaderText).toBeInTheDocument();
    
    const circularProgress = screen.queryByRole('progressbar');
    expect(circularProgress).not.toBeInTheDocument();
  });
});