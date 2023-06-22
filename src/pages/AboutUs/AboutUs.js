import React from "react";
import TeamCard from "../../components/Cards/TeamCards/TeamCard";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="about-us-div">
      <div className="about-left">
        <div className="center-div">
          <div className="line"></div>
          <div className="about-text">Our Team</div>
        </div>
      </div>
      <div className="about-right">
        <TeamCard
          imgUrl={"https://avatars.githubusercontent.com/u/112485240?v=4"}
          name={"MERISA BESIROVIC"}
          linkedin={
            "https://rs.linkedin.com/in/merisa-be%C5%A1irovi%C4%87-6195b7276"
          }
          github={"https://github.com/merisabesirovic"}
        />
        <TeamCard
          imgUrl={"https://avatars.githubusercontent.com/u/111905358?v=4"}
          name={"ALADIN ZECIC"}
          linkedin={"#"}
          github={"https://github.com/aladinzecic"}
        />
        <TeamCard
          imgUrl={"https://avatars.githubusercontent.com/u/94453516?v=4"}
          name={"ILMA EMROVIC"}
          linkedin={"#"}
          github={"https://github.com/ilmaemrovic"}
        />
      </div>
    </div>
  );
}
