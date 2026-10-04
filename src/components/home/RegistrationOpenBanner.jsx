import { registrationLink } from '../../data/registrationData';
import { conferenceInfo } from '../../data/conferenceData';

export default function RegistrationOpenBanner() {
    return (
        <section className="bg-white pt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-primary-100 bg-primary-50/60 px-6 py-5 rounded-lg">
                    <span className="flex items-center gap-2 text-base md:text-lg font-bold uppercase tracking-wider text-primary-800">
                        <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                        Registrations Open
                    </span>
                    <span className="text-base md:text-lg text-neutral-600">
                        Conference <strong className="font-semibold text-neutral-900">{conferenceInfo.dates}</strong> at {conferenceInfo.venue.shortName}
                    </span>
                    <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base md:text-lg font-semibold text-primary-700 hover:text-primary-900 underline underline-offset-4 decoration-primary-300 hover:decoration-primary-600 transition-colors"
                    >
                        Register now
                    </a>
                </div>
            </div>
        </section>
    );
}
