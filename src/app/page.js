
import Nav from '@/component/Nav'
import Hero from '@/component/Hero'
import AboutGFG from '@/component/AboutGFG'
import Footer from '@/component/Footer'
import Sponsors from '@/component/Sponsors'
import golddata from '../../public/assets/sponsor/gold_data'
import silverdata from '../../public/assets/sponsor/silver_data'
import otherdata from '../../public/assets/sponsor/other_data'
import Banner from '@/component/Banner'
import TimeLine from '@/component/TimeLine'
import Prize from '@/component/Prize'
import AboutGeekVishwa from '@/component/AboutGeekVishwa'
import Domains from '@/component/Domains'
import Notice from '@/component/Notice'


export default function Home() {

  const gfghead="About us"
  const gfgdesc= "GeeksforGeeks Student Chapters are university-based community chapters creating a coding culture for students interested in Computer Science and other core technical competencies. By joining the GeeksforGeeks student Chapters, students will have the opportunity to:Get an internship at GeeksforGeeks. Grow their knowledge in a peer-to-peer learning environment.Learn to build effective and optimized solutions for local businesses and their community as per the latest technology trends.Great learning and networking experience."

  const gwhead=" What is GeekVishwa"
  const p1 = "GeekVishwa Hackathon, organized by GeeksForGeeks Student Chapter VIIT in Pune, is a significant hybrid event."
  const p2 = "It gathers top talents from engineering colleges, promoting creativity, collaboration, and innovation."
  const p3 = "Participants form teams to develop practical solutions for real-world problems, with opportunities for recognition and prizes, creating a competitive and rewarding atmosphere."
  const p4 = ""

  // const gwgdesc= "GeekVishwa Hackathon is planned to be one of the largest hybrid (Offline-Online) hackathons in Pune, Organized by GeeksForGeeks Student Chapter VIIT.It is event of unprecedented scale, opportunity, and rewards, where we intent to attract and showcase the brightest talents across the plethora of engineering colleges in Pune.This event is designed to foster creativity, collaboration, and innovation among participants. It offers an excellent opportunity for participants to showcase their skills, network with peers, and potentially win prizes and recognition for their work.During the event, participants will work in teams to develop innovative ideas that can solve real-world problems. They will be encouraged to use their creativity, technical skills, and critical thinking abilities to develop solutions that are both practical and effective."

  return (
    <div className='content'>
      <Hero />
      <AboutGFG head={gfghead} desc={gfgdesc} />
      <div id="event-section">
      <AboutGeekVishwa head={gwhead} p1={p1} p2={p2} p3={p3} p4={p4} />
      </div>
      <Banner/>
      <Prize/>
      <TimeLine/>
      {/* <Notice/> */}
      <Domains/>
      <div id='sponsors' className='flex justify-center align-center gfg-gradient text-[50px] mb-[3rem] sponsor-main-title font-black'>
        {/* <span>Organizations who </span><span> &nbsp;helped us in our Lift Off</span> */}
      </div>
      <Footer/>

    </div>

  )
}
