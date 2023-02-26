import React, { Fragment } from "react";
import ListItem from "./unit/listItem/ListItem";

const ListItemOrdered = ({ list }) => {
  return (
    <Fragment>
      {list?.map((item, key) => {
        return <ListItem id={key + 1} key={key} item={item} />;
      })}
    </Fragment>
  );
};

export default ListItemOrdered;
