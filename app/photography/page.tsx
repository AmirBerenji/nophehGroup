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
      <section className="relative py-20 sm:py-28 lg:py-12">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img
            src="/assets/brandphotography.jpg"
            alt="Photography Background"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gray-200"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mx-auto px-20 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Product Photography */}

            <div
              className="relative min-h-80 bg-white 
            bg-opacity-10 backdrop-blur-sm 
            rounded-lg p-8 hover:bg-opacity-20 transition-all 
            duration-300 border border-white border-opacity-20 overflow-hidden"
            >
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="/assets/product.jpg"
                  alt="Photography Background"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-end">
                <h3 className="text-2xl font-bold text-white mb-4 text-center w-full">
                  Product Photography
                </h3>
              </div>
            </div>
            <div className="relative min-h-56 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 overflow-hidden">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="/assets/property.jpg"
                  alt="Photography Background"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-end">
                <h3 className="text-2xl font-bold text-white mb-4 text-center w-full">
                  Product Photography
                </h3>
              </div>
            </div>

            <div className="relative min-h-56 bg-white bg-opacity-40 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 overflow-hidden">
              {/* Background Image with Opacity */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="/assets/events.jpg"
                  alt="Photography Background"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-end">
                <h3 className="text-2xl font-bold text-white mb-4 text-center w-full">
                  Events Photography
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
