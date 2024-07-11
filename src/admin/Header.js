import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const LogOut = (navigate) => {
  localStorage.clear();
  navigate("/admin/login");
};

export default function Header() {
  const navigate = useNavigate();

  const userData = localStorage.getItem("User");
  const user = JSON.parse(userData);

  return (
    <div>
      <div className="p-3 admin_topHeader ">
        <div
          className="text-end mx-4 text-white "
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex justify-content-end gap-3 ">
            <FaRegUserCircle fontSize={25} />

            <span>{user?.name}</span>
            <div onClick={() => LogOut(navigate)}>
              <MdLogout fontSize={25} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-danger w-25" >Logout</div> */}
    </div>
  );
}
