import React, { useState } from "react";
import Loading from "./Loading";

const Callback = () => {
  const [callback, setCallback] = useState(false);

  return <Loading />;
};

export default Callback;
