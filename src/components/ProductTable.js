import React, { PropTypes } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  let rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if ((product.name.indexOf(filterText) === -1) || (!product.stocked && inStockOnly)) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};

export default ProductTable;
