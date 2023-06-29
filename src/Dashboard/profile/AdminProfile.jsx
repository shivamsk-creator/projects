import React, { useEffect, useState } from "react";
import stuBg from "../../assets/images/student-bg.jpg";
import man from "../../assets/images/man.jpg";
import { Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import ModalUpdateAdmin from "./ModalUpdateAdmin";

const AdminProfile = ({ adminAuth }) => {
  const [adminData, setAdminData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  console.log(adminData);

  useEffect(() => {
    getAdminData();
  }, []);

  const getAdminData = () => {
    fetch(`${baseurl}/api/admin/${adminAuth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setAdminData(result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makedob = (birthday) => {
    const dob = birthday.split("-").reverse().join(" - ");
    return dob;
  };

  return (
    <>
      <section className=" p-2 sm:p-5 md:p-10 ">
        {/* Profile Image Section */}
        <div className="relative h-96">
          <img
            src={stuBg}
            className="h-96 w-full rounded-br-3xl sm:rounded-br-full"
            alt=""
          />
          <div className="absolute top-0 left-0 h-96 w-full p-14 sm:p-20 bg-[#00000050] rounded-br-3xl sm:rounded-br-full">
            <div className="flex flex-col items-center justify-center w-fit mx-auto sm:mx-0">
              <img
                src={`${baseurl}/api/teacherpic/${adminData.profilePic}`}
                className="w-28 h-28 rounded-full shadow-xl ring-white ring-2"
                alt=""
              />
              <h4 className="text-white text-lg font-semibold my-5">
                {adminData.name}
              </h4>
              <p className="text-white">@administrator</p>
              <Button onClick={handleOpen} className="h-fit my-3">
                Update
              </Button>
            </div>
            <ModalUpdateAdmin
              adminData={adminData}
              getAdminData={getAdminData}
              open={open}
              handleOpen={handleOpen}
            />
          </div>
        </div>

        {/* Account Type */}
        <div className="flex flex-row my-2">
          <div className="p-3">
            <div>Account Type:</div>
            <div>
              <span className="p-1 bg-[var(--secondary-color)] text-sm text-white rounded-full">
                Administrator
              </span>{" "}
            </div>
          </div>
          {/* <div className="p-3 border-l">
            <div>Member since:</div>
            <div className="text-sm text-[var(--secondary-color)]">07/19</div>
          </div>
          <div className="p-3 border-l">
            <div>Roll ID:</div>
            <div className="text-sm text-[var(--secondary-color)]">
              201508024
            </div>
          </div> */}
        </div>

        {/* Personal Information */}
        <div className="px-2">
          <h3 className="font-semibold my-5">Personal Information</h3>
          <div className="lg:max-w-5xl">
            <div className="flex flex-col md:flex-row mt-2">
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Name :</div>
                <div className="my-1 text-[var(--dash-heading)]">
                  {adminData.name}
                </div>
              </div>
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Email :</div>
                <div className="my-1 text-[var(--dash-heading)]">
                  {adminData.email}
                </div>
              </div>
            </div>
            {/* 2nd Row */}
            <div className="flex flex-col md:flex-row mt-4">
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Gender :</div>
                <div className="my-1 text-[var(--dash-heading)]">
                  {adminData.gender}
                </div>
              </div>
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Contact :</div>
                <div className="my-1 text-[var(--dash-heading)]">
                  {adminData.contact}
                </div>
              </div>
            </div>
            {/* 3rd Row */}
            <div className="flex flex-col md:flex-row mt-4">
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Username :</div>
                <div className="my-1 text-[var(--dash-heading)]">admin</div>
              </div>
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Birthday :</div>
                <div className="my-1 text-[var(--dash-heading)]">
                  {adminData.dob ? makedob(adminData.dob) : ""}
                  {/* {adminData.dob.split("-").reverse().join(" - ")} */}
                </div>
              </div>
            </div>
            {/* 3rd Row */}
            <div className="flex flex-col md:flex-row mt-4">
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Address :</div>
                <div className="my-1 text-[var(--dash-heading)] max-w-sm">
                  {adminData.address}
                </div>
              </div>
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Qualification :</div>
                <div className="my-1 text-[var(--dash-heading)] max-w-sm">
                  {adminData.qualification}
                </div>
              </div>
            </div>
            {/* 4th Row */}
            <div className="flex flex-col md:flex-row mt-4">
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Degree :</div>
                <div className="my-1 text-[var(--dash-heading)] max-w-sm">
                  {adminData.degree}
                </div>
              </div>
              {/* Info */}
              <div className="text-sm w-full md:w-1/2 m-2">
                <div className="my-1">Experience :</div>
                <div className="my-1 text-[var(--dash-heading)] max-w-sm">
                  {adminData.exp} Yrs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProfile;
