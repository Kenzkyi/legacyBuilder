import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Callback = () => {
  const [callback, setCallback] = useState(false);
  const {token,userId} = useParams()

  const createUser = async()=>{
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}api/v1/studentInfo/${userId}`)
      console.log(res)
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error)
    }
  }

  useEffect(()=>{
    createUser()
  },[])

  return <Loading />;
};

export default Callback;
