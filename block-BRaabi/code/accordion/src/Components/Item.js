function Item(props) {
  return (
    <>
      {props.item.map((item,i) => {
        return (
          <div key={i}>
            <h3 className="question">
              {item.name}
              <span className="expand">--</span>
            </h3>
            <p className="answer">{item.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default Item;
