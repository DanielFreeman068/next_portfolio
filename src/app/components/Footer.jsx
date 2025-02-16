import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterTheme({ logoImage, routes, socialLinks, webName, address }) {
    const iconStyle = "w-6 h-6 mx-2 cursor-pointer";

    return (
        <div>
            <footer className="bg-[#33419E] text-white py-12 mt-16 w-full h-64">
                <div className="fcont w-11/12 max-w-5xl mx-auto flex justify-evenly gap-20 px-4 py-8">
                    <div className="links">
                        <h1 className="text-xl mb-4 text-center">Website Links</h1>
                        {routes.home && (
                            <h3 className="text-center text-gray-300 text-base">
                                <a href={routes.home} className="hover:text-blue-400 transition-colors">Home</a>
                            </h3>
                        )}
                        {routes.about && (
                            <h3 className="text-center text-gray-300 text-base">
                                <a href={routes.about} className="hover:text-blue-400 transition-colors">About Me</a>
                            </h3>
                        )}
                        {routes.projects && (
                            <h3 className="text-center text-gray-300 text-base">
                                <a href={routes.projects} className="hover:text-blue-400 transition-colors">Projects</a>
                            </h3>
                        )}
                        {routes.contact && (
                            <h3 className="text-center text-gray-300 text-base">
                                <a href={routes.contact} className="hover:text-blue-400 transition-colors">Contact Us</a>
                            </h3>
                        )}
                        {routes.faqs && (
                            <h3 className="text-center text-gray-300 text-base">
                                <a href={routes.faqs} className="hover:text-blue-400 transition-colors">FAQS</a>
                            </h3>
                        )}
                    </div>

                    <div className="socials">
                        <h1 className="text-xl mb-4 text-center">Social Media</h1>
                        <div className="social-imgs flex justify-center gap-6 mt-4 flex-wrap">
                            {socialLinks?.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaGithub className={`${iconStyle} text-[#181717]`} />
                                </a>
                            )}
                            {socialLinks?.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaXTwitter className={`${iconStyle} text-[#1DA1F2]`} />
                                </a>
                            )}
                            {socialLinks?.linkedIn && (
                                <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaLinkedin className={`${iconStyle} text-[#0077B5]`} />
                                </a>
                            )}
                            {socialLinks?.instagram && (
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaInstagram className={`${iconStyle} text-[#E4405F]`} />
                                </a>
                            )}
                            {socialLinks?.facebook && (
                                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaFacebook className={`${iconStyle} text-[#1877F2]`} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="foot text-center py-6 bg-gray-900 text-gray-300 text-sm">
                    All Rights Reserved | ©2024 {webName}
                </div>
            </footer>
        </div>
    );
}

export default FooterTheme;
