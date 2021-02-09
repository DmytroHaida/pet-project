import pizza from "../assets/image/pizza/pizza_0009_sloj3-300x300.jpg"
import { useState } from "react";
import { ShoppingCartItems } from "../redux/reducers/PizzaItemsReducer";
import { useDispatch, useSelector } from "react-redux";


function PizzaBlock() {
    const [dough, setPizzaDough] = useState("Тонке");
    const [pizzaSize, setPizzaSize] = useState("20см");
    const [price] = useState("888")
    const [pizzaName] = useState("Тут буде назва піцци")



    const dispatch = useDispatch()
    const pizzaItem = useSelector(state => state.pizzaItems.pizzaItems)
    const test = () => {
        let pizza = {
            pizzaName: pizzaName,
            price: price,
            pizzaSize: pizzaSize,
            pizzaBase: dough,
            id: 0
        }
        dispatch(ShoppingCartItems(pizza))
    }
    console.log('dd')
    return (
        <>
            {pizzaItem.map(i => <div className="pizza-block" key={i.id}>
                <img src={pizza} width="auto" alt="pizza" />
                <h4 className="pizza-block__tittle">{i.pizzaName}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className={dough === "Тонке" ? "active" : null} onClick={() => setPizzaDough("Тонке")}  >Тонке</li>
                        <li className={dough === "Традиційне" ? "active" : null} onClick={() => setPizzaDough("Традиційне")} >Традиційне</li>
                    </ul>
                    <ul>
                        <li className="active" onClick={() => expandContent(i.id)} >20см.</li>
                        <li className="active" onClick={() => setMidSize(i.id)}>30см.</li>
                        <li className="active" onClick={() => setbigSize(i.id)}>50см.</li>

                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <p>{i.price} &#8372;</p>
                    <button onClick={() => test()}> +  Додати <span>1</span></button>
                    <button onClick={() => dima()}>dima</button>
                </div>
            </div>)}
        </>
    )
}
export default PizzaBlock;