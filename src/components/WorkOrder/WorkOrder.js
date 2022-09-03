import React, { useState } from "react";
import WorkOrderForm from "./WorkOrderForm";
import Message from "./Message";

const WorkOrder = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <Message message={message} display={message ? "flex" : "none"} />
      <WorkOrderForm setMessage={setMessage} />
    </div>
  );
};

export default WorkOrder;
