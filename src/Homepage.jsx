import { Button } from "@material-tailwind/react";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import heroImg2 from "./assets/images/hero-img2.png";
import adca from "./assets/images/adca.jpg";
import studentMonth from "./assets/images/student-of-the-month.jpg";
import about1 from "./assets/images/about-1.jpg";
import teacher from "./assets/images/teacher.png";
import onlineCourse from "./assets/images/online-course.png";
import certificate from "./assets/images/certificate.png";
import learning from "./assets/images/learning.png";
import notes from "./assets/images/notes.png";
import person1 from "./assets/images/person-1.jpg";
import person2 from "./assets/images/person-2.jpg";
import person3 from "./assets/images/person-3.jpg";
import news from "./assets/images/news.jpg";
import question from "./assets/images/question-mark.png";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Homepage = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-container mb-10 sm:mb-5 flex items-center bg-[#0000000f] pb-3">
        <div className='before:absolute before:top-0 before:left-0 before:content-[""] before:bg-[url("./assets/images/hero-img.jpg")] before:w-full before:h-2/3 sm:before:h-2/3 lg:before:h-5/6 before:-z-10 hero-section w-full before:bg-cover before:bg-center before:opacity-90 px-10 flex justify-around items-center'>
          <div className="flex sm:flex-row lg:flex-row items-center justify-around w-full flex-wrap space-x-5 sm:space-x-7 ">
            <div className="text-white max-w-lg">
              <h1 className="mb-2 text-4xl font-bold text-justify leading-snug]">
                Learn Computer Skills That Will Take Your Career to the Next
                Level
              </h1>
              <p className="max-w-md my-3">
                Our computer courses can help you acquire the skills and
                knowledge you need to excel in your field
              </p>
              <Button className="bg-[var(--theme-color)] my-5">
                Start Learning
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src={heroImg2}
                className="h-64 w-64 lg:h-96  lg:w-96"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SMS */}
      <section>
        <div className="flex justify-around mx-10 my-20">
          <div className="w-1/3">
            <img src={about1} className="w-full" alt="" />
          </div>
          <div className="p-5  flex flex-col items-center justify-center w-max">
            <h3 className="text-6xl font-bold text-[var(--secondary-color)] text-center my-3">
              About SMS Education
            </h3>
            <div className="flex justify-around w-full my-4">
              {/* First box */}
              <div className="m-2">
                <div className="text-4xl font-bold text-[var(--theme-color)]">
                  76M+
                </div>
                <div className="font-bold text-[var(--secondary-color)]">
                  Student Learning
                </div>
              </div>
              {/* Second box */}
              <div className="m-2">
                <div className="text-4xl font-bold text-[var(--theme-color)]">
                  80k+
                </div>
                <div className="font-bold text-[var(--secondary-color)]">
                  Active Courses
                </div>
              </div>
              {/* First box */}
              <div className="m-2">
                <div className="text-4xl font-bold text-[var(--theme-color)]">
                  990+
                </div>
                <div className="font-bold text-[var(--secondary-color)]">
                  Instructor Online
                </div>
              </div>
            </div>
            <p className="text-[var(--para-color)] text-justify max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              autem, vero praesentium reiciendis consequatur temporibus! Esse
              deserunt, a voluptas id rerum placeat perspiciatis eaque doloribus
              reprehenderit earum, sed similique, fugiat quisquam? Pariatur,
              sapiente culpa quis aliquid sed doloribus illum, atque nostrum
              quibusdam nulla veniam! Quas atque iure ipsa veritatis magnam.
            </p>
          </div>
        </div>
      </section>

      {/* Student of the month */}
      <section>
        <div className="mx-10 sm:mx-20 my-20">
          <h2 className="text-center text-4xl my-3 font-bold text-[var(--secondary-color)]">
            Student Of The Month
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="sm:w-1/2">
              <img src={studentMonth} className="mx-auto" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center px-3 sm:w-1/2 text-center">
              <h3 className="text-4xl my-3 font-bold text-[var(--secondary-color)]">
                Vaibhav Awasthi
              </h3>
              <div className="text-2xl text-[var(--secondary-color)]">
                <span className="">Course : </span> C++
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular courses */}
      <section>
        <div className="mx-10 sm:mx-20 my-20">
          <h2 className="text-center text-4xl my-3 font-bold text-[var(--secondary-color)]">
            Discover Our Featured Courses
          </h2>

          {/* <span className="underline cursor-pointer hover:no-underline transition">
                View All
              </span> */}

          {/* Course container */}
          <div className=" flex justify-around  mt-10 flex-wrap">
            {/* course */}
            <div class="max-w-sm w-64 m-2 rounded overflow-hidden shadow-lg border">
              <img class="h-40 w-full" src={adca} alt="adca course" />
              <div class="px-3 py-4">
                <div class="font-bold text-xl mb-2 text-[var(--secondary-color)]">
                  Advanced Diploma in Computer Application
                </div>
              </div>
              <div class="px-3 pt-4 pb-2">Manoj Pandey / 321 Students</div>
            </div>
            {/* course */}
            <div class="max-w-sm w-64 m-2 rounded overflow-hidden shadow-lg border">
              <img class="h-40 w-full" src={adca} alt="adca course" />
              <div class="px-3 py-4">
                <div class="font-bold text-xl mb-2 text-[var(--secondary-color)]">
                  Advanced Diploma in Computer Application
                </div>
              </div>
              <div class="px-3 pt-4 pb-2">Manoj Pandey / 321 Students</div>
            </div>
            {/* course */}
            <div class="max-w-sm w-64 m-2 rounded overflow-hidden shadow-lg border">
              <img class="h-40 w-full" src={adca} alt="adca course" />
              <div class="px-3 py-4">
                <div class="font-bold text-xl mb-2 text-[var(--secondary-color)]">
                  Advanced Diploma in Computer Application
                </div>
              </div>
              <div class="px-3 pt-4 pb-2">Manoj Pandey / 321 Students</div>
            </div>
            {/* <span className="absolute top-0 right-0">View All</span> */}
          </div>
        </div>
      </section>

      {/* Benifits of learning with SMS */}
      <section>
        <div className="mx-5 sm:mx-10 md:mx-14 lg:mx-20">
          <h2 className="text-center text-4xl my-3 font-bold text-[var(--secondary-color)]">
            Benefits of Learning with SMS
          </h2>
          <div className="flex justify-around my-10 flex-wrap text-center">
            {/* First Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={teacher} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                Qualified Teachers
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>
            {/* Second Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={onlineCourse} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                Online Courses
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>
            {/* Third Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={certificate} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                Certification
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>

            {/* Fourth Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={learning} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                Mastry Learning
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>
            {/* Fifth Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={notes} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                Video Lectures
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>
            {/* Sixth Course */}
            <div className="border w-72 flex flex-col justify-center p-4 m-3 rounded-md shadow-lg items-center">
              <img src={teacher} className="w-20 h-20" alt="" />
              <h4 className="text-lg text-[var(--secondary-color)] font-semibold my-2">
                PDF Notes
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quidem minima reprehenderit?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials  */}
      <section>
        <div className="mb-32 text-gray-800 text-center mx-20 my-20">
          <h2 className="text-center text-4xl my-10 font-bold text-[var(--secondary-color)]">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            {/* Testimonial - 1 */}
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img src={person1} className="rounded-full shadow-lg w-32" />
              </div>
              <h5 className="text-lg font-bold mb-4 text-[var(--secondary-color)]">
                Harsh Agarwal
              </h5>
              <h6 className="font-medium text-[var(--theme-color)] mb-4">
                Web Developer
              </h6>
              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
            {/* Testimonial - 2 */}
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img src={person2} className="rounded-full shadow-lg w-32" />
              </div>
              <h5 className="text-lg font-bold mb-4 text-[var(--secondary-color)]">
                Saurabh Shukla
              </h5>
              <h6 className="font-medium text-[var(--theme-color)] mb-4">
                Graphic Designer
              </h6>
              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
            {/* Testimonial - 3 */}
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img src={person3} className="rounded-full shadow-lg w-32" />
              </div>
              <h5 className="text-lg font-bold mb-4 text-[var(--secondary-color)]">
                Himanshu Awasthi
              </h5>
              <h6 className="font-medium text-[var(--theme-color)] mb-4">
                Marketing Specialist
              </h6>
              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section>
        <div className="mx-5 sm:mx-10 md:mx-14 lg:mx-20 my-20">
          <h2 className="text-center text-4xl my-10 font-bold text-[var(--secondary-color)]">
            Blogs & News
          </h2>
          <div className="flex justify-around flex-wrap">
            {/* Blog -1 */}
            <div className="max-w-xs m-3 bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="rounded-t-lg" src={news} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--secondary-color)]">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-[var(--para-color)]">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="flex items-center text-[var(--theme-color)] hover:underline hover:underline-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Blog -2 */}
            <div className="max-w-xs m-3 bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="rounded-t-lg" src={news} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--secondary-color)]">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-[var(--para-color)]">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="flex items-center text-[var(--theme-color)] hover:underline hover:underline-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Blog -3 */}
            <div className="max-w-xs m-3 bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="rounded-t-lg" src={news} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[var(--secondary-color)]">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-[var(--para-color)]">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="flex items-center text-[var(--theme-color)] hover:underline hover:underline-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-5 sm:mx-10 md:mx-14 lg:mx-20">
          <h2 className="text-center text-4xl my-10 font-bold text-[var(--secondary-color)]">
            Frequently Asked Questions
          </h2>
          {/* <div className="lg:w-[60%] sm:w-[90%] md:w-[70%] mx-auto">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-[var(--secondary-color)]"
              >
                Do I need any Degree for enrolling into any course?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-[var(--secondary-color)]"
              >
                Do I need any Degree for enrolling into any course?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-[var(--secondary-color)]"
              >
                Do I need any Degree for enrolling into any course?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div> */}
          <div className="flex justify-around flex-wrap">
            {/* Question 1 */}
            <div className="flex mx-3 my-5 max-w-lg">
              <div className="mr-3">
                <img src={question} className=" w-20" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--secondary-color)] lg:my-2">
                  Do I need any Degree for enrolling into any course ?
                </h3>
                <p className="text-[var(--para-color)] max-w-lg my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  repudiandae et dicta voluptate vitae, cupiditate qui
                  voluptatem necessitatibus rerum incidunt veritatis eum ea
                  possimus odio, voluptas ipsum. Mollitia, ipsam deserunt.
                </p>
              </div>
            </div>
            {/* Question 2 */}
            <div className="flex mx-3 my-5 max-w-lg">
              <div className="mr-3">
                <img src={question} className=" w-20" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--secondary-color)]  lg:my-2">
                  Do I need any Degree for enrolling into any course ?
                </h3>
                <p className="text-[var(--para-color)] max-w-lg my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  repudiandae et dicta voluptate vitae, cupiditate qui
                  voluptatem necessitatibus rerum incidunt veritatis eum ea
                  possimus odio, voluptas ipsum. Mollitia, ipsam deserunt.
                </p>
              </div>
            </div>
            {/* Question 3 */}
            <div className="flex mx-3 my-5 max-w-lg">
              <div className="mr-3">
                <img src={question} className=" w-20" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--secondary-color)] lg:my-2">
                  Do I need any Degree for enrolling into any course ?
                </h3>
                <p className="text-[var(--para-color)] max-w-lg my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  repudiandae et dicta voluptate vitae, cupiditate qui
                  voluptatem necessitatibus rerum incidunt veritatis eum ea
                  possimus odio, voluptas ipsum. Mollitia, ipsam deserunt.
                </p>
              </div>
            </div>
            {/* Question 4 */}
            <div className="flex mx-3 my-5 max-w-lg">
              <div className="mr-3">
                <img src={question} className=" w-20" alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--secondary-color)]  lg:my-2">
                  Do I need any Degree for enrolling into any course ?
                </h3>
                <p className="text-[var(--para-color)] max-w-lg my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  repudiandae et dicta voluptate vitae, cupiditate qui
                  voluptatem necessitatibus rerum incidunt veritatis eum ea
                  possimus odio, voluptas ipsum. Mollitia, ipsam deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
