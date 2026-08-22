import Image from "next/image";

export default function Description() {
  return (
    <section className="bg-[#fefefe] py-16 sm:py-20 text-[#023047]" id="about">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 items-center">
        {/* Text Content */}
        <div className="p-4 md:p-10 flex flex-col justify-center ml-0 md:ml-10 ">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#209EBB]">
            About us
          </h2>
          <h3 className="mt-2 font-bold text-xl md:text-2xl">
            Captivate your audience
          </h3>
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
            src="/assets/likeboss.jpg"
            alt="Hero1"
            width={500}
            height={500}
            className=" w-full md:w-3/5 h-auto max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl "
          />
        </div>
      </div>
    </section>
  );
}
