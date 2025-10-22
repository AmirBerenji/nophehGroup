import React from "react";

export default function ContactUs() {
  return (
    <section
      id="contactus"
      className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pl-5 pr-10">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 text-justify">
              At Nofeh, we&#39;re always here to help with your creative and
              business needs. Whether you&#39;re looking for photography,
              videography, branding, media consultation, or professional
              programming services such as website and mobile app design and
              development .don&#39;t hesitate to connect with us.
              <br></br>
              Our team is passionate about turning your ideas into visual and
              digital stories. Drop us a message or visit us at our studio in
              Armenia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify"></p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6 text-gray-700 text-lg md:pl-20 lg:pl-20 xl:pl-20">
            {/* <div>
    <h3 className="font-semibold text-gray-800 mb-1">📍 Address</h3>
    <p>Armenia, Yerevan, Davetashen 1th, 27/12</p>
  </div> */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">📞 Phone</h3>
              <p>
                <a href="tel:+37495838831">+374 95 838 831</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">✉️ Email</h3>
              <p>
                <a href="mailto:nofehcodestudio@gmail.com">
                  nofehcodestudio@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                🕒 Business Hours
              </h3>
              <p>Mon - Fri: 8:00 AM - 7:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">🌐 Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/share/1CoNkKtDE5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-800 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/nofeh_code_studio/"
                  target="_blank"
                  rel="nofeh code studio instagram"
                  className="text-gray-800 hover:text-pink-800 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/nofeh-code-studio/"
                  target="_blank"
                  rel="nofeh code studio linkedin"
                  className="text-gray-800 hover:text-blue-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
