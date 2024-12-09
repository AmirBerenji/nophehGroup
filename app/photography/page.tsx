import Image from "next/image";

export default function PhotographyPage() {
  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/brandphotography.jpeg"
              alt="Photography"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-5 text-center lg:text-left">
              Brand Photography
            </h2>
            <p className="text-sm sm:text-base text-justify lg:text-justify leading-relaxed">
              Create a lasting impression with captivating brand photography
              that resonates with your audience. Our expert photographers
              specialize in capturing the essence of your brand, highlighting
              its unique personality and values. With a keen eye for detail and
              a commitment to excellence, we ensure every image reflects your
              brand’s identity. From lifestyle shoots to product showcases, we
              tailor each session to meet your specific needs. Stand out in the
              crowded marketplace and let your visuals do the talking.
              Experience the power of professional photography and elevate your
              brand&apos;s image today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
