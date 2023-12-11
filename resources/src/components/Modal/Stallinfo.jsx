export const Stallinfo = () => {
  return (
    <>
      <div className="h-screen w-sceen flex justify-center items-center">
        <div className="flex flex-col w-[1000px] h-[500px] rounded-lg border bg-gradient-to-b from-secondaryColor to-stone-100 shadow-lg text-center items-center border-black">
          <h1 className="font-bold text-xl text-primaryColor pt-10">Stall Renter</h1>
          <p className="px-10 py-3 text-primaryColor">Set up shop at our bustling market stalls and reach a wide range of customers. Sell your products directly to the university community and enjoy a convenient and profitable location.</p>
          <img
          src=".\public\images\Stall-2.png"
          alt="Stall-2"
          className="w-[600px] mix-blend-darken"/>
        </div>
      </div>
    </>
  )
}