import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default async function Home() {
  return (
    <>
      <header className="z-50  ">
        
        <Navbar fluid rounded className="h-auto">
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <span className="-mt-5">
            <Image src="/assets/logo.png" alt="logo" width={200} height={150} />
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
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

      <section className="h-screen flex bg-black opacity-55"></section>

      <section className="flex bg-[#fefefe] py-10 ">
        <div className="container grid grid-cols-2 ">
          <div className="p-10 w-full col-span-1 ">
            <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
              <h2 className="font-bold text-xl uppercase">NOPHEH GROUP</h2>
              <p className="text-justify text-lg mt-5">
                Nopheh, based in Yerevan, AM, transforms brands through powerful
                imagery and strategic marketing. Our professional photography
                services showcase your unique story, while our tailored
                marketing strategies ensure your message resonates with your
                target audience. Elevate your brand’s visual identity and
                connect with your customers like never before. Let us help you
                make a lasting impression that drives engagement and growth.
              </p>
            </div>
          </div>
          <div className="overflow-hidden ">
            <Image
              src="/assets/likeboss.jpeg"
              alt="Hero1"
              width="500"
              height="500"
              className=" mt-9 ml-10"
            />
          </div>
        </div>
      </section>

      <section className="flex     bg-yellow-100">
        <div className="h-40 bg-yellow-300" >

        </div>
      </section>

      {/* <section className="w-full border-t-8  py-10  bg-[#eae7e2] h-auto ">
        <div className="container grid grid-cols-2 lg:grid-cols-3 mx-auto px-10 lg:px-40 items-center">
          <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
            <h2 className="font-bold text-xl uppercase">NOPHEH GROUP</h2>
            <p className="text-justify text-lg mt-5">
              Nopheh, based in Yerevan, AM, transforms brands through powerful
              imagery and strategic marketing. Our professional photography
              services showcase your unique story, while our tailored marketing
              strategies ensure your message resonates with your target
              audience. Elevate your brand’s visual identity and connect with
              your customers like never before. Let us help you make a lasting
              impression that drives engagement and growth.
            </p>
          </div>

          <div className="col-span-1">
            <Image
              src="/assets/likeboss.jpeg"
              width="400"
              height="400"
              alt="hero 1"
              className="object-contain scale-150"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
