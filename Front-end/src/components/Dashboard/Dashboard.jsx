import React, { useState, useEffect } from "react";
import { Sidebar } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfMale, setNumberOfMale] = useState(0);
  const [numberOfFemale, setNumberOfFemale] = useState(0);
  const [numberOfSatsangi, setNumberOfSatsangi] = useState(0);
  const [numberOfMIS, setNumberOfMIS] = useState(0);
  const [workPermitHolder, setWorkPermitHolder] = useState(0);
  const [studentPermitHolder, setStudentPermitHolder] = useState(0);
  const totalStudent = () => {
    navigate("/student-directory");
  };
  const maleStudent = () => {
    navigate("/maleStudent");
  };
  const femaleStudent = () => {
    navigate("/femaleStudent");
  };
  const satsangiStudent = () => {
    navigate("/satsangiStudent");
  };
  const misStudent = () => {
    navigate("/misStudent");
  };
  const workPermit = () => {
    navigate("/workPermit");
  };
  const studentPermit = () => {
    navigate("/studentPermit");
  };
  const cards = [
    { name: "Total Student", number: numberOfStudents, action: totalStudent },
    { name: "Male", number: numberOfMale, action: maleStudent },
    { name: "Female", number: numberOfFemale, action: femaleStudent },
    { name: "Satsangi", number: numberOfSatsangi, action: satsangiStudent },
    { name: "MIS", number: numberOfMIS, action: misStudent },
    { name: "Work Permit", number: workPermitHolder, action: workPermit },
    {
      name: "Student Permit",
      number: studentPermitHolder,
      action: studentPermit,
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/getUsers"
        );
        console.log("Response data: ", response.data); // Log the response data
        setNumberOfStudents(response.data.length);
        setNumberOfMale(
          response.data.filter((user) => user.Gender === "Male").length
        );
        setNumberOfFemale(
          response.data.filter((user) => user.Gender === "Female").length
        );
        setNumberOfSatsangi(
          response.data.filter((user) => user.Satsangi === "Yes").length
        );
        setWorkPermitHolder(
          response.data.filter((user) => user.Status === "Work Permit").length
        );
        setStudentPermitHolder(
          response.data.filter((user) => user.Status === "Student Visa").length
        );
        setNumberOfMIS(
          response.data.filter((user) => user.Mis === "Yes").length
        );
      } catch (error) {
        console.log("Error fetching users: ", error); // Log any errors
      }
    })();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-blue-200">
          <p className="text-5xl text-black">Dashboard</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card bg-white sm:p-2 flex flex-row md:flex-row shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4  flex flex-row    sm:items-start">
                <div className="mb-4 sm:mb-0">
                  <div>
                    <h2 className="font-bold text-xl sm:text-2xl mb-2">
                      {card.name}
                    </h2>
                  </div>

                  <div className="">
                    <h3 className="text-4xl sm:text-4xl font-bold  ">
                      {card.number}
                    </h3>
                  </div>

                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto "
                      onClick={card.action}
                    >
                      Show Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
