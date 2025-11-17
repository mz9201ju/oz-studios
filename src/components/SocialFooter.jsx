// src/components/SocialFooter.jsx
import React from "react";
import "./SocialFooter.css"; // we will create this file next

export default function SocialFooter() {
    const links = {
        github: "https://github.com/mz9201ju",
        linkedin: "https://www.linkedin.com/in/omer-zahid-developer/",
        youtube: "https://www.youtube.com/@AbuvYousuf",
        facebook: "https://www.facebook.com/abuyousufdeveloper",
        email: "info@omerzahid.com",
        instagram: "https://instagram.com/abuyousufdeveloper",
        coffee: "https://www.buymeacoffee.com/omerzahid",
    };

    return (
        <footer className="social-footer">
            <div className="social-links">

                <a href={links.github} className="social-button github" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a href={links.linkedin} className="social-button linkedin" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href={links.youtube} className="social-button youtube" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                <a href={links.facebook} className="social-button facebook" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href={`mailto:${links.email}`} className="social-button email">
                    <i className="fa-solid fa-envelope"></i>
                </a>

                <a href={links.instagram} className="social-button instagram" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>

            </div>

            <div className="buy-coffee-container">
                <a href={links.coffee} target="_blank" className="buy-coffee-btn">
                    <img
                        src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                        alt="Buy Me a Coffee"
                    />
                </a>
            </div>

            <p className="copyright">
                © {new Date().getFullYear()} OZ · IT STUDIOS — Built by Omer Zahid
            </p>
        </footer>
    );
}
