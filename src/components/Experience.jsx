import React from "react";
import ExperienceStyle from "../assets/sass/Experience.module.scss";
import ExpCards from "./ExpCards";

export default function Experience() {
  const educationData = [
    {
      title: "Master of Computer Applications",
      subTitle: "Ayya Nadar Janaki Ammal College",
      content: "2022 - 24",
    },
    {
      title: "Bachelor of Computer Applications",
      subTitle: "Ayya Nadar Janaki Ammal College",
      content: "2019 - 22",
    },
    {
      title: "Higher Secondary Certificate",
      subTitle: "VNUP Kaleeswari HSS",
      content: "2017 - 19",
    },
    {
      title: "Secondary School Leaving Certificate",
      subTitle: "TVK Govt. HSS",
      content: "2012 - 17",
    },
  ];
  const experienceData = [
    {
      title: "Junior DevOps Engineer",
      subTitle: "Finsurge Pte. Ltd.",
      content: "Dec 2023 - Present",
    },
    // { title: "DevOps Trainee", subTitle: "Finsurge Pte. Ltd.", content: "Dec 2023 - Jun 2024" },
    // { title: "Dr. Raajan LifeCare Foundation Site", subTitle: "Developed in WIX", content: "Freelance Project" },
  ];

  return (
    <div className={ExperienceStyle.outer}>
      <div className={ExperienceStyle.inner}>
        <div className={ExperienceStyle.card}>
          <ExpCards data={educationData} title={"Education"} />
        </div>
        <div className={ExperienceStyle.card}>
          <ExpCards data={experienceData} title={"Experience"} />
        </div>
      </div>
    </div>
  );
}
