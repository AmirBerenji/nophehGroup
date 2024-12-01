import Image from "next/image";
import TopMenu from "../component/topmenu";
import BannerMainPage from "../component/banner";

import { Card } from "flowbite-react";

export default async function Home() {
  return (
    <>
      <TopMenu />

      <BannerMainPage />

      <section className="flex bg-[#fefefe] py-10 ">
        <div className="container grid grid-cols-2 ">
          <div className="p-10 w-full col-span-1 ">
            <div className="col-span-1 lg:col-span-2 items-center flex-1 lg:px-28">
              <h2 className="font-bold text-2xl text-gray-800">
                Captivate your audience
              </h2>
              <p className="text-justify text-lg mt-5 text-gray-700">
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

      <section className="bg-gray-200 grid grid-cols-3 space-x-7 p-9">
        <div className="flex justify-center items-center">
          <div className="w-5/6 h-96 bg-slate-50 border rounded-lg">
            <div className="w-full h-3/5 ">
              <Image
                src="/assets/brandphotography.jpeg"
                alt="Photography"
                className="w-full h-full object-cover rounded-t-lg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="p-5 ">
              <h1 className="text-2xl font-bold" >
                Brand photography
              </h1>
              <p>
                Transform your brand with stunning visual that tell your story.
              </p>
            </div>
          </div>
        </div>




        <div className="flex justify-center items-center">
          <div className="w-5/6 h-96 bg-slate-50 border rounded-lg">
            <div className="w-full h-3/5 ">
              <Image
                src="/assets/socialmedia.jpeg"
                alt="Photography"
                className="w-full h-full object-cover rounded-t-lg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="p-5 ">
              <h1 className="text-2xl font-bold" >
              Social media content creation
              </h1>
              <p>
              Engage your audience with visually striking social media content.
              </p>
            </div>
          </div>
        </div>





        <div className="flex justify-center items-center">
          <div className="w-5/6 h-96 bg-slate-50 border rounded-lg">
            <div className="w-full h-3/5 ">
              <Image
                src="/assets/marketing.jpeg"
                alt="Photography"
                className="w-full h-full object-cover rounded-t-lg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="p-5 ">
              <h1 className="text-2xl font-bold" >
              Marketing strategy consultation
              </h1>
              <p>
              Unlock your brans potential with tailord marketing strategies.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center items-center">
       
        </div>
        <div className="flex justify-center items-center">
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={300}
                height={300}
                src="/assets/marketing.jpeg"
                alt="Marketing"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Marketing strategy consultation
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Unlock your brans potential with tailord marketing strategies.
            </p>
          </Card>
        </div> */}
      </section>

      {/* <Footer container>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Image src="/assets/logo.png" alt="logo" width={200} height={100} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Nopheh Group" year={2022} />
      </div>
    </Footer> */}
    </>
  );
}
