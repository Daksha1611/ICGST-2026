import { feeStructure, registrationNotes, accountDetails, registrationLink } from '../../data/registrationData';

export default function RegistrationFeeTable() {
    return (
        <div className="space-y-8">
            {/* Fee Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#003366]">
                    <thead>
                        {/* Header Row 1 */}
                        <tr>
                            <th colSpan="5" className="border border-[#003366] p-3 text-center font-bold text-xl" style={{ backgroundColor: '#002855', color: '#ffffff' }}>
                                Registration Charges
                            </th>
                        </tr>
                        {/* Header Row 2 */}
                        <tr>
                            <th rowSpan="2" className="border border-[#003366] p-3 text-center font-bold" style={{ backgroundColor: '#003366', color: '#ffffff' }}>
                                Author&apos;s Category
                            </th>
                            <th colSpan="2" className="border border-[#003366] p-3 text-center font-bold" style={{ backgroundColor: '#003366', color: '#ffffff' }}>
                                Early Bird
                            </th>
                            <th colSpan="2" className="border border-[#003366] p-3 text-center font-bold" style={{ backgroundColor: '#003366', color: '#ffffff' }}>
                                Regular
                            </th>
                        </tr>
                        {/* Header Row 3 */}
                        <tr>
                            <th className="border border-[#003366] p-3 text-center font-bold text-sm" style={{ backgroundColor: '#004c99', color: '#ffffff' }}>Indian (INR)</th>
                            <th className="border border-[#003366] p-3 text-center font-bold text-sm" style={{ backgroundColor: '#004c99', color: '#ffffff' }}>Foreign (USD)</th>
                            <th className="border border-[#003366] p-3 text-center font-bold text-sm" style={{ backgroundColor: '#004c99', color: '#ffffff' }}>Indian (INR)</th>
                            <th className="border border-[#003366] p-3 text-center font-bold text-sm" style={{ backgroundColor: '#004c99', color: '#ffffff' }}>Foreign (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeStructure.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                                <td className="border border-[#003366] p-4 font-semibold text-neutral-900 text-sm">
                                    {row.category}
                                </td>
                                <td className="border border-[#003366] p-4 text-center font-bold text-neutral-800">{row.earlyBirdIndian}</td>
                                <td className="border border-[#003366] p-4 text-center font-bold text-neutral-800">{row.earlyBirdForeign}</td>
                                <td className="border border-[#003366] p-4 text-center font-bold text-neutral-800">{row.regularIndian}</td>
                                <td className="border border-[#003366] p-4 text-center font-bold text-neutral-800">{row.regularForeign}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Notes */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Important Notes</h3>
                <ul className="space-y-2">
                    {registrationNotes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm font-bold text-neutral-900">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                            {note}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Account Details */}
            <div className="bg-white border-2 border-[#003366] rounded-lg p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Account Details</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {accountDetails.map((detail, index) => (
                        <div key={index} className="flex flex-wrap items-baseline gap-2">
                            <dt className="text-base font-semibold text-neutral-600 min-w-[110px]">{detail.label}:</dt>
                            <dd className="text-base font-bold text-neutral-900 tracking-wide">{detail.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Registration Link */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900">Registration Link</h3>
                    <p className="text-base text-neutral-600 mt-1">Complete your registration using the conference registration form.</p>
                </div>
                <a
                    href={registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold !text-white bg-[#002855] hover:bg-[#001a3a] transition-colors whitespace-nowrap shrink-0"
                >
                    Click Here for Registration
                </a>
            </div>

            {/* Registration Instructions */}
            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </span>
                    Registration Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Paper Submission",
                            desc: "Submit your research paper through the conference portal.",
                            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        },
                        {
                            step: "02",
                            title: "Peer Review",
                            desc: "Your paper will undergo peer review by domain experts.",
                            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        },
                        {
                            step: "03",
                            title: "Registration & Payment",
                            desc: "Upon acceptance, complete registration and fee payment.",
                            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        },
                        {
                            step: "04",
                            title: "Confirmation",
                            desc: "Receive your official registration confirmation and receipt.",
                            icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border-b-4 border-b-primary-600">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-black text-primary-100 group-hover:text-primary-200 transition-colors uppercase tracking-widest">
                                        Step {item.step}
                                    </span>
                                </div>
                                <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
