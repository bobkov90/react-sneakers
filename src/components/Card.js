function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img width={32} height="32" src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/01.jpg" alt="sneakers" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <strong>12 999 руб.</strong>
        </div>
        <button className="button">
          <img width={32} height={32} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
