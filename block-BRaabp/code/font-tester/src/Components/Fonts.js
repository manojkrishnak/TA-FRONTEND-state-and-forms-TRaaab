function Fonts(props) {
  return (
    <>
      {props.fontFamilies.map((ff) => {
        return (
          <div key={ff} className={(ff.replaceAll(" ", "-").toLowerCase())+ " font-box flex-48"}>
            <div>
              <span className="ff">{ff}</span>
            </div>
            <p  style={{"fontSize": props.size+"px"}} className="text">{props.message ? props.message : ""}</p>
          </div>
        );
      })}
    </>
  );
}

export default Fonts;
