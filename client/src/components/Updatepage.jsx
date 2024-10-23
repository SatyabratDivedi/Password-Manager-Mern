import axios from "axios";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";

export const Updatepage = () => {
  const tokenId = Cookies.get("tokenId");
  const res = useLoaderData();
  const {id} = useParams();
  const navigate = useNavigate();
  const userEdit = {
    website: "",
    username: "",
    password: "",
  };
  const [edit, setEdit] = useState(userEdit);
  const {website, username, password} = edit;

  const editChange = (e) => {
    setEdit({...edit, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    const {website, username, password} = res.data;
    setEdit({website, username, password});
  }, []);
  const updateHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/update-data/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenId,
        },
        credentials: "include",
        body: JSON.stringify(edit)
      });
      console.log(res)
      const result = await res.json()
      navigate("/dashboard");
      toast.success(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className=" w-[70%]">
          <div className="flex flex-col justify-end items-center gap-2">
            <div className=" text-2xl text-center">
              {" "}
              <span className=" font-bold text-green-600"> &lt;P</span>ass<span className=" font-bold text-green-600">OP/&gt;</span>{" "}
            </div>
            <button onClick={() => navigate("/dashboard")} className=" bg-green-500 hover:bg-green-600 active:scale-95 duration-100 text-white rounded-xl w-[20%] px-2 py-1 text-sm">
              Back
            </button>
          </div>
          <form onSubmit={updateHandle} className=" flex flex-col gap-2 justify-center w-[80%] mt-3 md:w-[70%] lg:w-[50%] m-auto">
            <div className=" flex justify-center w-full">
              <input
                onChange={editChange}
                className=" m-auto rounded-xl w-[80%] px-2 py-1 text-sm md:w-[100%]"
                type="text"
                value={website}
                name="website"
                id="website"
                placeholder="Website*"
                autoFocus
              />
            </div>
            <div className=" flex flex-col gap-2 md:flex-row">
              <input onChange={editChange} className=" m-auto rounded-xl w-[80%] px-2 py-1 text-sm " type="text" value={username} name="username" id="username" placeholder="UserName*" />
              <div className=" m-auto w-[80%] relative">
                <input onChange={editChange} className="rounded-xl w-[100%] px-2 py-1 text-sm " type="password" value={password} name="password" id="password" placeholder="Password*" />
              </div>
            </div>
            <div className=" flex justify-center w-full">
              <button className=" h-9 bg-green-500 hover:bg-green-600 active:scale-95 duration-100 text-white rounded-xl w-[40%] px-2 py-1 text-sm md:w-[50%]" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export const oneDataLoader = async ({params}) => {
  const res = await axios.get(`http://localhost:8000/api/get-one/${params.id}`);
  console.log(res);
  return res;
};
