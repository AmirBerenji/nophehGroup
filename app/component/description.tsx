import Image from "next/image";

export default function Description() {
  return (
    <section className="flex bg-[#fefefe] py-10 text-[#023047] " id="about ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
        {/* Text Content */}
        <div className="p-4 md:p-10 flex flex-col justify-center">
          <h2 className="font-bold text-xl md:text-2xl ">
            Captivate your audience
          </h2>
          <p className="text-justify text-base md:text-lg mt-4 ">
            Nofeh, based in Yerevan, AM, transforms brands through powerful
            imagery and strategic marketing. Our professional photography
            services showcase your unique story, while our tailored marketing
            strategies ensure your message resonates with your target audience.
            Elevate your brand’s visual identity and connect with your customers
            like never before. Let us help you make a lasting impression that
            drives engagement and growth.
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden flex justify-center items-center">
          <Image
            src="/assets/likeboss.jpeg"
            alt="Hero1"
            width={500}
            height={500}
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
