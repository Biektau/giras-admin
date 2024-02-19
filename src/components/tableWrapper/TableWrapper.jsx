import React from "react";
import styles from "./TableWrapper.module.scss";
import TableItem from "../tableItem/TableItem";
import Spinner from "../spinner/Spinner";

export default function TableWrapper({ data, isLoading, isError }) {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <div id="div" className={styles.container}>
      {data.map((item) => (
        <TableItem key={item._id} item={item} />
      ))}
    </div>
  );
}
