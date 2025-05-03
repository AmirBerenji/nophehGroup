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
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Nofeh, we&#39;re always here to help with your creative and
              business needs. Whether you&#39;re looking for photography,
              videography, branding, or media consultation — don&#39;t hesitate
              to connect with us.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team is passionate about turning your ideas into visual
              stories. Drop us a message or visit us at our studio in Madrid.
            </p>
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
                <a href="tel:+37495802393">+374 95 838 831</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">✉️ Email</h3>
              <p>nofehcodestudio@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                🕒 Business Hours
              </h3>
              <p>Mon - Fri: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
