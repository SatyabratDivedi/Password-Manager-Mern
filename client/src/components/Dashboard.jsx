import React, {useState} from "react";
import {useEffect} from "react";
import {FaGithub} from "react-icons/fa6";
import lottie from "lottie-web";
import {defineElement} from "@lordicon/element";
import toast from "react-hot-toast";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import LoadingGif from "./../assets/loading.gif";

defineElement(lottie.loadAnimation);

const Dashboard = () => {
  const navigate = useNavigate();
  const [skeleton, setSkeleton] = useState(true);
  const [formData, setFormData] = useState({
    website: "",
    username: "",
    password: "",
  });
  const [storeData, setStoreData] = useState([]);
  const {website, username, password} = formData;

  const fetchData = async () => {
    try {
      const res = await axios.get("https://password-manager-mern.onrender.com/api/get-all");
      setStoreData(res.data);
      console.log(res)
      if(res.status){
        setSkeleton(false);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();
    if (website === "" || username === "" || password === "") {
      toast.error("all details must be filled");
    } else {
      try {
        const res = await axios.post("https://password-manager-mern.onrender.com/api/create", formData);
        toast.success(res.data.msg);
        setFormData({website: "", username: "", password: ""});
        setStoreData([...storeData, res.data.data]);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  };

  const deleteCkl = async (id) => {
    const res = await axios.delete(`https://password-manager-mern.onrender.com/api/delete_one/${id}`);
    toast.success(res.data.msg);
    setStoreData((prevData) => prevData.filter((item) => item._id !== id));
  };

  const editChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const copyWeb = (id) => {
    const selectedData = storeData.filter((item) => item._id === id);
    navigator.clipboard.writeText(selectedData[0].website);
    toast.success("Website Url Copied");
  };
  const copyUserName = (id) => {
    const selectedData = storeData.filter((item) => item._id == id);
    navigator.clipboard.writeText(selectedData[0].username);
    toast.success("Username Copied");
  };
  const copyPass = (id) => {
    const selectedData = storeData.filter((item) => item._id == id);
    navigator.clipboard.writeText(selectedData[0].password);
    toast.success("Password Copied");
  };

  const editCkl = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <>
    {/* nav bar */}
      <nav className=" font-semibold bg-slate-600 text-white flex justify-around items-center h-12">
        <Link to={"/"}>
          <span className=" font-bold text-green-600"> &lt;P</span>ass<span className=" font-bold text-green-600">OP/&gt;</span>{" "}
        </Link>
        <Link
          to={"https://github.com/SatyabratDivedi"}
          target="_blank"
          className=" border flex gap-1 items-center bg-green-500 rounded-3xl p-1 cursor-pointer hover:bg-green-600 active:scale-95 duration-100"
        >
          <FaGithub />
          Github
        </Link>
      </nav>
      {/* password manager header */}
      <div>
        <div className=" text-2xl text-center">
          <span className=" font-bold text-green-600"> &lt;P</span>ass<span className=" font-bold text-green-600">OP/&gt;</span>{" "}
        </div>
        <div className=" text-center font-semibold">Your password Managar</div>
      </div>

      <form onSubmit={submitHandle} className=" flex flex-col gap-2 justify-center w-[80%] mt-3 md:w-[70%] lg:w-[50%] m-auto">
        <div className=" flex justify-center w-full">
          <input onChange={editChange} className=" m-auto rounded-xl w-[80%] px-2 py-1 text-sm md:w-[100%]" type="text" value={website} name="website" id="website" placeholder="Website*" autoFocus />
        </div>
        <div className=" flex flex-col gap-2 md:flex-row">
          <input onChange={editChange} className=" m-auto rounded-xl w-[80%] px-2 py-1 text-sm " type="text" value={username} name="username" id="username" placeholder="UserName*" />
          <div className=" m-auto w-[80%] relative">
            <input onChange={editChange} className="rounded-xl w-[100%] px-2 py-1 text-sm " type="password" value={password} name="password" id="password" placeholder="Password*" />
          </div>
        </div>
        <div className=" flex justify-center w-full">
          <button className=" h-9 bg-green-500 hover:bg-green-600 active:scale-95 duration-100 text-white rounded-xl w-[30%] px-2 py-1 text-sm md:w-[40%]" type="submit">
            Add
          </button>
        </div>
      </form>

      <div>
        <table className="m-auto bg-slate-100 mt-4 md:w-[80%] w-[90%] text-center  rounded-lg overflow-hidden">
          <thead className=" bg-green-300">
            <tr className=" flex justify-around items-center gap-2">
              <th>Website</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* password data fetch from backend */}
          <tbody>
            {skeleton ? (
              <div className=" flex justify-center items-center">
                <img src={LoadingGif} width={70} alt="" />
              </div>
            ) : storeData.length === 0 ? (
              <tr className=" bg-red-200">
                <td>No data</td>
              </tr>
            ) : (
              storeData.map((item) => (
                <tr key={item._id} className=" flex  text-xs md:text-sm hover:bg-green-50">
                  <td className=" cursor-pointer flex w-full justify-center items-center ">
                    {item.website}
                    <div className=" text-xs rounded-full cursor-pointer active:scale-90">
                      <lord-icon style={{width: "20px"}} onClick={() => copyWeb(item._id)} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                    </div>
                  </td>
                  <td className=" flex w-full justify-center items-center ">
                    {item.username}
                    <div className=" text-xs rounded-full cursor-pointer active:scale-90">
                      <lord-icon style={{width: "20px"}} onClick={() => copyUserName(item._id)} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                    </div>
                  </td>
                  <td className=" flex w-full justify-center items-center ">
                    {item.password}
                    <div className=" text-xs rounded-full cursor-pointer active:scale-90">
                      <lord-icon style={{width: "20px"}} onClick={() => copyPass(item._id)} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                    </div>
                  </td>
                  <td className=" -translate-x-2 flex w-full gap-1 justify-end sm:justify-center sm:-translate-x-0 ">
                    <span className=" text-2xl mt-1 cursor-pointer hover:scale-110 active:scale-95 duration-100">
                      <lord-icon onClick={() => editCkl(item._id)} src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" style={{width: "20px"}}></lord-icon>
                    </span>
                    <span className="mt-1 cursor-pointer hover:scale-110 active:scale-95 duration-100">
                      <lord-icon style={{width: "20px"}} onClick={() => deleteCkl(item._id)} src="https://cdn.lordicon.com/skkahier.json" trigger="hover"></lord-icon>
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
