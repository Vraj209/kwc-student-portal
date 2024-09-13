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
  const cards = [
    { name: "Total Student", number: numberOfStudents, action: totalStudent },
    { name: "Male", number: numberOfMale, action: maleStudent },
    { name: "Female", number: numberOfFemale, action: femaleStudent },
    { name: "Satsangi", number: numberOfSatsangi, action: satsangiStudent },
    { name: "MIS", number: numberOfMIS, action: misStudent },
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
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-blue-200">
          <p className="text-5xl text-black">Dashboard</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg overflow-hidden my-4"
            >
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-2xl mb-2">{card.name}</h2>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={card.action}
                  >
                    Show Details
                  </button>
                </div>
                <h3 className="text-4xl font-bold">{card.number}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
