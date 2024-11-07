import React, { useState } from "react";
import headerLogo from "../assets/header/header-logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { TiDownload } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Toggle language dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  // Handle language selection from the dropdown
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown on selection
  };

  // Languages list
  const languages = [
    { code: "lang-en", label: "English" },
    { code: "lang-sq", label: "Albanian - Shqip" },
    { code: "lang-ar", label: "Arabic - العَرَبِيةُ" },
    { code: "lang-bs", label: "Bosnian - Bosanski" },
    { code: "lang-add", label: "Add your language" },
  ];

  return (
    <nav className="bg-[#424242] py-2 text-white">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-32">
        <div className="flex justify-center items-center gap-8">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <img src={headerLogo} alt="Logo" className="h-6" />
          </div>

          {/* Language Dropdown */}
          <div>
            <p
              className="text-xs cursor-pointer bg-[#3b3a3a] px-3 py-1 rounded-sm flex items-center"
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              {selectedLanguage}
              <IoMdArrowDropdown />
            </p>
            {isDropdownOpen && (
              <div className="absolute bg-blue-400 mt-2 w-max z-10">
                <ul className="p-1 space-y-1">
                  {languages.map((language) => (
                    <li key={language.code}>
                      <p
                        className="text-xs px-2 py-1 w-full text-left cursor-pointer"
                        onClick={() => handleLanguageSelect(language.label)}
                      >
                        {language.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sign in Link */}
          <div className="cursor-pointer bg-[#3b3a3a] px-3 py-1 rounded-sm">
            <p className="text-xs">Sign in</p>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex items-center gap-8">
          <div className="flex space-x-3 text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <div>
            <p className="cursor-pointer bg-blue-500 text-white py-1 px-3 rounded text-xs flex items-center">
              <TiDownload className="mr-1" />
              Download Lightshot for free
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
