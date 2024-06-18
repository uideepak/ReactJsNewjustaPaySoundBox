import React, { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="p-5 ">
        <div>
          <Link to="/admin/dashboard" className="text-light">
            Dashboard
          </Link>
        </div>
        <div>
          <Link to="/admin/addblog" className="text-light">
            {" "}
            Add Blog
          </Link>
        </div>
        <div>
          <Link to="/admin/allblog" className="text-light">
            {" "}
            ALL Blog
          </Link>
        </div>
        <div>
          <Link to="/admin/allLeads" className="text-light">
            {" "}
            All Leads
          </Link>
        </div>
      </div>
    </div>
  );
}
