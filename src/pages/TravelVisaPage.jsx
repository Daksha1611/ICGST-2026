import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

export default function TravelVisaPage() {
    return (
        <>
            <HeroSection
                title="Travel Visa Information"
                subtitle="Complete visa guidance for ICGST-2026 international attendees"
            />

            <SectionContainer background="white">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Welcome */}
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p className="text-lg leading-relaxed">
                            We look forward to welcoming you to <strong>ICGST-2026</strong> at ABV-IIITM, Gwalior, India!
                            To ensure a smooth visa application process, please follow the instructions below.
                        </p>
                    </div>

                    {/* Visa Type */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4" style={{ backgroundColor: '#002855' }}>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                                1. Visa Type
                            </h2>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-slate-700 text-base leading-relaxed">
                                You will need to apply for a <strong>Conference Visa</strong> to attend ICGST-2026. India offers two types of Conference Visas:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">e-Conference Visa</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Available for nationals of select countries. Apply online through the official Indian e-Visa portal.
                                    </p>
                                    <a
                                        href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                                    >
                                        Check Eligibility →
                                    </a>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Traditional Conference Visa</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Required for those not eligible for an e-Conference Visa. Apply through the nearest Indian Embassy or Consulate.
                                    </p>
                                    <a
                                        href="https://indianvisaonline.gov.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                                    >
                                        Embassy Portal →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4" style={{ backgroundColor: '#002855' }}>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                2. Documents Required
                            </h2>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-4">
                                {[
                                    { label: 'Valid Passport', desc: 'Must be valid for at least six months from your planned arrival date in India with at least two blank pages.' },
                                    { label: 'Visa Invitation Letter', desc: 'An official invitation letter from the ICGST-2026 organizing committee. Fill out the visa letter request form (link below).' },
                                    { label: 'Clearance from Ministry of External Affairs (MEA)', desc: 'Political clearance documents from MEA, Government of India (attached in your confirmation email).' },
                                    { label: 'Clearance from Ministry of Home Affairs (MHA)', desc: 'Event clearance documents. Delegates from Afghanistan, Pakistan, Iraq, Sudan, foreigners of Pakistani origin, and stateless persons should contact icgst2026@iiitm.ac.in directly.' },
                                    { label: 'Passport-Sized Photo', desc: 'A recent colour photograph with a white background (specific dimensions as per portal requirements).' },
                                    { label: 'Accommodation Details', desc: 'Proof of hotel booking or conference accommodation at ABV-IIITM, Gwalior.' },
                                    { label: 'Flight Itinerary', desc: 'A copy of your return/onward flight itinerary.' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.label}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Request Visa Letter */}
                    <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-sm border border-blue-100 p-8 text-center">
                        <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Request Your Visa Invitation Letter</h3>
                        <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                            To receive your official visa invitation letter, please email us at the address below with your full name, passport number, affiliation, and paper ID (if applicable).
                        </p>
                        <a
                            href="mailto:icgst2026@iiitm.ac.in?subject=Visa Invitation Letter Request — ICGST-2026"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] !text-white font-semibold rounded-lg hover:bg-[#001a3a] transition-colors shadow-md shadow-blue-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            icgst2026@iiitm.ac.in
                        </a>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4" style={{ backgroundColor: '#002855' }}>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                3. How to Apply
                            </h2>
                        </div>
                        <div className="p-6 space-y-8">
                            {/* e-Conference */}
                            <div>
                                <h3 className="font-bold text-blue-900 text-lg mb-4">For e-Conference Visa (if eligible)</h3>
                                <ol className="space-y-3">
                                    {[
                                        <>Visit the official e-Visa portal: <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium underline">indianvisaonline.gov.in</a></>,
                                        'Fill in the application form and upload the required documents.',
                                        'Pay the visa fee online using accepted international payment methods.',
                                        'You will receive your Electronic Travel Authorization (ETA) via email, typically within 3–5 business days.',
                                        'Print the ETA and carry it when travelling to India.',
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                                            <span className="text-slate-700 text-base pt-0.5">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <hr className="border-slate-100" />

                            {/* Traditional */}
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg mb-4">For Traditional Conference Visa</h3>
                                <ol className="space-y-3">
                                    {[
                                        'Locate the nearest Indian Embassy or Consulate in your country.',
                                        <>Download and complete the visa application form from <a href="https://indianvisaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium underline">indianvisaonline.gov.in</a></>,
                                        'Submit your application along with the required documents in person or via mail.',
                                        'Pay the visa fee as per embassy guidelines.',
                                        'Visa processing typically takes 2–3 weeks.',
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-7 h-7 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                                            <span className="text-slate-700 text-base pt-0.5">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Processing Times */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
                            <div className="text-3xl font-black text-blue-700 mb-1">3–5 Days</div>
                            <p className="text-slate-600 text-sm font-medium">e-Conference Visa Processing</p>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                            <div className="text-3xl font-black text-slate-800 mb-1">2–3 Weeks</div>
                            <p className="text-slate-600 text-sm font-medium">Traditional Conference Visa Processing</p>
                        </div>
                    </div>

                    {/* Important Note */}
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                        <h3 className="font-bold text-amber-900 text-lg mb-2">⚠️ Apply Early!</h3>
                        <p className="text-amber-800 text-base leading-relaxed">
                            We strongly recommend applying for your visa at least <strong>8–10 weeks</strong> before the conference dates (October 23-25, 2026) to account for processing delays. For any assistance, contact us at{' '}
                            <a href="mailto:icgst2026@iiitm.ac.in" className="font-semibold underline">icgst2026@iiitm.ac.in</a>.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
