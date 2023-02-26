import ellipses from "text-ellipsis";

const Ellipse = (text) => {
  if (window.innerWidth < 768) {
    return (
      <div className="tooltip  tooltip-bottom" data-tip={text}>
        {ellipses(text, 6, { ellipses: "..." })}
      </div>
    );
  } else if (window.innerWidth < 1440) {
    return (
      <div className="tooltip  tooltip-bottom" data-tip={text}>
        {ellipses(text, 10, { ellipses: "..." })}
      </div>
    );
  } else {
    return (
      <div className="tooltip  tooltip-bottom" data-tip={text}>
        {ellipses(text, 15, { ellipses: "..." })}
      </div>
    );
  }
};

export default Ellipse;
