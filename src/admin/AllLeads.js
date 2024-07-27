import React, { useEffect, useState } from "react";
import {
  contactLeads,
  ContactLeadsFilter,
} from "../controller/masterController";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import moment from "moment";

export default function AllLeads() {
  const [contactData, setContactData] = useState([]);
  const [filterDate, setFilterDate] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    const getAllContacts = async () => {
      const data = await contactLeads();
      setContactData(data?.data.userdata);
    };

    getAllContacts();
  }, []);

  const leadsFilter = async () => {
    if (!filterDate.startDate || !filterDate.endDate) {
      alert("Please select both start date and end date.");
      return;
    }

    const formattedFilterDate = {
      startDate: format(filterDate.startDate, "yyyy-MM-dd"),
      endDate: format(filterDate.endDate, "yyyy-MM-dd"),
    };

    const data = await ContactLeadsFilter(formattedFilterDate);
    setContactData(data?.data.userdata);
  };

  return (
    <div>
      <h4 className="text-center py-3">All Contact Leads</h4>
      <div className="d-flex gap-3 mb-3 p-3 align-items-center">
        Search
        <div>
          <label
            className="mx-1 
          "
          >
            <DatePicker
              selected={filterDate.startDate}
              onChange={(date) =>
                setFilterDate({ ...filterDate, startDate: date })
              }
              className="p-1"
              placeholderText="start Date"
              dateFormat="dd/MM/yyyy"
            />
          </label>
          To
          <label className="mx-1">
            <DatePicker
              selected={filterDate.endDate}
              onChange={(date) =>
                setFilterDate({ ...filterDate, endDate: date })
              }
              className="p-1 "
              dateFormat="dd/MM/yyyy"
              placeholderText="end Date"
            />
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={leadsFilter}>
          Submit
        </button>
      </div>
      <table className="text-center w-100" border={1}>
        <thead>
          <tr className="w-100 border">
            <th>Date</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Device</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact, index) => (
            <tr className="border" key={index}>
              <td>{moment(contact.updatedAt).format("DD-MM-YYYY")}</td>
              <td>{contact?.first_Name}</td>
              <td>{contact?.email}</td>
              <td>{contact?.phone}</td>
              <td>{contact?.device}</td>
              <td>{contact?.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
