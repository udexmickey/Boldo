// TeamSection.js
import React from "react";
import TeamCard, { TeamCard2 } from "../TeamCard";

export default function TeamSection() {
  return (
    <div>
      <div className="team__head">Our team</div>
      <div className="team__title">The people behind the work</div>
      <div className="team__body">
        <div className="team__content">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration.
        </div>
        <div className="team__counts">
          <TeamCard className={"team__players"} />
          <TeamCard2 className={"team__players"} />
        </div>
      </div>
    </div>
  );
}
