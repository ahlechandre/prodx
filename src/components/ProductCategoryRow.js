import React from 'react';

const ProductCategoryRow = ({ category }) => <tr><th colSpan="2">{category}</th></tr>;

ProductCategoryRow.propTypes = {
  category: React.PropTypes.string,
};

export default ProductCategoryRow;
