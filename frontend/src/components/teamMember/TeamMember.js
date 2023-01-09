import clsx from "clsx";
import SectionTitle from "../tabProduct/SectionTitle";
import teamMemberData from "./team-member.json";
import TeamMemberSingle from "./TeamMemberSingle";

const TeamMember = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("team-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        {/* section title */}
        <SectionTitle
          titleText="Team Members"
          subTitleText="Lorem ipsum dolor sit amet conse ctetu."
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row">
          {teamMemberData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <TeamMemberSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
