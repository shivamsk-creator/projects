import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import india from "../assets/images/india.png";
import { Link, useNavigate } from "react-router-dom";
import baseurl from "../Config";

const StudentHeader = ({ updateAuth, auth }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState("");

  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = () => {
    fetch(`${baseurl}/api/students/${auth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className=" px-5 bg-white py-4 shadow-xl">
        <div className="flex justify-end">
          {/* Right Box */}
          <div className="flex items-center">
            {/* Language */}
            <div className="mx-0 sm:mx-2 flex justify-center items-center">
              <Menu>
                <MenuHandler>
                  <img
                    src={india}
                    className="w-6 h-6 rounded-full cursor-pointer"
                    alt=""
                  />
                </MenuHandler>
                <MenuList className="border border-t-4 border-t-purple-500 px-0">
                  <MenuItem>
                    <div className="flex gap-4 items-center text-black">
                      <img
                        src={india}
                        className="w-6 h-6 rounded-full cursor-pointer"
                        alt=""
                      />
                      <div>English</div>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            {/* Chat Icon */}
            <div className="mx-0 sm:mx-2">
              <Menu>
                <MenuHandler>
                  <IconButton variant="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6e82a5"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </IconButton>
                </MenuHandler>
                <MenuList className="flex flex-col gap-2">
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2 shadow-md">
                    <div className="flex justify-between text-[var(--dash-text-color)] w-full">
                      <div>Recent Chats</div>
                      <div className="text-[var(--theme-color)]">Settings</div>
                    </div>
                  </MenuItem>
                  <div className="h-48 overflow-y-scroll">
                    <MenuItem className="flex items-center gap-4 py-2 pr-5 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold text-[#526484]"
                          >
                            George Philips
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-[var(--para-color)]"
                          >
                            Have you seems to claim from Ros ...
                          </Typography>
                        </div>
                        <div>6 Apr</div>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-5 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold text-[#526484]"
                          >
                            George Philips
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-[var(--para-color)]"
                          >
                            Have you seems to claim from Ros ...
                          </Typography>
                        </div>
                        <div>6 Apr</div>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-5 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold text-[#526484]"
                          >
                            George Philips
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-[var(--para-color)]"
                          >
                            Have you seems to claim from Ros ...
                          </Typography>
                        </div>
                        <div>6 Apr</div>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-5 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold text-[#526484]"
                          >
                            George Philips
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-[var(--para-color)]"
                          >
                            Have you seems to claim from Ros ...
                          </Typography>
                        </div>
                        <div>6 Apr</div>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-5 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex gap-1">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold text-[#526484]"
                          >
                            George Philips
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-[var(--para-color)]"
                          >
                            Have you seems to claim from Ros ...
                          </Typography>
                        </div>
                        <div>6 Apr</div>
                      </div>
                    </MenuItem>
                  </div>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="text-[var(--theme-color)] border-t-1 text-center mx-auto py-2">
                      View All
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            {/* Bell Icon */}
            <div className="mx-0 sm:mx-2">
              <Menu>
                <MenuHandler>
                  <IconButton variant="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6e82a5"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </IconButton>
                </MenuHandler>
                <MenuList className="flex flex-col gap-2">
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2 shadow-md">
                    <div className="flex justify-between text-[var(--dash-text-color)] w-full">
                      <div>Notifications</div>
                      <div className="text-[var(--theme-color)]">
                        Mark All as read
                      </div>
                    </div>
                  </MenuItem>
                  <div className="h-48 overflow-y-scroll">
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                      <Avatar
                        variant="circular"
                        alt="candice wu"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          <span className="font-medium text-blue-gray-900">
                            Wu
                          </span>{" "}
                          send you a message
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 text-xs text-gray-600"
                        >
                          <ClockIcon className="h-3 w-3" />
                          13 minutes ago
                        </Typography>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                      <Avatar
                        variant="circular"
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      />
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          <span className="font-medium text-blue-gray-900">
                            Natali
                          </span>{" "}
                          reply to your email
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 text-xs text-gray-600"
                        >
                          <ClockIcon className="h-3 w-3" />a hour ago
                        </Typography>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                      <Avatar
                        variant="circular"
                        alt="paypal"
                        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                      />
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          <span className="font-medium text-blue-gray-900">
                            PayPal
                          </span>{" "}
                          you&apos;ve received a payment.
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 text-xs text-gray-600"
                        >
                          <ClockIcon className="h-3 w-3" />5 hours ago
                        </Typography>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                      <Avatar
                        variant="circular"
                        alt="paypal"
                        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                      />
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          <span className="font-medium text-blue-gray-900">
                            PayPal
                          </span>{" "}
                          you&apos;ve received a payment.
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 text-xs text-gray-600"
                        >
                          <ClockIcon className="h-3 w-3" />5 hours ago
                        </Typography>
                      </div>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                      <Avatar
                        variant="circular"
                        alt="paypal"
                        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                      />
                      <div className="flex flex-col gap-1">
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          <span className="font-medium text-blue-gray-900">
                            PayPal
                          </span>{" "}
                          you&apos;ve received a payment.
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 text-xs text-gray-600"
                        >
                          <ClockIcon className="h-3 w-3" />5 hours ago
                        </Typography>
                      </div>
                    </MenuItem>
                  </div>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="text-[var(--theme-color)] border-t-1 text-center mx-auto py-2">
                      View All
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            {/* Profile */}
            <div>
              <Menu>
                <MenuHandler>
                  <div className="w-fit flex cursor-pointer">
                    <Avatar
                      variant="circular"
                      alt="candice wu"
                      size="sm"
                      className="cursor-pointer"
                      src={`${baseurl}/api/stprofilepic/${studentData.profilePic}`}
                    />
                    <div className=" mx-2 hidden sm:block">
                      <h6 className="text-xs text-[var(--theme-color)]">
                        Student
                      </h6>
                      <h4 className="flex items-center my-1 text-sm font-semibold text-[#6e82a5]">
                        {studentData.name}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mx-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </h4>
                    </div>
                  </div>
                </MenuHandler>
                <MenuList className="shadow-lg">
                  <MenuItem className="flex items-center gap-2">
                    <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography variant="small" className="font-normal">
                      <Link to="/student/profile">View Profile</Link>
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem className="flex items-center gap-2">
                    <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography variant="small" className="font-normal">
                      Account Setting
                    </Typography>
                  </MenuItem> */}
                  {/* <MenuItem className="flex items-center gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-activity"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                        />
                      </svg>
                    </div>
                    <Typography variant="small" className="font-normal">
                      Login Activity
                    </Typography>
                  </MenuItem> */}
                  <hr className="my-1 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2 ">
                    <PowerIcon strokeWidth={2} className="h-4 w-4" />
                    <Typography
                      variant="small"
                      className="font-normal"
                      onClick={() => {
                        localStorage.removeItem("auth");
                        updateAuth();
                        navigate("/");
                      }}
                    >
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHeader;
