import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allblogList, contactLeads } from "../controller/masterController";
import { useNavigate } from "react-router-dom";

export default function BlogCount() {
  const userData = localStorage.getItem("User");
  const user = JSON.parse(userData);
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState();
  const [contactData, setcontactData] = useState();

  console.log("====>>>", contactData);

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
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {user?.role === "Admin" && (
            <div className="col-md-6">
              <Link to="/admin/allblog" style={{ textDecoration: "none" }}>
                <div className="p-5 bg-success d-flex  align-items-center gap-3  rounded-4">
                  <h3 className="text-white">Total Blog :-</h3>
                  <h2 className="text-white">
                    {blogData ? blogData?.length : "N/A"}
                  </h2>
                </div>
              </Link>
            </div>
          )}

          <div className="col-md-6">
            <Link to="/admin/allLeads" style={{ textDecoration: "none" }}>
              <div className="p-5 bg-warning  d-flex  align-items-center gap-3 rounded-4 ">
                <h3 className="text-white">Total Leads :-</h3>
                <h2 className="text-white">
                  {" "}
                  {contactData ? contactData?.length : "N/A"}
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
