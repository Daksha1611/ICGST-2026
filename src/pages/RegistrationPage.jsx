import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import RegistrationFeeTable from '../components/registration/RegistrationFeeTable';

import HeroSection from '../components/home/HeroSection';

export default function RegistrationPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Registration"
                subtitle="Register for ICGST-2026 and secure your participation in this premier international conference."
            />

            {/* Registration Details */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Registration Details"
                    subtitle="Select your participation type and complete your registration"
                />
                <div className="max-w-6xl mx-auto">
                    <RegistrationFeeTable />
                </div>
            </SectionContainer>
        </>
    );
}
