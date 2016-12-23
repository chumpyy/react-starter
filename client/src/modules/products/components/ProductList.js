import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductTable } from './';

const ProductList = ({ products, canDelete, canUpdate, onDeleteClick }) => (
    <div>

        <ProductTable
            products={products}
            canDelete={canDelete}
            canUpdate={canUpdate}
            onDeleteClick={onDeleteClick}
        />

        <LinkContainer to="/products/create">
            <Button bsStyle="success">
                Add Product
            </Button>
        </LinkContainer>

    </div>
);

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    canDelete: PropTypes.bool.isRequired,
    canUpdate: PropTypes.bool.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};

export default ProductList;
