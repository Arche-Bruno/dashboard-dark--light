import React, { useState } from "react";
import "./Section_mainCard_orders.css";

const Section_mainCard_Orders = ({
  id,
  course,
  number,
  pay,
  status,
  details,
}) => {
  const [colorStatus, setColorStatus] = useState("");

  return (
    <tr className="Section_mainCard_orders-container">
      <th className={`th ${id === 0 ? "orders_h1" : ""}`}>{course} </th>
      <th className={`th ${id === 0 ? "orders_h1" : ""}`}>{number} </th>
      <th className={`th ${id === 0 ? "orders_h1" : ""}`}>{pay} </th>
      <th
        className={`th ${id === 0 ? "orders_h1" : ""} ${
          status === "Declined"
            ? "yellow"
            : status === "Active"
            ? "red"
            : status === "Pending"
            ? "gray"
            : ""
        }`}
      >
        {status}
      </th>
      <th>
        {details}
      </th>
    </tr>
  );
};

export default Section_mainCard_Orders;
