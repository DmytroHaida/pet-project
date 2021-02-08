import pizzaImage from "../assets/image/pizza/pizza_0009_sloj3-300x300.jpg"
const  CartContent = (props) => {
    const { params, size, name, count, price, id, cutGoodsCount, addGoodsCount,index, a } = props
    let item = {
        params: params,
        size: size,
        count: count,
        id: id
    }
    return (
        <div className="shopping--cart__item">
            <img src={pizzaImage} width="80px" alt="pizzaImage" />
            <div className="shopping--cart__item-info">
                <h4>{name}</h4>
                <p>{params} тісто, {size}</p>
            </div>
            <div className="shopping--cart__item-counter">
                <button onClick={() => cutGoodsCount(item)}>
                    <span>-</span>
                </button>
                <b>{count}</b>
                <button onClick={() => addGoodsCount(item)}>
                    <span>+</span>
                </button>
            </div>
            <div className="shopping--cart__item-counter-price">
                <b>{count * price} &#8372;</b>
            </div>
            <div onClick={()=> a(index)} className="shopping--cart__item-counter-remove"></div>
        </div>
    );
}
export default CartContent;