import GoodsTile from "../GoodsTile"
import { useSelector,useDispatch } from 'react-redux'
import {ShoppingCartItems} from '../../redux/reducers/PizzaReducer'
const GoodsTileContainer = () => {
    const pizzaItems = useSelector(state => state.pizzaItems.pizzaItems)
    const shoppingCart = useSelector(state => state.pizzaItems.shoppingCart)
    const dispatch = useDispatch()
    const addToCart = (item) => {
        dispatch(ShoppingCartItems(item))
    }
    return (
        <>
            { pizzaItems.map(i =>
                <GoodsTile 
                key={i.id}
                id={i.id}
                tittleName={i.name}
                price={i.price}
                goodsParams={i.name}
                size={i.size}
                params={i.dough}
                shoppingCart={shoppingCart}
                addToCart={addToCart}
                />
            )}
        </>
    )
}

export default GoodsTileContainer;