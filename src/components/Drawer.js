function Drawer() {
  return (
    <div style={{ display: 'none' }} className="drawer-overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="cu-p removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          {/* Айтем в корзине */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">
                Мужские Кроссовки
                <br /> Nike Air Max 270
              </p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          {/* Айтем в корзине */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">
                Мужские Кроссовки
                <br /> Nike Air Max 270
              </p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          {/* Айтем в корзине */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">
                Мужские Кроссовки
                <br /> Nike Air Max 270
              </p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          {/* Айтем в корзине */}
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/01.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">
                Мужские Кроссовки
                <br /> Nike Air Max 270
              </p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/btn_arrow.svg" alt="Arrow" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
