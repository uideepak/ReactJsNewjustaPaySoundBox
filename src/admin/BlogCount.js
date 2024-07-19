import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  allblogList,
  contactLeads,
  subuserList,
} from "../controller/masterController";

export default function BlogCount() {
  const userData = localStorage.getItem("User");
  const user = JSON.parse(userData);

  const [blogData, setBlogData] = useState();
  const [contactData, setcontactData] = useState();

  const [userList, SetuserList] = useState([]);
  console.log(userList, "**********");
  const subuser = async () => {
    try {
      const data = await subuserList();
      SetuserList(data?.data?.UserList || []);
      console.log(data?.data?.UserList, "AAAAAAAAAAAAAA");
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBlogs = async () => {
    const data = await allblogList();
    setBlogData(data?.data.userBlogs);
    console.log(data.data.userBlogs, "AAAAAAAAAAAAAA");
  };
  const GetallContact = async () => {
    const data = await contactLeads();
    setcontactData(data?.data.userdata);
    console.log(data, "llllllll");
  };
  useEffect(() => {
    getAllBlogs();
    GetallContact();
    subuser();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row ">
          {user?.role === "Admin" && (
            <div className="col-md-4">
              <Link to="/admin/allblog" style={{ textDecoration: "none" }}>
                <div className="p-5 bg-success d-flex  align-items-center gap-3  rounded-4">
                  <h4 className="text-white">Total Blog :-</h4>
                  <h4 className="text-white">
                    {blogData ? blogData?.length : "N/A"}
                  </h4>
                </div>
              </Link>
            </div>
          )}
          <div className="col-md-4">
            <Link to="/admin/allLeads" style={{ textDecoration: "none" }}>
              <div className="p-5 bg-warning  d-flex  align-items-center gap-3 rounded-4 ">
                <h4 className="text-white">Total Leads :-</h4>
                <h4 className="text-white">
                  {" "}
                  {contactData ? contactData?.length : "N/A"}
                </h4>
              </div>
            </Link>
          </div>
          {user?.role === "Admin" && (
            <div className="col-md-4">
              <Link to="/admin/subUserlist" style={{ textDecoration: "none" }}>
                <div className="p-5 bg-info  d-flex  align-items-center gap-3 rounded-4 ">
                  <h4 className="text-white"> Emp User :-</h4>
                  <h4 className="text-white">
                    {userList ? userList?.length : "N/A"}
                  </h4>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
