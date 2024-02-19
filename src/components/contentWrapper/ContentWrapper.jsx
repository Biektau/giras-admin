import React from "react";
import styles from "./ContentWrapper.module.scss";
import CustomButton from "../customButton/CustomButton";
import { IoAddCircleOutline } from "react-icons/io5";
import TableWrapper from "../tableWrapper/TableWrapper";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function ContentWrapper({ data, isLoading, isError }) {
  const currentUrl = window.location.pathname;

  const { height } = useWindowDimensions();

  let contentWrapperHeight = height - 20 * 2 - 50 - 10;

  return (
    <div
      style={{ height: `${contentWrapperHeight}px` }}
      className={styles.container}
    >
      <CustomButton
        to={`${currentUrl}/create`}
        icon={<IoAddCircleOutline />}
        text="Добавить"
        backColor="#8ec07c"
      />
      <TableWrapper data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
