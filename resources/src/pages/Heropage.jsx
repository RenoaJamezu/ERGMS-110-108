export const Heropage = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center py-32">
        <h1 className="text-[60px] font-bold px-80 text-white">
          Take your business to the{" "}
          <span className="text-primaryColor">next level.</span>
        </h1>
        <p className="text-primaryColor mb-12 px-56">
          Thinking of starting or expanding your business? Look no further than the
          <i> Caraga State Universitys </i>office of <span className="font-semibold">Resource Generation Management
          Services (RGMS).</span>
        </p>
        <button className="bg-white text-black py-2 px-10 rounded-lg shadow hover:bg-secondaryColor transition-colors">
          Get Started
        </button>
      </div>
    </>
  );
};