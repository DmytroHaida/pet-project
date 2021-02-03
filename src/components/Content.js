import { Route } from 'react-router-dom';
import CartContainer from './CartContainer'
import GoodsTileContainer from './goods/GoodsTileContainer';
function Content() {
    return (
        <div className="container">
            <div className="content">
                <GoodsTileContainer />
                <Route path="/shopping_cart"><CartContainer /></Route>
            </div>
        </div>
    )
}
export default Content;