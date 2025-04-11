import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router";
import axios from "axios";

const Verify = () => {
  const [isVerify, setIsVerify] = useState(false);
  const token = useParams();

  const handleVerify = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/v1/verify/student`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsVerify(true);
      console.log(res);
    } catch (error) {
      console.log(error);
      setIsVerify(false);
    }
  };

  useEffect(() => {
    handleVerify();
  }, [token]);

  return <>{!isVerify ? <Loading /> : <div>user verified successful</div>}</>;
};

export default Verify;
