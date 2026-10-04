import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import AboutInstitute from '../components/home/AboutInstitute';
import RegistrationOpenBanner from '../components/home/RegistrationOpenBanner';

export default function HomePage() {
    return (
        <>
            <HeroSection isHomePage={true} />
            <RegistrationOpenBanner />
            <IntroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t-2 border-neutral-200" />
            </div>
            <AboutInstitute />
        </>
    );
}
