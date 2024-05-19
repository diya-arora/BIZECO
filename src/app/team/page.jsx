import TeamCards from '../../component/TeamCards.jsx';
import Footer from '@/component/Footer.jsx';
import data from "./data"

const Page = () => {
    return (
        <div>
            <div className='mt-[3rem]'>
                <TeamCards data={data}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;