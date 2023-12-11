export const Mobileinfo = () => {
  return (
    <>
      <div className="h-screen w-sceen flex justify-center items-center">
        <div className="flex flex-col w-[1000px] h-[500px] rounded-lg border bg-gradient-to-b from-secondaryColor to-stone-100 shadow-lg text-center items-center border-black">
          <h1 className="font-bold text-xl text-primaryColor pt-10">Mobile Vendor</h1>
          <img
          src=".\public\images\Mobile-2.png"
          alt="Mobile-2"
          className="w-[325px] mix-blend-darken"/>
          <p className="px-10 py-3 text-primaryColor">Take your business on the go! We issue permits for mobile vendors to operate within designated areas on campus, allowing you to reach customers wherever they are.</p>
        </div>
      </div>
    </>
  )
}