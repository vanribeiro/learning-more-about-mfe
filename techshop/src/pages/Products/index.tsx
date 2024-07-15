import React from "react";
import categories from "../../service/categories";
import CategoryList from './../../components/CategoryList';

const Products = () => {

	return (
		<>
			<CategoryList list={categories} data-testid="category-list" />
		</>
	);
};

export default Products;
