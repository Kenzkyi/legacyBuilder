import React, { useState } from "react";
import Loading from "./Loading";

const Callback = () => {
  const [callback, setCallback] = useState(false);

  return <>{!callback ? <Loading /> : <div>Unable to Authenticate</div>}</>;
};

export default Callback;
