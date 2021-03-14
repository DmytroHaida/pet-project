import { useState } from "react";
const GoodsTile = (props) => {
    const { id, name, price, size, params, shoppingCart, addToCart, image } = props;
    const [paramsSelected, setParamsSelector] = useState(params[0]);
    const [sizeSelected, setSizeSelector] = useState(size[0]);
    const [itemPrice, setItemPrice] = useState(price[0]);
    const arrForSumCount = shoppingCart.filter(i => i.id === id)
    let count = 0
debugger
    const sizeSelector = (e) => {
        setSizeSelector(e)
        let index = size.findIndex(i => i === e)
        setItemPrice(price[index])
    }
    const addItem = () => {
        let item = {
            name: name,
            image: image,
            price: itemPrice,
            params: paramsSelected,
            size: sizeSelected,
            count: 1,
            id: id
        }
        addToCart(item)
    }
    arrForSumCount.forEach(element => { 
        count += element.count
    });
    return (
        <>
            <div className="goods-block" key={id}>
                <img src={image} width="250px" alt={name} />
                <h4 className="goods-block__tittle">{name}</h4>
                <div className="goods-block__selector">
                    <ul>
                        {params.map(el =>
                            <li className={paramsSelected === el ? "active" : null}
                                onClick={() => { setParamsSelector(el) }} key={id + el}>
                                {el}
                            </li>)}
                    </ul>
                    <ul>
                        {size.map(el =>
                            <li className={sizeSelected === el ? "active" : null}
                                onClick={() => { sizeSelector(el) }} key={id + el}>
                                {el}
                            </li>)}
                    </ul>
                </div>
                <div className="goods-block__bottom">
                    <p>{itemPrice} &#8372;</p>
                    <button className="my-button" onClick={() => addItem()}>
                        +  Додати
                        {shoppingCart.some(i => i.id === id) === true ? <span>{count}</span> : null}
                    </button>
                </div>
            </div>
        </>
    )
}
export default GoodsTile;