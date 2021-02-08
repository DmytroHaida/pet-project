import pizza from "../assets/image/pizza/pizza_0009_sloj3-300x300.jpg"
import { useState } from "react";


const GoodsTile = (props) => {
    const { id, name, price, size, params, shoppingCart, addToCart } = props;
    const [paramsSelected, setParamsSelector] = useState(params[0]);
    const [sizeSelected, setSizeSelector] = useState(size[0]);
    const [total, setTotal] = useState(price[0]);
    const sizeSelector = (e) => {
        setSizeSelector(e)
        let index = size.findIndex(i => i === e)
        setTotal(price[index])
    }
    const addItem = () => {
        let item = {
            name: name,
            total: total,
            params: paramsSelected,
            size: sizeSelected, 
            count: 1,
            id: id
        }
        addToCart(item)
    }
    let arrForSumCount = shoppingCart.filter(i => i.id === id)
    let count = 0
    for (let i = 0;i < arrForSumCount.length; i++){
        count += arrForSumCount[i].count
    }
    return (
        <>
            <div className="pizza-block" key={id}>
                <img src={pizza} width="auto" alt="pizza" />
                <h4 className="pizza-block__tittle">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {params.map(p => <li className={paramsSelected === p ? "active" : null} onClick={() => { setParamsSelector(p) }} key={id + p}>{p}</li>)}
                    </ul>
                    <ul>
                        {size.map(s =>
                            <li className={sizeSelected === s ? "active" : null} onClick={() => { sizeSelector(s) }} key={id + s}>
                                {s}
                            </li>)}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <p>{total} &#8372;</p>
                    <button onClick={() => addItem()}>
                        +  Додати
                        {shoppingCart.some(i => i.id === id) === true ? <span>{count}</span> : null}
                    </button>
                </div>
            </div>
        </>
    )
}
export default GoodsTile;