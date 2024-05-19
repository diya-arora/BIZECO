
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
  const gfgdesc= "Delhi Public School Rohini invites you to the annual Business and Economics competition ‘BIZECO 2024’ to be held on 26th and 27th July 2024. This competition encompasses six engaging and challenging events, each focusing on different aspects of commerce and economics, that provide a platform to students to showcase and upskill their business knowledge and acumen."

  const gwhead=" Events entailing BIZECO"
  const p1 = "Investor’s Pitch, Bizeco Stock Exchange (BSE), Macquire, Crypteco, Estate Battle, Ad-Stratify"
  const p2 = ""
  const p3 = ""
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
