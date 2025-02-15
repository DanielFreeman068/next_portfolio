import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterTheme({ logoImage, routes, socialLinks, webName, address }) {
    const iconStyle = "w-6 h-6 mx-2 cursor-pointer";

    return (
        <div>
            <footer className="bg-[#2C3E50] text-white py-12 mt-16 w-full">
                <div className="fcont w-11/12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
                    <div className="fhead flex flex-col items-center gap-4">
                        {!logoImage ? (
                            <img
                                src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                                alt="logo"
                                className="w-40 max-w-full h-auto"
                            />
                        ) : (
                            <img src={logoImage} alt="logo" className="w-40 max-w-full h-auto" />
                        )}
                        {address && <div className="text-gray-400 text-base text-center">{address}</div>}
                    </div>

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

                <div className="foot text-center py-6 bg-[#243342] text-gray-300 text-sm">
                    <h3 className="topPage">
                        <button
                            onClick={() => window.scrollTo({ top: 0 })}
                            className="bg-transparent border border-transparent text-[#0077B5] text-xl transition-all ease-in-out duration-500 hover:text-[#81ceeb] hover:underline"
                        >
                            Top of Page
                        </button>
                    </h3>
                    All Rights Reserved | ©2024 {webName}
                </div>
            </footer>
        </div>
    );
}

export default FooterTheme;
