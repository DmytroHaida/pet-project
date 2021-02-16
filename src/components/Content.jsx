import { Redirect, Route } from 'react-router-dom';
import CartContainer from './cart/CartContainer'
import GoodsTileContainer from './goods/GoodsTileContainer';
function Content() {
    return (
        <div className="container">
            <div className="content">
                <Route path="/La_Pizza" render={() => <GoodsTileContainer />} />
                <Route path="/shopping_cart" render={() => <CartContainer />} />
                <Redirect from='/' to='/La_Pizza' />
            </div>
        </div>
    )
}
export default Content;