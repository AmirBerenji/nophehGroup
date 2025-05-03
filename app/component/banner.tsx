export default function BannerMainPage() {
  return (
    <section className="h-screen w-full bg-transparent flex flex-col justify-center items-center text-center md:text-left">
      <div className="text-slate-100 px-6 md:px-20 lg:px-56">
        <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl">
          <span className=" text-4xl md:text-6xl lg:text-7xl ml-3  text-[#209EBB]">
            NOFEH
          </span>
          <span className="ml-2 text-xl md:text-2xl lg:text-4xl text-[#fc8500]">
            Code Studio
          </span>
        </h2>
        <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-[#fc8500]">
          Where code feels and images speak
        </p>
      </div>
    </section>
  );
}
