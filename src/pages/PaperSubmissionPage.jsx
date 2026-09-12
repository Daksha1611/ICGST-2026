import SectionContainer from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';

export default function PaperSubmissionPage() {
    return (
        <div className="pt-16 pb-16">
            <HeroSection
                title="Paper Submission & Camera-Ready"
                subtitle="Everything you need from initial submission to final upload"
                isHomePage={false}
            />
            <SectionContainer background="white">
                <div className="max-w-6xl mx-auto px-4 prose prose-slate prose-blue lg:prose-lg">
                    <p className="text-lg text-slate-600 !mt-0">
                        Prospective authors are invited to submit original technical papers to ICGST-2026. Submissions must follow the standard IEEE conference template and be written in English.
                        The extended version of the selected papers may be considered for publication in the journal post-evaluation.
                    </p>

                    <SectionHeading>Submission Guidelines</SectionHeading>
                    <div className="not-prose grid sm:grid-cols-2 gap-x-8 gap-y-4 my-6">
                        {[
                            { label: 'Page limit', text: <>Maximum of <strong>6 pages</strong> (10-point, IEEE two-column), including figures, tables, and references.</> },
                            { label: 'Originality', text: 'Only original work not published or under review elsewhere will be considered.' },
                            { label: 'Author list', text: 'Ensure all co-authors and affiliations are correctly listed at initial submission.' },
                            { label: 'Format', text: 'Use the latest IEEE conference template.' },
                            { label: 'Presentation', text: 'Registered papers must be presented at the conference for Online Publication.' },
                            { label: 'Review', text: 'Single-blind review. Papers with poor quality or a high similarity index may be desk rejected.' },
                        ].map((rule, index) => (
                            <div key={index} className="flex gap-2.5">
                                <svg className="w-4 h-4 text-primary-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-base text-slate-700 m-0 leading-relaxed"><strong className="text-slate-900">{rule.label}:</strong> {rule.text}</p>
                            </div>
                        ))}
                    </div>

                    <p>
                        By submitting, authors commit that (if accepted) they will prepare a compliant camera-ready version, complete the required copyright steps, and present the work at the conference.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                        <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4">Submission Portal</h3>
                        <p className="text-blue-800 mb-6">
                            For you to be able to access the submission system as an author, reviewer, program committee member, session chair, etc., you need to create an account on Microsoft CMT using the Submit button given below:
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Button href="https://cmt3.research.microsoft.com/ICGST2026/Submission/Index" variant="primary" external>
                                Submit a Paper
                            </Button>
                            <Button to={ROUTES.TRACKS} variant="outline">
                                View Call for Papers
                            </Button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">IEEE Templates</h3>
                            <p className="text-slate-600 text-base mb-4">
                                Please use the latest IEEE conference template for your submission to ensure correct formatting and avoid conversion issues.
                            </p>
                            <div className="flex gap-3">
                                <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4">
                                    Template
                                </a>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Important Deadlines</h3>
                            <ul className="text-slate-600 text-base space-y-2 m-0 p-0 list-none">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span>Paper Submission: <strong className="text-slate-900">September 30, 2026</strong></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span>Acceptance Notification: <strong className="text-slate-900">Starts from August 25, 2026</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <SectionHeading>Camera-Ready (After Acceptance)</SectionHeading>
                    <p className="text-slate-700">
                        If your paper is accepted, prepare the final camera-ready PDF in the IEEE format, address all reviewer comments, and complete the required checks and forms in Microsoft CMT.
                    </p>
                    <div className="not-prose grid gap-4 my-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                            <h4 className="text-base font-bold text-slate-900 m-0">Camera-ready checklist</h4>
                            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-6">
                                <li>IEEE two-column A4 conference format; maximum <strong>6 pages</strong> (unless additional pages are explicitly permitted by the organizers).</li>
                                <li>Address all reviewer comments visible in CMT.</li>
                                <li>Similarity index should be within the conference limits (as announced on CMT / author instructions).</li>
                                <li>Upload the final PDF to CMT with the required naming convention (shown in the camera-ready submission section on CMT).</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                            <h4 className="text-base font-bold text-slate-900 m-0">PDF eXpress & copyright</h4>
                            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-6">
                                <li>Validate the final PDF using <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">IEEE PDF eXpress</a> if required for this conference (details are provided in CMT / author instructions).</li>
                                <li>Complete the conference electronic copyright form (ECF) via the link provided in CMT after uploading the camera-ready PDF.</li>
                            </ul>
                        </div>
                    </div>

                    <SectionHeading>Review Process</SectionHeading>
                    <div className="not-prose grid gap-4 my-6">
                        <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
                            <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold shrink-0">1</span>
                            <p className="text-base text-slate-700 m-0">The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. All papers go through a rigorous, single-blind reviewing process.</p>
                        </div>
                        <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
                            <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold shrink-0">2</span>
                            <p className="text-base text-slate-700 m-0">At least one author of an accepted paper will have to register at the conference in order to submit the final version. All accepted papers presented at the conference will be published in the conference proceeding and submitted to the Conference website for publication subject to their norms. They should satisfy the requirements given in the publication policy.</p>
                        </div>
                        <div className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
                            <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold shrink-0">3</span>
                            <p className="text-base text-slate-700 m-0">The <strong>conference electronic copyright form (ECF)</strong> must be completed as instructed in CMT.</p>
                        </div>
                    </div>

                    <SectionHeading>Conference Committee Policies</SectionHeading>
                    <div className="not-prose bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5 my-6">
                        <p className="text-base text-amber-900 m-0">
                            Conference Committee reserves the right to exclude a paper from distribution after the conference if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and Conference Committee will take action against any author who has engaged in either practice.
                        </p>
                    </div>

                    <div className="mt-12 text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-slate-600 mb-4">
                            For any clarifications regarding the paper submission, please contact us.
                        </p>
                        <Button to={ROUTES.CONTACT} variant="outline">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}

function SectionHeading({ children }) {
    return (
        <h3 className="not-prose text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-primary-100">
            {children}
        </h3>
    );
}
