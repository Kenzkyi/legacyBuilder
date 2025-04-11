import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [isVerify, setIsVerify] = useState(false);
  const {token} = useParams();
  const nav = useNavigate()
  console.log(token)

  const handleVerify = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}api/v1/verify/student/${token}`);
      setIsVerify(true);
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message)
      setTimeout(() => {
        nav('/login')
      }, 3000);
    }
  };

  useEffect(() => {
    handleVerify();
  },[]);

  return <>{isVerify ? <div>user verified successful</div> : <Loading />}</>;
};

export default Verify;
