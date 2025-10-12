export default function PhotographyPage() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/brandphotography.jpg"
                alt="Photography"
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-5 text-center lg:text-left">
                Brand Photography
              </h2>
              <p className="text-sm sm:text-base text-justify lg:text-justify leading-relaxed">
                Make Your Brand Unforgettable with Professional Photography!
                <br />
                Our team specializes in brand, event, real estate, interior
                design, food, and product photography. We capture the true
                essence of your brand, creating images that build trust and
                attract attention. From details to final composition, every
                photo reflects your brand&apos;s quality and personality. Stand
                out with professional visuals and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/brandphotography.jpg"
            alt="Photography Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Product Photography */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Product Photography
              </h3>
              <p className="text-gray-200 text-justify leading-relaxed">
                Showcase your products in the best light with high-quality
                images that highlight every detail. Perfect for e-commerce,
                catalogs, and marketing materials.
              </p>
            </div>

            {/* Property Photography */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Property Photography
              </h3>
              <p className="text-gray-200 text-justify leading-relaxed">
                Capture the beauty and potential of real estate with stunning
                interior and exterior shots that help properties stand out and
                sell faster.
              </p>
            </div>

            {/* Event Photography */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Event Photography
              </h3>
              <p className="text-gray-200 text-justify leading-relaxed">
                Preserve unforgettable moments from your special events with
                professional coverage that captures the emotion, energy, and
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
