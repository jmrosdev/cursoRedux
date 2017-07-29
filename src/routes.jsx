import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App'
import ProductListContainer from './components/products/ProductListContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProductListContainer}/>
    </Route>
)