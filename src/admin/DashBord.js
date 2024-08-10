import React from "react";
import BlogCount from "./BlogCount";

export default function DashBord() {
  const userData = localStorage.getItem("User");
  const user = JSON.parse(userData);
  return (
    <div>
      <div>
        {<h3 className="text-center p-3">Welcome to {user?.name} </h3>}

        <BlogCount />
      </div>
    </div>
  );
}
