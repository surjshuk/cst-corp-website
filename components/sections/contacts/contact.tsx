import Link from "next/link";

const inquiries = [
    { type: "General Inquiries", email: "contact@cst-corp.net" },
    { type: "Job Inquiries", email: "hr@cst-corp.net" },
    { type: "PR Inquiries", email: "pr@cst-corp.net" },
];

export const Contact = () => {

    return (
        <div className="p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-10 bg-black text-white" id="contacts">
            {/* Locations Section */}
            <div className="pb-60">
                <h2 className=" mb-3 text-[28px] leading-tight tablet:font-medium tablet:text-5xl">Locations</h2>
                <div className="space-y-6">
                    <div className="flex gap-24 font-medium">
                        <span className="text-sm">India</span>
                        <div className="space-y-1.5">
                            <p className="text-[10px] tablet:text-sm text-primary">R&D center</p>
                            <p className="text-[10px] tablet:text-sm">12210 Bedford St. Houston, TX 77031</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div>
                <h2 className="mb-6 text-[28px] leading-tight tablet:font-medium tablet:text-5xl">Contact us</h2>
                <div className="space-y-4 text-[10px] tablet:text-sm laptop:w-[582px]">
                    <p className="text-[#757575] text-xs tablet:text-sm tablet:font-medium">
                        By sending us an email, you confirm that you have read and agree with the following: <br />
                        In order to respond to you and send relevant information to resolve your inquiry, we and our trusted service providers may collect your personal data.
                    </p>
                    <p className="text-[#757575] text-xs tablet:text-sm tablet:font-medium">
                        Your personal data will be securely stored for a period of time in line with legal and regulatory requirements depending on the nature of your inquiry. To find out more about your rights and our privacy practices, please refer to our {" "}
                        <Link
                            href="/privary-policy"
                            className="text-[#0892D0] hover:underline">
                            Privacy Policy.
                        </Link>
                    </p>
                </div>
            </div>

            {/* Inquiries Section */}
            <div className="mt-12 flex flex-col gap-6 justify-between w-4/6 tablet:gap-10 laptop:gap-[138px] laptop:flex-row">
                {inquiries.map((inquiry, index) => (
                    <div key={index} className="">
                        <p className="text-xs tablet:text-sm">{inquiry.type}</p>
                        <p>
                            <Link
                                href={`mailto:${inquiry.email}`}
                                className="text-[#0892D0] text-[16px] tablet:text-2xl"
                            >
                                {inquiry.email}
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};