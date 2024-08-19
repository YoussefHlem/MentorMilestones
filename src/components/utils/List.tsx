import React from "react";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ data, renderItem }: ListProps<T>) => {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </>
  );
};

export default List;
