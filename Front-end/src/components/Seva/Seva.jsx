import React, { useState, useEffect } from "react";
import { Sidebar } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Seva() {
  const navigation = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [MandirPujari, setMandirPujari] = useState(0);
  const [MandirMaintenance, setMandirMaintenance] = useState(0);
  const [MandirKitchen, setMandirKitchen] = useState(0);
  const [MandirSabhaVayvstha, setMandirSabhaVayvstha] = useState(0);
  const [MandirGujaratiTeacher, setMandirGujaratiTeacher] = useState(0);
  const [MandirAudioVideo, setMandirAudioVideo] = useState(0);
  const [MandirSetupWindupKitchen, setMandirSetupWindupKitchen] = useState(0);
  const [MandirShayona, setMandirShayona] = useState(0);
  const [MandirDecoration, setMandirDecoration] = useState(0);
  const [MandirBookStore, setMandirBookStore] = useState(0);
  const [StudentVolunteerCoordinator, setStudentVolunteerCoordinator] =
    useState(0);
  const [StudentOutboundActivity, setStudentOutboundActivity] = useState(0);
  const [StudentKitchen, setStudentKitchen] = useState(0);
  const [StudentFlyerDesign, setStudentFlyerDesign] = useState(0);
  const [StudentAudioVideoPhotography, setStudentAudioVideoPhotography] =
    useState(0);
  const [StudentAccommodation, setStudentAccommodation] = useState(0);
  const [StudentDecoration, setStudentDecoration] = useState(0);
  const [StudentPR, setStudentPR] = useState(0);
  const [StudentNetworkAdmin, setStudentNetworkAdmin] = useState(0);
  const [StudentDatabaseAdmin, setStudentDatabaseAdmin] = useState(0);
  const [StudentSamparkKaryakar, setStudentSamparkKaryakar] = useState(0);
  const [StudentRide, setStudentRide] = useState(0);

  const mandirPujari = async () => {};
  const mandirMaintenance = async () => {};
  const mandirKitchen = async () => {};
  const mandirSabhaVayvstha = async () => {};
  const mandirGujaratiTeacher = async () => {};
  const mandirAudioVideo = async () => {};
  const mandirSetupWindupKitchen = async () => {};
  const mandirShayona = async () => {};
  const mandirDecoration = async () => {};
  const mandirBookStore = async () => {};
  const studentVolunteerCoordinator = async () => {};
  const studentOutboundActivity = async () => {};
  const studentKitchen = async () => {};
  const studentFlyerDesign = async () => {};
  const studentAudioVideoPhotography = async () => {};
  const studentAccommodation = async () => {};
  const studentDecoration = async () => {};
  const studentPR = async () => {};
  const studentNetworkAdmin = async () => {};
  const studentDatabaseAdmin = async () => {};
  const studentSamparkKaryakar = async () => {};
  const studentRide = async () => {};

  const sevaOptions = [
    {
      name: "Mandir - Pujari",
      number: MandirPujari,
      action: mandirPujari,
    },
    {
      name: "Mandir - Maintenance",
      number: MandirMaintenance,
      action: mandirMaintenance,
    },
    {
      name: "Mandir - Kitchen",
      number: MandirKitchen,
      action: mandirKitchen,
    },
    {
      name: "Mandir - Sabha Vayvstha",
      number: MandirSabhaVayvstha,
      action: mandirSabhaVayvstha,
    },
    {
      name: "Mandir - Gujarati Teacher",
      number: MandirGujaratiTeacher,
      action: mandirGujaratiTeacher,
    },
    {
      name: "Mandir - Audio-Video",
      number: MandirAudioVideo,
      action: mandirAudioVideo,
    },
    {
      name: "Mandir - Setup-Windup Kitchen",
      number: MandirSetupWindupKitchen,
      action: mandirSetupWindupKitchen,
    },
    {
      name: "Mandir - Shayona",
      number: MandirShayona,
      action: mandirShayona,
    },
    {
      name: "Mandir - Decoration",
      number: MandirDecoration,
      action: mandirDecoration,
    },
    {
      name: "Mandir - Book Store",
      number: MandirBookStore,
      action: mandirBookStore,
    },
    {
      name: "Student - Volunteer Coordinator",
      number: StudentVolunteerCoordinator,
      action: studentVolunteerCoordinator,
    },
    {
      name: "Student - Outbound Activity",
      number: StudentOutboundActivity,
      action: studentOutboundActivity,
    },
    {
      name: "Student - Kitchen",
      number: StudentKitchen,
      action: studentKitchen,
    },
    {
      name: "Student - Flyer-Design",
      number: StudentFlyerDesign,
      action: studentFlyerDesign,
    },
    {
      name: "Student - Audio-Video-Photography",
      number: StudentAudioVideoPhotography,
      action: studentAudioVideoPhotography,
    },
    {
      name: "Student - Accommodation",
      number: StudentAccommodation,
      action: studentAccommodation,
    },
    {
      name: "Student - Decoration",
      number: StudentDecoration,
      action: studentDecoration,
    },
    {
      name: "Student - PR",
      number: StudentPR,
      action: studentPR,
    },
    {
      name: "Student - Network Admin",
      number: StudentNetworkAdmin,
      action: studentNetworkAdmin,
    },
    {
      name: "Student - Database Admin",
      number: StudentDatabaseAdmin,
      action: studentDatabaseAdmin,
    },
    {
      name: "Student - Sampark Karyakar",
      number: StudentSamparkKaryakar,
      action: studentSamparkKaryakar,
    },
    {
      name: "Student - Ride",
      number: StudentRide,
      action: studentRide,
    },
  ];

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/users/getUsers");

      let users = response.data;
      // console.log("Users: ", users);

      if (selectedOption === "allSeva") {
        setMandirPujari(
          users.filter((user) => user.PrimarySeva === "Mandir - Pujari")
            .length +
            users.filter((user) => user.SecondarySeva === "Mandir - Pujari")
              .length
        );
        setMandirMaintenance(
          users.filter((user) => user.PrimarySeva === "Mandir - Maintenance")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Mandir - Maintenance"
            ).length
        );
        setMandirKitchen(
          users.filter((user) => user.PrimarySeva === "Mandir - Kitchen")
            .length +
            users.filter((user) => user.SecondarySeva === "Mandir - Kitchen")
              .length
        );
        setMandirSabhaVayvstha(
          users.filter((user) => user.PrimarySeva === "Mandir - Sabha Vayvstha")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Mandir - Sabha Vayvstha"
            ).length
        );
        setMandirGujaratiTeacher(
          users.filter(
            (user) => user.PrimarySeva === "Mandir - Gujarati Teacher"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Mandir - Gujarati Teacher"
            ).length
        );
        setMandirAudioVideo(
          users.filter((user) => user.PrimarySeva === "Mandir - Audio-Video")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Mandir - Audio-Video"
            ).length
        );
        setMandirSetupWindupKitchen(
          users.filter(
            (user) => user.PrimarySeva === "Mandir - Setup-Windup Kitchen"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Mandir - Setup-Windup Kitchen"
            ).length
        );
        setMandirShayona(
          users.filter((user) => user.PrimarySeva === "Mandir - Shayona")
            .length +
            users.filter((user) => user.SecondarySeva === "Mandir - Shayona")
              .length
        );
        setMandirDecoration(
          users.filter((user) => user.PrimarySeva === "Mandir - Decoration")
            .length +
            users.filter((user) => user.SecondarySeva === "Mandir - Decoration")
              .length
        );
        setMandirBookStore(
          users.filter((user) => user.PrimarySeva === "Mandir - Book Store")
            .length +
            users.filter((user) => user.SecondarySeva === "Mandir - Book Store")
              .length
        );
        setStudentVolunteerCoordinator(
          users.filter(
            (user) => user.PrimarySeva === "Student - Volunteer Coordinator"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Volunteer Coordinator"
            ).length
        );
        setStudentOutboundActivity(
          users.filter(
            (user) => user.PrimarySeva === "Student - Outbound Activity"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Outbound Activity"
            ).length
        );
        setStudentKitchen(
          users.filter((user) => user.PrimarySeva === "Student - Kitchen")
            .length +
            users.filter((user) => user.SecondarySeva === "Student - Kitchen")
              .length
        );
        setStudentFlyerDesign(
          users.filter((user) => user.PrimarySeva === "Student - Flyer-Design")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Flyer-Design"
            ).length
        );
        setStudentAudioVideoPhotography(
          users.filter(
            (user) => user.PrimarySeva === "Student - Audio-Video-Photography"
          ).length +
            users.filter(
              (user) =>
                user.SecondarySeva === "Student - Audio-Video-Photography"
            ).length
        );
        setStudentAccommodation(
          users.filter((user) => user.PrimarySeva === "Student - Accommodation")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Accommodation"
            ).length
        );
        setStudentDecoration(
          users.filter((user) => user.PrimarySeva === "Student - Decoration")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Decoration"
            ).length
        );
        setStudentPR(
          users.filter((user) => user.PrimarySeva === "Student - PR").length +
            users.filter((user) => user.SecondarySeva === "Student - PR").length
        );
        setStudentNetworkAdmin(
          users.filter((user) => user.PrimarySeva === "Student - Network Admin")
            .length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Network Admin"
            ).length
        );
        setStudentDatabaseAdmin(
          users.filter(
            (user) => user.PrimarySeva === "Student - Database Admin"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Database Admin"
            ).length
        );
        setStudentSamparkKaryakar(
          users.filter(
            (user) => user.PrimarySeva === "Student - Sampark Karyakar"
          ).length +
            users.filter(
              (user) => user.SecondarySeva === "Student - Sampark Karyakar"
            ).length
        );
        setStudentRide(
          users.filter((user) => user.PrimarySeva === "Student - Ride").length +
            users.filter((user) => user.SecondarySeva === "Student - Ride")
              .length
        );
      } else if (selectedOption === "PrimarySeva") {
        setMandirPujari(
          users.filter((user) => user.PrimarySeva === "Mandir - Pujari").length
        );
        setMandirMaintenance(
          users.filter((user) => user.PrimarySeva === "Mandir - Maintenance")
            .length
        );
        setMandirKitchen(
          users.filter((user) => user.PrimarySeva === "Mandir - Kitchen").length
        );
        setMandirSabhaVayvstha(
          users.filter((user) => user.PrimarySeva === "Mandir - Sabha Vayvstha")
            .length
        );
        setMandirGujaratiTeacher(
          users.filter(
            (user) => user.PrimarySeva === "Mandir - Gujarati Teacher"
          ).length
        );
        setMandirAudioVideo(
          users.filter((user) => user.PrimarySeva === "Mandir - Audio-Video")
            .length
        );
        setMandirSetupWindupKitchen(
          users.filter(
            (user) => user.PrimarySeva === "Mandir - Setup-Windup Kitchen"
          ).length
        );
        setMandirShayona(
          users.filter((user) => user.PrimarySeva === "Mandir - Shayona").length
        );
        setMandirDecoration(
          users.filter((user) => user.PrimarySeva === "Mandir - Decoration")
            .length
        );
        setMandirBookStore(
          users.filter((user) => user.PrimarySeva === "Mandir - Book Store")
            .length
        );
        setStudentVolunteerCoordinator(
          users.filter(
            (user) => user.PrimarySeva === "Student - Volunteer Coordinator"
          ).length
        );
        setStudentOutboundActivity(
          users.filter(
            (user) => user.PrimarySeva === "Student - Outbound Activity"
          ).length
        );
        setStudentKitchen(
          users.filter((user) => user.PrimarySeva === "Student - Kitchen")
            .length
        );
        setStudentFlyerDesign(
          users.filter((user) => user.PrimarySeva === "Student - Flyer-Design")
            .length
        );
        setStudentAudioVideoPhotography(
          users.filter(
            (user) => user.PrimarySeva === "Student - Audio-Video-Photography"
          ).length
        );
        setStudentAccommodation(
          users.filter((user) => user.PrimarySeva === "Student - Accommodation")
            .length
        );
        setStudentDecoration(
          users.filter((user) => user.PrimarySeva === "Student - Decoration")
            .length
        );
        setStudentPR(
          users.filter((user) => user.PrimarySeva === "Student - PR").length
        );
        setStudentNetworkAdmin(
          users.filter((user) => user.PrimarySeva === "Student - Network Admin")
            .length
        );
        setStudentDatabaseAdmin(
          users.filter(
            (user) => user.PrimarySeva === "Student - Database Admin"
          ).length
        );
        setStudentSamparkKaryakar(
          users.filter(
            (user) => user.PrimarySeva === "Student - Sampark Karyakar"
          ).length
        );
        setStudentRide(
          users.filter((user) => user.PrimarySeva === "Student - Ride").length
        );
      } else if (selectedOption === "SecondarySeva") {
        setMandirPujari(
          users.filter((user) => user.SecondarySeva === "Mandir - Pujari")
            .length
        );
        setMandirMaintenance(
          users.filter((user) => user.SecondarySeva === "Mandir - Maintenance")
            .length
        );
        setMandirKitchen(
          users.filter((user) => user.SecondarySeva === "Mandir - Kitchen")
            .length
        );
        setMandirSabhaVayvstha(
          users.filter(
            (user) => user.SecondarySeva === "Mandir - Sabha Vayvstha"
          ).length
        );
        setMandirGujaratiTeacher(
          users.filter(
            (user) => user.SecondarySeva === "Mandir - Gujarati Teacher"
          ).length
        );
        setMandirAudioVideo(
          users.filter((user) => user.SecondarySeva === "Mandir - Audio-Video")
            .length
        );
        setMandirSetupWindupKitchen(
          users.filter(
            (user) => user.SecondarySeva === "Mandir - Setup-Windup Kitchen"
          ).length
        );
        setMandirShayona(
          users.filter((user) => user.SecondarySeva === "Mandir - Shayona")
            .length
        );
        setMandirDecoration(
          users.filter((user) => user.SecondarySeva === "Mandir - Decoration")
            .length
        );
        setMandirBookStore(
          users.filter((user) => user.SecondarySeva === "Mandir - Book Store")
            .length
        );
        setStudentVolunteerCoordinator(
          users.filter(
            (user) => user.SecondarySeva === "Student - Volunteer Coordinator"
          ).length
        );
        setStudentOutboundActivity(
          users.filter(
            (user) => user.SecondarySeva === "Student - Outbound Activity"
          ).length
        );
        setStudentKitchen(
          users.filter((user) => user.SecondarySeva === "Student - Kitchen")
            .length
        );
        setStudentFlyerDesign(
          users.filter(
            (user) => user.SecondarySeva === "Student - Flyer-Design"
          ).length
        );
        setStudentAudioVideoPhotography(
          users.filter(
            (user) => user.SecondarySeva === "Student - Audio-Video-Photography"
          ).length
        );
        setStudentAccommodation(
          users.filter(
            (user) => user.SecondarySeva === "Student - Accommodation"
          ).length
        );
        setStudentDecoration(
          users.filter((user) => user.SecondarySeva === "Student - Decoration")
            .length
        );
        setStudentPR(
          users.filter((user) => user.SecondarySeva === "Student - PR").length
        );
        setStudentNetworkAdmin(
          users.filter(
            (user) => user.SecondarySeva === "Student - Network Admin"
          ).length
        );
        setStudentDatabaseAdmin(
          users.filter(
            (user) => user.SecondarySeva === "Student - Database Admin"
          ).length
        );
        setStudentSamparkKaryakar(
          users.filter(
            (user) => user.SecondarySeva === "Student - Sampark Karyakar"
          ).length
        );
        setStudentRide(
          users.filter((user) => user.SecondarySeva === "Student - Ride").length
        );
      }
    })();
  });
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-rose-500">
          <p className="text-5xl text-white">Seva Details</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="sevaOption"
            className="block text-sm font-medium text-gray-700"
          >
            Select Seva Option
          </label>
          <select
            id="sevaOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--Please choose an option--</option>
            <option value="allSeva">All Seva</option>
            <option value="PrimarySeva">Primary Seva</option>
            <option value="SecondarySeva">Secondary Seva</option>
          </select>
        </div>
        {selectedOption && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {sevaOptions.map((seva, index) => (
              <div
                key={index}
                className="card bg-white shadow-lg rounded-lg overflow-hidden my-4"
              >
                <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
                  <div>
                    <h2 className="font-bold text-2xl mb-2">{seva.name}</h2>
                    <button
                      onClick={() => {
                        navigation("/sevaTable", {
                          state: { page: seva.name, selectedOption },
                        });
                      }}
                      className="bg-rose-400 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Show student details
                    </button>
                  </div>
                  <h3 className="text-4xl font-bold mt-4 sm:mt-0">
                    {seva.number}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Seva;
