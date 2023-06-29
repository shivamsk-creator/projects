import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import UploadVideos from "./videos/UploadVideos";
import { useParams } from "react-router-dom";
import UploadLinks from "./Links.jsx/UploadLinks";
import UploadDocs from "./Documents/UploadDocs";

const StudentAcademics = ({ instructorAuth }) => {
  const [activeTab, setActiveTab] = useState("videos");
  const { id } = useParams();
  const data = [
    {
      label: "Videos",
      value: "videos",
      desc: <UploadVideos instructorAuth={instructorAuth} id={id} />,
    },
    {
      label: "Docs",
      value: "docs",
      desc: <UploadDocs instructorAuth={instructorAuth} id={id} />,
    },
    {
      label: "Links",
      value: "links",
      desc: <UploadLinks instructorAuth={instructorAuth} id={id} />,
    },
  ];
  return (
    <>
      <section className=" p-2 sm:p-5 md:p-10 ">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none mx-auto"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-blue-500" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-none mx-auto"
              >
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </section>
    </>
  );
};

export default StudentAcademics;
