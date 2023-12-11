export const Farminfo = () => {
  return (
    <>
      <div className="h-screen w-sceen flex justify-center items-center">
        <div className="flex flex-col w-[1000px] h-[500px] rounded-lg border bg-gradient-to-b from-secondaryColor to-stone-100 shadow-lg text-center items-center border-black">
          <h1 className="font-bold text-xl text-primaryColor pt-10">Farm Rental</h1>
          <p className="px-10 py-3 text-primaryColor">Utilize our fertile agricultural land for farming or agribusiness ventures. We offer competitive rates and flexible terms to help you grow your crop or livestock.</p>
          <img
          src=".\public\images\Farm-2.png"
          alt="Farm-2"
          className="w-[350px] mix-blend-darken"/>
        </div>
      </div>
    </>
  )
}