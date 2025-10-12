import Image from "next/image";

export default function PhotographyPage() {
  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/brandphotography.jpg"
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
              Make Your Brand Unforgettable with Professional Photography!
              <br></br>
              Our team specializes in brand, event, real estate, interior
              design, food, and product photography. We capture the true essence
              of your brand, creating images that build trust and attract
              attention. From details to final composition, every photo reflects
              your brand&apos;s quality and personality. Stand out with
              professional visuals and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
