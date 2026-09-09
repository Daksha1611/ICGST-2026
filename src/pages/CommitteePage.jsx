import {
    honoraryGeneralChairs,
    generalChairs,
    conferenceChairs,
    conferenceCoChairs,
    organizingChairs,
    trackChairs,
} from '../data/committeeData';

import HeroSection from '../components/home/HeroSection';

export default function CommitteePage() {
    return (
        <div className="bg-neutral-50 pb-16">
            {/* Page Header */}
            <HeroSection
                title="Organizing Committee"
                subtitle="Meet the distinguished organizing committee of ICGST-2026."
            />

            <section className="py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-10">
                        {/* Honorary General Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Honorary General Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {honoraryGeneralChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* General Chair */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">General Chair</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {generalChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Conference Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Conference Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {conferenceChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Conference Co-Chair */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Conference Co-Chair</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {conferenceCoChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Organizing Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Organizing Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {organizingChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Track Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Track Chairs</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                                {trackChairs.map((track) => (
                                    <div key={track.track} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                                        <h3 className="text-base font-bold text-primary-700 uppercase tracking-wider mb-4">{track.track}</h3>
                                        <div className="flex flex-col gap-4">
                                            {track.members.map((member, index) => (
                                                <TrackChairEntry key={index} member={member} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TrackChairEntry({ member }) {
    return (
        <div className="border-l-2 border-primary-100 pl-4">
            <p className="text-base font-bold text-neutral-900 leading-snug">{member.name}</p>
            {member.designation && (
                <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider mt-0.5">{member.designation}</p>
            )}
            <p className="text-sm text-neutral-600 leading-snug mt-0.5">{member.affiliation}</p>
        </div>
    );
}

function MemberCard({ member }) {
    const initials = member.name === 'TBD'
        ? '?'
        : member.name
            .split(' ')
            .filter(n => !['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.'].includes(n))
            .map(n => n.charAt(0))
            .join('')
            .slice(0, 2);

    return (
        <div className="flex-1 w-full min-w-[250px] max-w-[275px] bg-white rounded-2xl shadow-sm border border-neutral-100 p-5 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-start">
            {/* Avatar / Photo Frame */}
            {member.profileUrl ? (
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="block relative group flex-shrink-0 w-full mb-4">
                    <div
                        className="w-44 h-52 xl:w-48 xl:h-56 rounded-xl mx-auto flex items-center justify-center text-2xl xl:text-3xl font-bold text-white shadow-sm border border-slate-200/80 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-md bg-slate-50"
                    >
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<span class="text-slate-700 font-bold text-2xl">${initials}</span>`;
                                }}
                                className="w-full h-full object-cover object-top scale-105"
                            />
                        ) : (
                            <span className="text-slate-700 font-bold text-2xl">{initials}</span>
                        )}
                    </div>
                </a>
            ) : (
                <div
                    className="w-44 h-52 xl:w-48 xl:h-56 rounded-xl mb-4 mx-auto flex items-center justify-center text-2xl xl:text-3xl font-bold text-white shadow-sm border border-slate-200/80 overflow-hidden flex-shrink-0 bg-slate-50"
                >
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 hover:scale-110"
                        />
                    ) : (
                        <span className="text-slate-700 font-bold text-2xl">{initials}</span>
                    )}
                </div>
            )}

            {/* Name */}
            {member.profileUrl ? (
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-neutral-900 mb-1 hover:text-primary-600 transition-colors">
                    {member.name}
                </a>
            ) : (
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
            )}

            {/* Designation */}
            {member.designation ? (
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 leading-tight">{member.designation}</p>
            ) : (
                <div className="mb-2"></div>
            )}

            {/* Affiliation */}
            <p className="text-xs xl:text-sm text-neutral-600 leading-snug">{member.affiliation}</p>

            {/* Email */}
            {member.email && (
                <a href={`mailto:${member.email}`} className="text-xs text-primary-600 hover:text-primary-800 mt-2 inline-block font-medium">
                    {member.email}
                </a>
            )}
        </div>
    );
}
