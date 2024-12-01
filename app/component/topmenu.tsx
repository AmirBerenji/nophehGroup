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
    <header className="z-50  ">
    <Navbar fluid rounded className="h-auto">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="pl-40">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={200}
            height={150}
          />
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="pr-24">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  </header>
  )
}
