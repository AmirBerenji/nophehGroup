"use client";
import React, { useState, useEffect } from 'react';
import { Clock, Rocket } from 'lucide-react';

export default function CommingSoonPage() {
 // const [email, setEmail] = useState('');
 // const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          clearInterval(timer);
          return prev;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const handleSubmit = () => {
  //   if (email) {
  //     setSubscribed(true);
  //     setTimeout(() => {
  //       setEmail('');
  //       setSubscribed(false);
  //     }, 3000);
  //   }
 // };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse bottom-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Logo/Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
            We&apos;re working on something amazing. Stay tuned for the big reveal!
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Launching soon</span>
          </div>
        </div>

        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-base text-gray-600 uppercase tracking-wider ">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Email subscription */}
        {/* <div className="max-w-md mx-auto">
          <div className="bg-gray-50 rounded-2xl p-2 shadow-lg border border-gray-200">
            {!subscribed ? (
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center px-4 py-2">
                  <Mail className="w-5 h-5 text-purple-500 mr-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="Enter your email"
                    className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 w-full"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Notify Me
                </button>
              </div>
            ) : (
              <div className="text-center py-3 text-gray-900 font-semibold">
                ✓ Thanks! We&apos;ll keep you updated
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Be the first to know when we launch
          </p>
        </div> */}

        {/* Social links or additional info */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Have questions? Contact us at{' '}
            <a href="mailto:info@example.com" className="text-purple-600 underline hover:text-pink-600 transition-colors">
              info@example.com
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}