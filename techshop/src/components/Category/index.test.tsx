import { render, screen } from '@testing-library/react';
import Category from '.';

describe('Category Component', () => {
  it('should render with no errors', () => {

    const style = {
        color:'white',
        backgroundColor:'black'
    };

    render(
        <Category id={1} style={style}>
            Category Name
        </Category>
    );

    const categoryName = screen.getByText('Category Name');
    expect(categoryName).toBeInTheDocument();

  });

});