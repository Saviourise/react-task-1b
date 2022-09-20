import React from "react";
import "./AdminDashboard.css";
import { AiOutlineUser } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";

const AdminDashboardPage = () => {
  const [data] = React.useState([
    {
      id: 1,
      image: "https://i.imgur.com/0y0y0y0.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit wdjboc ikhwevjibw viubgejklsd uig kl iu bGJ bui gJKNvui",
      author: "John Doe",
      authorImg: "https://i.imgur.com/0y0y0y0.jpg",
      liked: 300,
    },
    {
      id: 2,
      image: "https://i.imgur.com/0y0y0y0.jpg",
      author: "John Doe",
      title: "John Doe",
      authorImg: "https://i.imgur.com/0y0y0y0.jpg",
      liked: 300,
    },
    {
      id: 3,
      image: "https://i.imgur.com/0y0y0y0.jpg",
      title: "John Doe",
      author: "John Doe",
      authorImg: "https://i.imgur.com/0y0y0y0.jpg",
      liked: 300,
    },
    {
      id: 4,
      image: "https://i.imgur.com/0y0y0y0.jpg",
      title: "John Doe",
      authorImg: "https://i.imgur.com/0y0y0y0.jpg",
      author: "John Doe",
      liked: 300,
    },
  ]);
  return (
    <>
      <div className="w-full h-screen text-gray-700 dashboardPage">
        <div className="dashboardnav">
          <h1 className="text-5xl">
            <b>APP</b>
          </h1>
          <button className="dashboardBtn">
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
          <span>Author</span>
          <span>
            Most Liked <IoIosArrowDown style={{ marginLeft: 10 }} />
          </span>
        </div>
        <div className="dashboardTable">
          {data.map((item) => (
            <div className="dashboardTableItem" key={item.id}>
              <span>
                <span>0{item.id}</span>
                <span>
                  <img
                    src={item.image}
                    className="titleImg"
                    alt={item.author}
                  />
                  {item.title}
                </span>
              </span>
              <span>
                <img
                  src={item.authorImg}
                  className="authorImg"
                  alt={item.author}
                />
                {item.author}
              </span>
              <span>
                {item.liked} <IoMdArrowUp style={{ marginLeft: 10 }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
