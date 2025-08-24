"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Find My Provider (Healthcare Directory App)",
    description: `Scalable React Native app integrating CMS NPI Registry API.
      Implemented advanced search filters, optimized state management,
      and ensured smooth concurrency handling.`,
    link: "https://github.com/LakshayMunjal-dev/findmyprovider",
    images: [
      "/assets/projects-screenshots/findmyprovider/1.png",
      "/assets/projects-screenshots/findmyprovider/2.png",
    ],
  },
  {
    id: 2,
    name: "AWS Image & Text Recognition Pipeline",
    description: `Built a serverless pipeline for car detection & OCR using AWS Lambda, S3, and Glue.
      Applied event-driven architecture with auto-scaling and fault-tolerance.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/awsocr/1.png",
      "/assets/projects-screenshots/awsocr/2.png",
    ],
  },
  {
    id: 3,
    name: "Twitter US Airline Sentiment Analysis",
    description: `Applied NLP to classify airline customer tweets into sentiment categories.
      Built with Python (NLTK, Scikit-learn, Pandas) and visualized results with Matplotlib.`,
    link: "https://github.com/LakshayMunjal-dev/Twitter-Airline-Sentiment-Analysis",
    images: [
      "/assets/projects-screenshots/twitter/1.png",
      "/assets/projects-screenshots/twitter/2.png",
    ],
  },
  {
    id: 4,
    name: "Wine Quality Prediction (AWS & Docker)",
    description: `Deployed a machine learning model to predict wine quality
      based on chemical composition. Packaged with Docker & hosted via AWS EC2 + Flask.`,
    link: "https://github.com/LakshayMunjal-dev/cs643-850-pa2-lm485",
    images: [
      "/assets/projects-screenshots/wine/1.png",
      "/assets/projects-screenshots/wine/2.png",
    ],
  },
  {
    id: 5,
    name: "Payroll Power App (MTA)",
    description: `Designed Power Apps + SharePoint workflows for payroll submissions
      and approvals. Reduced manual errors by 70% with automated compliance tracking.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/dashboard/1.png",
    ],
  },
  {
    id: 6,
    name: "Goal Tracking Dashboard (MTA)",
    description: `Automated ETL pipelines and built Power BI dashboards to monitor
      KPIs across facilities maintenance (Paint, Structure, Lighting).`,
    link: "#",
    images: [
      "/assets/projects-screenshots/dashboard/1.png",
    ],
  },
  {
    id: 7,
    name: "Training Data Notification System",
    description: `Automated PDF parsing and email notifications for expired certifications.
      Ensured compliance by reducing delays in training renewals.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/dashboard/1.png",
    ],
  },
  {
    id: 8,
    name: "E-commerce Analytics Dashboard",
    description: `Developed an interactive dashboard to track sales, customer behavior,
      and marketing KPIs. Helped business improve decision-making with real-time insights.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/dashboard/1.png",
    ],
  },
  {
    id: 9,
    name: "Live Fleet Tracking System",
    description: `Built a GPS + web-based dashboard to monitor fleet movement,
      driver performance, and delivery status in real time.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/dashboard/1.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px] font-bold">Featured Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label={`Screenshots of ${project.name}`}
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of ${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={200}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-lg font-semibold">
                  <Link href={project.link} target="_blank">
                    {project.name}
                  </Link>
                </h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;