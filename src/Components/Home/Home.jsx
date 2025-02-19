
import Announcements from '../ExtraSection/Announcements';
import LibraryCard from '../ExtraSection/LibraryCard';
import OurReviews from '../ExtraSection/Review';
import Reviews from '../ExtraSection/Review';
import SuccessStories from '../ExtraSection/SuccessStories';
import ProfileUpdate from '../Shared/ProfileUpdate';
import Banner from './Banner';

import Others from './Others';
import OtherSecons from './OtherSecons';
import SecondSection from './SecondSection';
import SessionCard from './SessionCard';
import OurTutors from './Tutor/OurTutor';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            
            <SecondSection></SecondSection>
            <SessionCard></SessionCard>
            <Others></Others>
            <Announcements></Announcements>
            <SuccessStories></SuccessStories>
            <OtherSecons></OtherSecons> 
            <LibraryCard></LibraryCard>           
            <OurReviews></OurReviews>
            
        </div>
    );
};

export default Home;