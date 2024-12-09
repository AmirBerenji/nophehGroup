import Image from "next/image";

export default function MarketinPage() {
  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/marketing.jpeg"
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
              Marketing strategy consultation
            </h2>
            <p className="text-sm sm:text-base lg:text-justifyd leading-relaxed text-justify">
              Navigate the competitive landscape with confidence through our
              comprehensive marketing strategy consultation. We analyze your
              brand’s strengths and weaknesses, providing insights that lead to
              effective marketing solutions. Our experienced consultants work
              closely with you to develop targeted strategies that align with
              your business goals. From identifying your ideal audience to
              optimizing your marketing channels, we guide you every step of the
              way. Empower your brand with data-driven decisions and innovative
              approaches that drive results. Transform your vision into reality
              with a marketing strategy that sets you apart from the
              competition!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
