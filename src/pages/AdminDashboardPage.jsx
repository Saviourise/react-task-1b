import React, { useState } from "react";
import "./AdminDashboard.css";
import { AiOutlineUser } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { AuthContext } from "../authContext";
import MkdSDK from "../utils/MkdSDK";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);

  const [data, setList] = React.useState([
    {
      id: 1,
      photo: "https://i.imgur.com/0y0y0y0.jpg",
      title: "Loading...",
      username: "...",
      like: 0,
    },
  ]);

  const [page, setPage] = useState(1);

  let sdk = new MkdSDK();

  const getData = () => {
    sdk
      .callRestAPI({ page: page, limit: 10 }, "GET")
      .then((res) => {
        setPage(res.page);
        setList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getData();
  }, [page]);
  return (
    <>
      <div className="w-full h-screen text-gray-700 dashboardPage">
        <div className="dashboardnav">
          <h1 className="text-5xl">
            <b>APP</b>
          </h1>
          <button
            className="dashboardBtn"
            onClick={() => {
              dispatch({
                type: "LOGOUT",
              });
              window.location.href = "/admin/login";
            }}
          >
            <AiOutlineUser className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
        <div class="dashboardTopic">
          <h1 className="text-4xl">Today's Leaderboard</h1>
          <div>
            <span>30 May 2022</span>
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Submissions Open</span>
            <span>
              <GoPrimitiveDot />
            </span>
            <span>11:34</span>
          </div>
        </div>
        <div className="dashboardTableTitle">
          <span>
            <span>#</span>
            <span>Title</span>
          </span>
          <span>username</span>
          <span>
            Most liked <IoIosArrowDown style={{ marginLeft: 10 }} />
          </span>
        </div>
        <div className="dashboardTable">
          {data.map((item) => (
            <div className="dashboardTableItem" key={item.id}>
              <span>
                <span>
                  {item.id < 10 && 0}
                  {item.id}
                </span>
                <span>
                  <img
                    src={item.photo}
                    className="titleImg"
                    alt={item.username}
                  />
                  {item.title}
                </span>
              </span>
              <span>
                <img
                  src={item.photo}
                  className="authorImg"
                  alt={item.username}
                />
                {item.username}
              </span>
              <span>
                {item.like}{" "}
                <IoMdArrowUp style={{ marginLeft: 10, color: "#9bff00" }} />
              </span>
            </div>
          ))}
        </div>
        <div className="prevNextBtns">
          <button
            className="prevBtn"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
          <button
            className="nextBtn"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
