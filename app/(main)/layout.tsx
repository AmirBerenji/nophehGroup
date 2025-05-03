export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full fixed object-cover h-screen -z-30 top-0 ">
        <div className="w-full fixed h-screen bg-black opacity-55"></div>
        <img
          src="/assets/background.jpeg"
          className="w-full  object-cover h-screen -z-20  "
          alt="hero 1"
        />
      </div>

      <div className="w-full z-10">{children}</div>
    </>
  );
}
