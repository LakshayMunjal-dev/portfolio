import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_blank"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  reactnative: { 
    title: "React Native", 
    bg: "black", 
    fg: "white", 
    icon: <RiReactjsFill/> 
  },
  api: { 
    title: "API Integration", 
    bg: "black", 
    fg: "white", 
    icon: <Link2/> 
  },
  nlp: { 
    title: "NLP", 
    bg: "black", 
    fg: "white", 
    icon: <ArrowDownUpIcon/> 
  },
  pandas: { 
    title: "Pandas", 
    bg: "black", 
    fg: "white", 
    icon: <SiPython/> 
  },
  matplotlib: { 
    title: "Matplotlib", 
    bg: "black", 
    fg: "white", 
    icon: <SiPython/> 
  },
  flask: { 
    title: "Flask", 
    bg: "black", 
    fg: "white", 
    icon: <SiPython/> 
  },
  etl: { 
    title: "ETL", 
    bg: "black", 
    fg: "white", 
    icon: <ArrowUpRight/> 
  },
  powerapps: { 
    title: "Power Apps", 
    bg: "black", 
    fg: "white", 
    icon: <SiFirebase/> 
  },
  powerbi: { 
    title: "Power BI", 
    bg: "black", 
    fg: "white", 
    icon: <SiFirebase/> 
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/aws.svg" alt="AWS" />,
  },
  lambda: {
    title: "AWS Lambda",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/lambda.svg" alt="AWS Lambda" />,
  },
  s3: {
    title: "AWS S3",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/s3.svg" alt="AWS S3" />,
  },
  glue: {
    title: "AWS Glue",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/glue.svg" alt="AWS Glue" />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

// projects.tsx

const projects: Project[] = [
  { // 01. Find My Provider
    id: "findmyprovider",
    category: "Mobile App",
    title: "Find My Provider (Healthcare Directory App)",
    src: "/assets/projects-screenshots/findmyprovider/1.png",
    screenshots: ["1.png", "2.png"],
    live: "",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.reactnative],
      backend: [PROJECT_SKILLS.api],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Scalable React Native app integrating CMS NPI API. Implemented search filters, optimized state management & load balancing for concurrency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/findmyprovider/1.png`,
            `${BASE_PATH}/findmyprovider/2.png`,
          ]} />
        </div>
      );
    },
  },
  { // 02. AWS Image & Text Recognition Pipeline
    id: "aws-pipeline",
    category: "Cloud & AI",
    title: "AWS Image & Text Recognition Pipeline",
    src: "/assets/projects-screenshots/aws-pipeline/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.aws, PROJECT_SKILLS.lambda, PROJECT_SKILLS.s3, PROJECT_SKILLS.glue],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Built serverless pipeline for car detection & OCR with AWS Lambda, S3, and Glue. Applied event-driven architecture with fault-tolerance and auto-scaling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/aws-pipeline/1.png`,
            `${BASE_PATH}/aws-pipeline/2.png`,
            `${BASE_PATH}/aws-pipeline/3.png`,
          ]} />
        </div>
      );
    },
  },
  { // 03. Twitter US Airline Sentiment Analysis
    id: "twitter-airline-sentiment",
    category: "Data Science",
    title: "Twitter US Airline Sentiment Analysis",
    src: "/assets/projects-screenshots/twitter-sentiment/1.png",
    screenshots: ["1.png", "2.png"],
    live: "",
    github: "",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas, PROJECT_SKILLS.matplotlib, PROJECT_SKILLS.nlp],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Applied NLP techniques to classify customer tweets into sentiment categories. Used Python (NLTK, Scikit-learn, Pandas) with data visualization in Matplotlib.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/twitter-sentiment/1.png`,
            `${BASE_PATH}/twitter-sentiment/2.png`,
          ]} />
        </div>
      );
    },
  },
  { // 04. Wine Quality Prediction with AWS & Docker
    id: "wine-quality-prediction",
    category: "AI & Cloud",
    title: "Wine Quality Prediction with AWS & Docker",
    src: "/assets/projects-screenshots/wine-quality/1.png",
    screenshots: ["1.png", "2.png"],
    live: "",
    github: "", // Add GitHub if public
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.docker, PROJECT_SKILLS.aws, PROJECT_SKILLS.flask],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Deployed an ML model to predict wine quality based on chemical composition. Packaged the solution with Docker and hosted using AWS EC2 + Flask API.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/wine-quality/1.png`,
            `${BASE_PATH}/wine-quality/2.png`,
          ]} />
        </div>
      );
    },
  },
  { // 05. Organization Projects (Non-public)
    id: "org-projects",
    category: "Organization Projects",
    title: "MTA & E-commerce Organization Projects",
    src: "/assets/projects-screenshots/org-projects/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.powerbi],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.etl, PROJECT_SKILLS.powerapps],
    },
    get content() {
      return (
        <div>
          <TypographyH3 className="my-4 mt-8">Payroll Power App</TypographyH3>
          <TypographyP className="font-mono mb-2">
            Designed Power Apps + SharePoint workflows for payroll approvals and compliance tracking.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Goal Tracking Dashboard</TypographyH3>
          <TypographyP className="font-mono mb-2">
            Automated ETL + Power BI dashboards to monitor KPIs across facilities maintenance.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Training Data Notification System</TypographyH3>
          <TypographyP className="font-mono mb-2">
            Automated PDF data extraction + email notifications for expired certifications.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">E-commerce Analytics Dashboard</TypographyH3>
          <TypographyP className="font-mono mb-2">
            Built an interactive dashboard to track sales, customer behavior, and marketing KPIs.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Live Fleet Tracking System</TypographyH3>
          <TypographyP className="font-mono mb-2">
            Developed a GPS + web-based dashboard to monitor fleet movement, driver performance, and delivery status in real-time.
          </TypographyP>
          <SlideShow images={[
            `${BASE_PATH}/org-projects/1.png`,
            `${BASE_PATH}/org-projects/2.png`,
            `${BASE_PATH}/org-projects/3.png`,
            `${BASE_PATH}/org-projects/4.png`,
            `${BASE_PATH}/org-projects/5.png`,
          ]} />
        </div>
      );
    },
  },
];

export default projects;
