function Item(props) {
  return (
    <>
      <div className="items flex wrap">
        {props.menu.map((item) => {
          return (
            <div key={item.id} className="item flex flex-48">
              <article className="flex">
                <figure className="img flex-30">
                  <img src={item.img} alt={item.title} />
                </figure>
                <div className="article-info flex col flex-68">
                  <div className="flex justify-bt align-ct">
                    <h3 className="item-title">{item.title}</h3>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <hr className="hr-item" />
                  <p className="desc">{item.desc}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Item;
