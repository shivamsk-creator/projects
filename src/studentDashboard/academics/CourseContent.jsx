import React, { useEffect, useState } from "react";
import artificialIntelligence from "../../assets/images/artificial-intelligence.jpg";
import { Link, useParams } from "react-router-dom";
import baseurl from "../../Config";

const CourseContent = () => {
  const [videos, setVideos] = useState([]);
  const [links, setLinks] = useState([]);
  const [docs, setDocs] = useState([]);
  const { id } = useParams();
  console.log(videos, links, docs);

  useEffect(() => {
    getVideosData();
    getLinksData();
    getDocsData();
  }, [id]);

  const getVideosData = () => {
    fetch(baseurl + "/api/videocontent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let filteredData = result.filter((video) => video.course == id);
        setVideos(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLinksData = () => {
    fetch(baseurl + "/api/linkcontent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let filteredData = result.filter((link) => link.course == id);
        setLinks(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDocsData = () => {
    fetch(baseurl + "/api/docxconent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let filteredData = result.filter((docs) => docs.course == id);
        setDocs(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start">
          Course Material
        </h2>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-row">
          {/* Course Video & Pdfs */}
          <div className="px-2">
            {videos.map((item) => {
              return (
                <div className="max-w-sm md:max-w-lg lg:max-w-2xl mt-10 mb-20">
                  <video controls className="h-96 w-full">
                    <source
                      src={`${baseurl}/api/videocontent/${item.video}`}
                      type="video/mp4"
                    />
                  </video>
                  <div className="px-3">
                    <h4 className="text-2xl font-semibold my-5 text-[var(--secondary-color)]">
                      {item.name}
                    </h4>
                    <div className="flex space-x-5">
                      {/* Duration */}
                      <div className="flex my-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>{item.duration}</div>
                      </div>
                    </div>
                    <p className="my-2 text-[var(--para-color)]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* right Content */}
          <div className="m-3 p-2 grow">
            {/* Docs */}
            <h2 className="my-5 text-2xl font-bold text-[var(--secondary-color)] text-center sm:text-start ">
              Docs
            </h2>
            <div>
              {docs.map((item) => {
                return (
                  <div className=" flex items-center justify-center border hover:shadow-lg hover:-translate-y-1 my-3 py-1 transition cursor-pointer rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    <Link
                      to={`${baseurl}/api/docxconent/${item.doc}`}
                      className="flex items-center text-xl font-bold text-[var(--secondary-color)]"
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* Links */}
            <div className="py-5">
              <h2 className="text-2xl font-bold text-[var(--secondary-color)] text-center sm:text-start ">
                Links / References
              </h2>
              <div>
                {links.map((item) => {
                  return (
                    <div className="px-2 flex flex-col items-start border hover:shadow-lg hover:-translate-y-1 my-3 py-1 transition rounded-sm break-words">
                      <div className="my-1">
                        <span className="font-bold text-[var(--secondary-color)]">
                          Name
                        </span>{" "}
                        : {item.name}
                      </div>
                      <div className="my-1">
                        <span className="font-bold text-[var(--secondary-color)]">
                          Link
                        </span>{" "}
                        :{" "}
                        <Link
                          to={`${item.link}`}
                          className="break-all hover:text-blue-800 max-w-sm"
                        >
                          Click Here
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseContent;
