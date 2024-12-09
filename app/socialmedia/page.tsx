import Image from "next/image";

export default function SocialMediaPage() {
  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/socialmedia.jpeg"
              alt="Photography"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-96 object-cover object-center  rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-5 text-center lg:text-left">
              Social media content creation
            </h2>
            <p className="text-sm sm:text-base text-center lg:text-left leading-relaxed">
              Elevate your social media presence with dynamic content that
              captures attention and drives engagement. Our team crafts visually
              striking images and videos tailored for platforms like Instagram,
              Facebook, and Twitter. By understanding your target audience and
              brand voice, we create content that not only looks great but also
              resonates with your followers. We handle everything from concept
              development to final edits, ensuring your social media feeds are
              as captivating as your brand. Connect, inspire, and grow your
              audience with creative content that makes an impact. Let’s take
              your social media strategy to the next level!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
