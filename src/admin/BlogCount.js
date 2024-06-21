import React, { useEffect, useState } from "react";
import { allblogList, contactLeads } from "../controller/masterController";

export default function BlogCount() {
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
          <div className="col-md-6">
            <div className="p-5 bg-success d-flex  align-items-center gap-3  rounded-4">
              <h1 className="text-white">Total Blog :-</h1>
              <h2 className="text-white">
                {blogData ? blogData?.length : "N/A"}
              </h2>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-5 bg-warning  d-flex  align-items-center gap-3 rounded-4 ">
              <h1 className="text-white">Total Leads :-</h1>
              <h2 className="text-white">
                {" "}
                {contactData ? contactData?.length : "N/A"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
