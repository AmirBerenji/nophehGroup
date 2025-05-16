"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";

const sections = ["home", "about", "service", "contactus"];

export default function TopMenu() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop-180) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white w-full fixed z-[9999]">
      <header className="px-10 py-2">
        <Navbar fluid={true} rounded={false} className="h-auto">
          {/* Brand Logo */}
          <NavbarBrand as={Link} href="#home">
            <div className="flex items-center pl-4 md:pl-10">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-auto h-auto"
              />
            </div>
          </NavbarBrand>

          <NavbarToggle />

          <NavbarCollapse className="pr-4 md:pr-10">
            <div className="flex flex-col md:flex-row md:gap-8 text-center md:text-left">
              <NavbarLink
                href="#home"
                active={activeSection === "home"}
              >
                Home
              </NavbarLink>
              <NavbarLink
                href="#about"
                active={activeSection === "about"}
              >
                About
              </NavbarLink>
              <NavbarLink
                href="#service"
                active={activeSection === "service"}
              >
                Services
              </NavbarLink>
              <NavbarLink
                href="#contactus"
                active={activeSection === "contactus"}
              >
                Contact
              </NavbarLink>
            </div>
          </NavbarCollapse>
        </Navbar>
      </header>
    </div>
  );
}
