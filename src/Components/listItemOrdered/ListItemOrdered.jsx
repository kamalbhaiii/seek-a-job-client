import React, { Fragment } from "react";
import ListItem from "./unit/listItem/ListItem";

const ListItemOrdered = ({ list, element: Compo, kbd = true, children }) => {
  return (
    <Fragment>
      {list?.map((item, key) => {
        return (
          <>
            <ListItem kbd={kbd} id={key + 1} key={key} item={item}>
              {children}
            </ListItem>
          </>
        );
      })}
    </Fragment>
  );
};

export default ListItemOrdered;
