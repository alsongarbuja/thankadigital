import { teams } from "@/utils/team";
import Image from "next/image";
import { GitHub, Globe, Linkedin } from "react-feather";

const AboutPage = () => {
  return (
    <>
      <h3 className="uppercase">About US</h3>
      <p className="font-medium text-gray-600">Meet our teams who are working together to make great products</p>

      <div className="grid items-center grid-cols-1 gap-4 mt-8 md:grid-cols-2">
        <div className="">
          <h4 className="">Our Mission</h4>
          <p className="w-full text-lg text-justify">
            We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
          </p>
        </div>
        <Image 
          src="/thanka_digital_logo.svg"
          alt="mission"
          width={200}
          height={200}
          className="object-cover w-1/2 h-auto mx-auto"
        />
      </div>

      <div className="mt-10">
        <h4 className="">Our Teams</h4>
        <h6 className="mt-8 text-center">Core Team</h6>
        <MemberWrapper>
          {teams.coreTeams.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>

        <h6 className="mt-8 text-center">Developers</h6>
        <MemberWrapper>
          {teams.developers.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>

        {teams.designers.length>0&&<h6 className="mt-8 text-center">Designers</h6>}
        <MemberWrapper>
          {teams.designers.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>

        {teams.marketers.length>0&&<h6 className="mt-8 text-center">Marketering Team</h6>}
        <MemberWrapper>
          {teams.marketers.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>

        {teams.testers.length>0&&<h6 className="mt-8 text-center">Testers</h6>}
        <MemberWrapper>
          {teams.testers.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>

        {teams.others.length>0&&<h6 className="mt-8 text-center">Others Members</h6>}
        <MemberWrapper>
          {teams.others.map(team => (
            <Member member={team} key={team.id} />
          ))}
        </MemberWrapper>
      </div>
    </>
  )
}

const MemberWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
    {children}
  </div>
)

const Member = ({ member }: { member: TeamModel }) => {
  return (
    <div className="relative w-full md:w-[18%] h-[350px] group overflow-hidden">
      <Image 
        src={member.image}
        alt={member.name}
        width={250}
        height={350}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 z-10 w-full text-white -translate-x-1/2 left-1/2">
        
      </div>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 text-white transition-all ease-in-out opacity-0 group-hover:opacity-100 bg-primary_blue/50">
        <div className="w-full text-center">
          <p className="text-3xl font-bold">{member.name}</p>
          <p className="py-2 font-semibold bg-primary_red/20">{member.position}</p>
        </div>
        <div className="flex gap-4">
          {member.portfolio&&<a href={member.portfolio} target='_blank' rel="noreferrer" aria-label={`link to portfolio of ${member.name}`}><Globe /></a>}
          <a href={member.linkedin} target='_blank' rel="noreferrer" aria-label={`link to linkedin of ${member.name}`}><Linkedin /></a>
          <a href={member.github} target='_blank' rel="noreferrer" aria-label={`link to github of ${member.name}`}><GitHub /></a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage