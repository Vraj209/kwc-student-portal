import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";
import TableLayout from "../TableLayout";

const SevaTableMaster = () => {
  const location = useLocation();
  const { page, selectedOption } = location.state || {};
  const [users, setUsers] = useState([]);
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users); // Convert users data to sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Users"); // Append your sheet to the workbook
    XLSX.writeFile(wb, "Seva_Student.xlsx"); // Write the file
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/getUsers"
        );
        console.log("Response data: ", response.data); // Log the response data
        if (selectedOption === "SecondarySeva") {
          setUsers(response.data.filter((user) => user.SecondarySeva === page));
        } else if (selectedOption === "PrimarySeva") {
          setUsers(response.data.filter((user) => user.PrimarySeva === page));
        } else {
          setUsers([
            ...response.data.filter((user) => user.PrimarySeva === page),
            ...response.data.filter((user) => user.SecondarySeva === page),
          ]);
        }
      } catch (error) {
        console.log("Error fetching users: ", error); // Log any errors
      }
    })();
  }, []);

  // useEffect(() => {
  //   console.log("Users After: ", users);
  // }, [users]);

  const handleView = async (user) => {
    window.location.href = `/users/previewUser/${user._id}`;
  };

  const handleUpdate = async (user) => {
    window.location.href = `/users/updateUser/${user._id}`;

    try {
      const response = await axios.put(
        `http://localhost:3000/users/updateUser/${user._id}`
      );
      console.log(response.data);
      // Refresh the users list after updating
      setUsers(users.map((u) => (u._id === user._id ? response.data : u)));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const columns = [
    { label: "First Name", field: "FirstName" },
    { label: "Middle Name", field: "MiddleName" },
    { label: "Last Name", field: "LastName" },
    { label: "Phone Number", field: "PhoneNumber" },
    { label: "Email", field: "Email" },
    { label: "Gender", field: "Gender" },
    { label: "Actions", field: "Actions" },
  ];

  const actionHandlers = {
    view: handleView,
    update: handleUpdate,
    export: exportToExcel,
  };

  return (
    <>
      <TableLayout
        title={page}
        columns={columns}
        data={users}
        actionHandlers={actionHandlers}
      />
    </>
  );
};

export default SevaTableMaster;
