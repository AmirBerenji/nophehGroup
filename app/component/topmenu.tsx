import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function TopMenu() {
  return (

<header className="z-50">
  <Navbar fluid={true} rounded={false} className="h-auto">
    {/* Brand Logo */}
    <NavbarBrand as={Link} href="#">
      <div className="flex items-center pl-4 md:pl-10">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={150}
          height={100}
          className="w-auto h-auto"
        />
      </div>
    </NavbarBrand>

    {/* Navbar Toggle */}
    <NavbarToggle />

    {/* Navbar Links */}
    <NavbarCollapse className="pr-4 md:pr-10">
      <div className="flex flex-col md:flex-row md:gap-8 text-center md:text-left">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#about">
          About
        </NavbarLink>
        <NavbarLink href="#service">Services</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </div>
    </NavbarCollapse>
  </Navbar>
</header>



  )
}
