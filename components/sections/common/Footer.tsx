import Link from "next/link";

const socialLinks = [
    {
        href: "https://www.instagram.com/loremcompany",
        title: "Instagram",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
    },
    {
        href: "https://www.linkedin.com/company/lorem-ipsum",
        title: "Linkedin",
        icon: (
            <svg viewBox="0 0 12 12" fill="white" className="w-4 h-4">
                <path d="M2.16 3.38a1.22 1.22 0 1 0 0-2.43 1.22 1.22 0 0 0 0 2.43zm2.36 7.67V4.3h2.01v.93h.03a2.2 2.2 0 0 1 1.98-1.1c2.13 0 2.52 1.4 2.52 3.22v3.7h-2.1V7.77c0-.78-.01-1.79-1.09-1.79-1.09 0-1.26.85-1.26 1.73v3.34zM3.21 4.3H1.1v6.75h2.1z"></path>
            </svg>
        ),  
    },
    {
        href: "https://x.com/lorem_ipsum",
        title: "X",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 256 256" className="w-4 h-4">
                <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
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
                            <p>Copyrights © {new Date().getFullYear()} Lorem Ipsum Ltd. All Rights Reserved.</p>
                    </div>

                    {/* Policies */}
                    <div className="flex-1 flex gap-4 justify-between text-xs mt-5 tablet:justify-center tablet:gap-10 tablet:mt-0">
                        <Link href="" className="hover:text-black text-secondary">
                            Privacy Policy
                        </Link>
                        <Link href="" className="hover:text-black text-secondary">
                            Terms of Use
                        </Link>

                        <Link href="" className="hover:text-black text-secondary">
                            Quality Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};