import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full fixed object-cover h-screen -z-30 top-0 ">
        <div className="w-full fixed h-screen bg-black opacity-55"></div>

         <Image
                            src="/assets/background.jpeg"
                            alt="Nofeh Code Studio"
                            className="w-full  object-cover h-screen -z-20"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
      </div>

      <div className="w-full z-10">{children}</div>
    </>
  );
}
