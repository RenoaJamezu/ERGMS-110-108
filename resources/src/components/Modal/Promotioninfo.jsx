export const Promotioninfo = () => {
  return (
    <>
      <div className="h-screen w-sceen flex justify-center items-center">
        <div className="flex flex-col w-[1000px] h-[500px] rounded-lg border bg-gradient-to-b from-secondaryColor to-stone-100 shadow-lg text-center items-center border-black">
          <h1 className="font-bold text-xl text-primaryColor pt-10">Product Promotion</h1>
          <img
          src=".\public\images\Promotion-2.png"
          alt="Promotion-2"
          className="w-[450px] mix-blend-darken"/>
          <p className="px-10 py-3 text-primaryColor">Short-term or even long-term product promotion? Showcase your products and services to our vibrant community through strategic marketing campaigns and events. We'll help you reach your target market and build brand awareness.</p>
        </div>
      </div>
    </>
  )
}