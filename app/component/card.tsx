import Image from "next/image";
import Link from "next/link";

export default function Card() {
  const data = [
    {
      img: "/assets/brandphotography.jpeg",
      title: "Brand photography",
      description:
        "Transform your brand with stunning visuals that tell your story.",
      linke: "/photography",
    },
    {
      img: "/assets/socialmedia.jpeg",
      title: "Social media content creation",
      description:
        "Engage your audience with visually striking social media content.",
      linke: "/socialmedia",
    },
    {
      img: "/assets/marketing.jpeg",
      title: "Marketing strategy",
      description:
        "Unlock your brand's potential with tailored marketing strategies.",
      linke: "/marketing",
    },
  ];
  return (
    <section
      className="bg-gray-200  w-full"
      id="service"
    >
      <div className="grid md:grid-cols-3 grid-cols-1  gap-1 px-20 py-10" >
        {data.map((item, index) => (
          <Link
            href={item.linke}
            key={index}
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-sm h-auto bg-slate-50 border rounded-lg shadow-md">
                <div className="w-full h-56">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-lg"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className="p-5">
                  <h1 className="text-2xl font-bold">{item.title}</h1>

                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
