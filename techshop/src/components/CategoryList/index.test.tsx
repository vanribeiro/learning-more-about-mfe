import { render, screen, waitFor } from '@testing-library/react';
import CategoryList from '.';
import { ICategory } from '../../interfaces/category';

describe('CategoryList Component', () => {
  const mockCategories: Array<ICategory> = [
    { id: 1, name: 'Category 1', style: { color: 'red', backgroundColor: 'white'} },
    { id: 2, name: 'Category 2', style: { color: 'blue', backgroundColor: 'transparent' } },
    { id: 3, name: 'Category 3', style: { color: 'green', backgroundColor: 'black' } },
  ];

  it('should renders without crashing', () => {
    render(<CategoryList list={mockCategories} />);
  });

  it('should renders the correct number of categories', () => {
    render(<CategoryList list={mockCategories} />);
    const categoryItems = screen.getAllByTestId(/category-list-item-/i);
    expect(categoryItems).toHaveLength(mockCategories.length);
  });

  it('should renders category names correctly', () => {
    render(<CategoryList list={mockCategories} />);
    mockCategories.forEach(category => {
      expect(screen.getByText(category?.name)).toBeInTheDocument();
    });
  });

  it('should renders the container with the correct data-testid', () => {
    render(<CategoryList list={mockCategories} />);
    const container = screen.getByTestId('category-list');
    expect(container).toBeInTheDocument();
  });

  it('should renders categories with correct styles', async() => {
    render(<CategoryList list={mockCategories} />);

    await waitFor(() => {
        mockCategories.forEach(category => {
          const categoryItem = screen.getByTestId(`category-list-item-${category.id}`);
          expect(categoryItem).toHaveStyle(category.style);
        });
  
    });
  });

});