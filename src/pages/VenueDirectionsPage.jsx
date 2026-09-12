import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

export default function VenueDirectionsPage() {
    return (
        <>
            <HeroSection
                title="Venue & Directions"
                subtitle="How to reach ABV-IIITM, Gwalior for ICGST-2026"
            />

            <SectionContainer background="white">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Venue Card */}
                    <div className="rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden" style={{ backgroundColor: '#002855' }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight text-white">Conference Venue</h2>
                                    <p className="text-blue-200 text-sm font-medium">ICGST-2026 • October 23-25, 2026</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-1">
                                <p className="text-xl font-bold text-white">ABV-Indian Institute of Information Technology & Management</p>
                                <p className="text-blue-100 text-lg">Morena Link Road, Gwalior, Madhya Pradesh — 474015, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.2!2d78.1675!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d00d84f9c7%3A0x2b6d88d54b1f0ad7!2sABV-Indian%20Institute%20of%20Information%20Technology%20%26%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1708234567890!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ABV-IIITM, Gwalior Location"
                        ></iframe>
                    </div>

                    {/* Directions */}
                    <SectionHeader title="How to Reach" subtitle="Directions from major transport hubs" />

                    {/* From Airport */}
                    <DirectionCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                            </svg>
                        }
                        title="From Rajmata Vijaya Raje Scindia Airport (GWL)"
                        distance="~10 km"
                        time="~25 min"
                        steps={[
                            'The airport is well-connected to major Indian cities including Delhi, Mumbai, and Bengaluru.',
                            'Pre-paid taxis and auto-rickshaws are available at the airport exit.',
                            'App-based cabs (Ola, Uber) can be booked directly from the terminal.',
                            'Head towards Morena Link Road — the institute campus is located along this road.',
                        ]}
                    />

                    {/* From Railway Station */}
                    <DirectionCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4v4m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        }
                        title="From Gwalior Junction Railway Station"
                        distance="~5 km"
                        time="~15 min"
                        steps={[
                            'Gwalior Junction is a major stop on the Delhi–Chennai and Delhi–Mumbai rail corridors.',
                            'Auto-rickshaws are readily available outside the station (fare: ₹50–70 to campus).',
                            'Ola/Uber cabs can also be booked from the station.',
                            'Take the road towards Morena; ABV-IIITM campus is located on Morena Link Road, about 5 km north.',
                        ]}
                    />

                    {/* From Major Cities */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4" style={{ backgroundColor: '#002855' }}>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                From Major Cities
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { city: 'New Delhi', distance: '~320 km', mode: 'Shatabdi Express ~4.5 hrs • Flight ~1 hr', highlight: true },
                                    { city: 'Agra', distance: '~120 km', mode: 'Train ~2 hrs • Road ~2.5 hrs' },
                                    { city: 'Jaipur', distance: '~350 km', mode: 'Train ~6 hrs • Road ~5.5 hrs' },
                                    { city: 'Bhopal', distance: '~420 km', mode: 'Train ~5.5 hrs • Road ~6 hrs' },
                                    { city: 'Jhansi', distance: '~100 km', mode: 'Train ~1.5 hrs • Road ~2 hrs' },
                                    { city: 'Indore', distance: '~490 km', mode: 'Train ~8 hrs • Road ~7 hrs' },
                                ].map((item, i) => (
                                    <div key={i} className={`p-4 rounded-xl border ${item.highlight ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'}`}>
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-slate-900">{item.city}</h4>
                                            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">{item.distance}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm">{item.mode}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Local Transport */}
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Local Transport Tips
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            {[
                                'Auto-rickshaws are the most common and affordable mode of local transport in Gwalior.',
                                'Ola and Uber are available in Gwalior for convenient ride-booking.',
                                'Shared tempos (minibuses) run along major routes, including towards Morena Link Road.',
                                'Conference shuttle service between select hotels and the campus will be announced closer to the event.',
                            ].map((tip, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></span>
                                    <span className="text-base leading-relaxed">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}

function DirectionCard({ icon, title, distance, time, steps }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                        {icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                </div>
                <div className="flex gap-3">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{distance}</span>
                    <span className="text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{time}</span>
                </div>
            </div>
            <div className="p-6">
                <ol className="space-y-3">
                    {steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                            <span className="text-slate-700 text-base leading-relaxed">{step}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
