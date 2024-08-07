import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#121212]">
        {/* main footer */}
        <MaxWidthWrapper className=" text-white flex flex-col">
          {/* logo */}
          <div className=" font-bold text-[30px] py-10">
            <div className="tex-white !-my-2">FACTORIES</div>
            <div className="-my-2 text-PrimaryOrange">LINK</div>
          </div>

          <div className="justify-between grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-10 pb-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            {/* quick links */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-base text-[#60626C] font-medium mb-4">
                Quick Links
              </h4>
              <ul className="text-sm font-light  transition-all duration-500">
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Return Policy Page
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy Pages
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-base text-[#60626C] font-medium mb-4">
                Contacts
              </h4>
              <ul className="text-sm font-light  transition-all duration-500">
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Return Policy Page
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy Pages
                  </a>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-base text-[#60626C] font-medium mb-4">
                My Account
              </h4>
              <ul className="text-sm font-light  transition-all duration-500">
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Return Policy Page
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy Pages
                  </a>
                </li>
              </ul>
            </div>

            {/* seller */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-base text-[#60626C] font-medium mb-4">
                Seller Zone
              </h4>
              <ul className="text-sm font-light  transition-all duration-500">
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Return Policy Page
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Seller Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-200 ">
                    Support Policy Pages
                  </a>
                </li>
              </ul>
            </div>

            {/* social links and subscribe */}
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <h4 className="text-base text-[#60626C] font-medium mb-2">
                SUBSCRIBE
              </h4>
              <p className="text-sm font-light mb-2">
                Subscribe to our newsletter for regular updates about Offers,
                Producs & more.
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent block w-full px-4 py-2 border border-white rounded-md shadow-sm focus:outline-none  text-white placeholder-white"
                placeholder="Enter your email"
              />

              <button className="mt-3 px-4 py-2 bg-PrimaryOrange rounded-md shadow-sm text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* lower footer */}
        </MaxWidthWrapper>
        <div className="py-4 bg-[#2A2A2A]">
          <MaxWidthWrapper className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white ">
              <Link href="/">Factories Link</Link> {new Date().getFullYear()} ,
              All rights reserved.
            </span>
            <span>
              <Link href="/terms" className="text-sm text-[#737682] me-5">
                terms
              </Link>
              <Link href="/privacy-policy" className="text-sm text-[#737682]">
                privacy
              </Link>
            </span>
          </MaxWidthWrapper>
        </div>
      </footer>
    </>
  );
};

export default Footer;
