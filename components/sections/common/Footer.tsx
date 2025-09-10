import Link from "next/link";

const socialLinks = [
    
    {
        href: "https://www.linkedin.com/company/cst-corp",
        title: "Linkedin",
        icon: (
            <svg viewBox="0 0 12 12" fill="white" className="w-4 h-4">
                <path d="M2.16 3.38a1.22 1.22 0 1 0 0-2.43 1.22 1.22 0 0 0 0 2.43zm2.36 7.67V4.3h2.01v.93h.03a2.2 2.2 0 0 1 1.98-1.1c2.13 0 2.52 1.4 2.52 3.22v3.7h-2.1V7.77c0-.78-.01-1.79-1.09-1.79-1.09 0-1.26.85-1.26 1.73v3.34zM3.21 4.3H1.1v6.75h2.1z"></path>
            </svg>
        ),  
    },
    
];

export const Footer = () => {
    return (
        <footer className="p-5 tablet:pt-24 tablet:pb-12 tablet:px-7 laptop:px-20">
            <div className="space-y-5 tablet:space-y-20">
                {/* Social Media Links */}
                <div className="flex gap-4 flex-col tablet:flex-row tablet:gap-12">
                    {socialLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href} 
                            title={link.title}
                            className="group flex items-center hover:text-accent transition gap-2"
                        >
                                <div className="bg-black group-hover:bg-primary p-1">{link.icon}</div>
                                <small className="text-secondary">{link.title}</small>
                        </Link>
                    ))}
                </div>
                
                <div className="flex justify-between flex-col tablet:flex-row">
                    {/* Copyright Section */}   
                    <div className="flex-1 text-xs text-secondary">
                            <p>Copyrights © {new Date().getFullYear()} CST CORP LTD.</p>
                    </div>

                    {/* Policies */}
                    <div className="flex-1 flex gap-4 justify-between text-xs mt-5 tablet:justify-center tablet:gap-10 tablet:mt-0">
                        <Link href="/privacy-policy" className="hover:text-black text-secondary">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-use" className="hover:text-black text-secondary">
                            Terms of Use
                        </Link>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
};