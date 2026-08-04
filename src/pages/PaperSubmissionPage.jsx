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
                <div className="max-w-4xl mx-auto px-4 prose prose-slate prose-blue lg:prose-lg mt-8">
                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mb-4">Submission Guidelines</h3>
                    <ul className="text-slate-700 list-disc pl-6">
                        <li><strong>Page limit:</strong> Maximum of <strong>6 pages</strong> (10-point, IEEE two-column), including figures, tables, and references.</li>
                        <li><strong>Originality:</strong> Only original work not published or under review elsewhere will be considered.</li>
                        <li><strong>Author list:</strong> Ensure all co-authors and affiliations are correctly listed at initial submission.</li>
                        <li><strong>Format:</strong> Use the latest IEEE conference template.</li>
                        <li><strong>Presentation:</strong> Registered papers must be presented at the conference for Online Publication.</li>
                        <li><strong>Review:</strong> Single-blind review. Papers with poor quality or a high similarity index may be desk rejected.</li>
                    </ul>
                    <hr className="my-8 border-slate-200" />

                    <p>
                        Prospective authors are invited to submit original technical papers to ICGST-2026. Submissions must follow the standard IEEE conference template and be written in English.
                        The extended version of the selected papers may be considered for publication in the journal post-evaluation.
                    </p>

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
                            <p className="text-slate-600 text-sm mb-4">
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
                            <ul className="text-slate-600 text-sm space-y-2 m-0 p-0 list-none">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span>Paper Submission: <strong className="text-slate-900">August 31, 2026</strong></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span>Acceptance Notification: <strong className="text-slate-900">Starts from August 25, 2026</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mt-8 mb-4">Camera-Ready (After Acceptance)</h3>
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

                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mt-8 mb-4">Review Process</h3>
                    <p>
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. All papers go through a rigorous, single-blind reviewing process.
                    </p>
                    <p>
                        At least one author of an accepted paper will have to register at the conference in order to submit the final version. All accepted papers presented at the conference will be published in the conference proceeding and submitted to the Conference website for publication subject to their norms. They should satisfy the requirements given in the publication policy.
                    </p>
                    <p>
                        The <strong>conference electronic copyright form (ECF)</strong> must be completed as instructed in CMT.
                    </p>

                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mt-8 mb-4 inline-block">Conference Committee Policies</h3>
                    <p>
                        Conference Committee reserves the right to exclude a paper from distribution after the conference if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and Conference Committee will take action against any author who has engaged in either practice.
                    </p>

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
