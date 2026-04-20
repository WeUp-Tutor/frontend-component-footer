import React from "react";

const CustomFooter: React.FC = () => (
    <div className="footer-top">
        <div className="powered-area">
            <ul className="logo-list">
                <li>Powered by</li>
                <li>
                    <a href="https://weuplearning.com" rel="noreferrer" target="_blank">
                        <img
                            src="https://weuplearning.com/wp-content/uploads/2022/12/logoBlanc-300x104.png"
                            alt="WeUp Learning"
                            width="57"
                        />
                    </a>
                </li>
            </ul>
        </div>
        <nav className="nav-colophon">
            <ol>
                <li><a href="https://tutor-cyril.weup.in/tos">CGU</a></li>
                <li><a href="https://tutor-cyril.weup.in/privacy">Politique de confidentialité</a></li>
                <li><a href="https://tutor-cyril.weup.in/contact">Contact</a></li>
            </ol>
        </nav>
    </div>
);

export default CustomFooter;
