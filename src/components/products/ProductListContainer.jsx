import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductList from './productList'
import * as productActions from '../../actions/productActions'

class ProductListContainer extends Component {
    constructor (props, context){
        super(props, context);
    }

    async componentWillMount() {
        await this.props.productActions.fetchProducts();
    }

    render() {
        return (
            <ProductList
                products={this.props.products}
                loading={this.props.loading}
            />
        );
    }
}

ProductListContainer.defaultProps = {
    products: []
}

ProductListContainer.PropTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired
}

function mapStateToProps (state) {
    return {
        products: state.productList.products,
        loading: state.productList.loading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);