const CartContent = (props) => {
    const { params, size, name, count, price, id, decreaseGoodsCount, addGoodsCount, index, image, cartItemDeleter } = props
    let item = {
        params: params,
        size: size,
        count: count,
        id: id
    }
    function deleteItem() {
        let confirm = window.confirm("Ви впевненні що хочите видалити")
        if (confirm) {
            cartItemDeleter(index)
        }
    }
    return (
        <div className="shopping--cart__item">
            <img src={image} width="80px" alt="pizzaImage" />
            <div className="shopping--cart__item-info">
                <h4>{name}</h4>
                <p>{params} тісто, {size}</p>
            </div>
            <div className="shopping--cart__item-counter">
                <button onClick={() => count > 1 ? decreaseGoodsCount(item) : deleteItem()}>
                    <span>-</span>
                </button>
                <b>{count}</b>
                <button onClick={() => addGoodsCount(item)}>
                    <span>+</span>
                </button>
            </div>
            <div className="shopping--cart__item-price">
                <b>{count * price} &#8372;</b>
            </div>
            <div>
                <div onClick={() => deleteItem()} className="shopping--cart__item-remove"></div>
            </div>
        </div>
    );
}
export default CartContent;