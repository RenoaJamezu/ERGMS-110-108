export const Services = () => {
  return (
    <>
      <div className="py-16" id="services">
        <div>
          <h1 className="text-[40px] font-sm pb-10 px-96 text-center font-bold text-primaryColor">
            SERVICES WE OFFER
          </h1>
        </div>
        <div className="flex gap-10 justify-center">
          <div className="bg-yellow-200 w-[250px] h-[350px] rounded-lg border">
            <p className="text-center p-5 text-primaryColor font-bold">
              Farm Rental
            </p>
            <img
              src="../public/images/Farm.png"
              alt="Farm Image"
              className="w-max pt-2"
            />
          </div>
          <div className="bg-yellow-200 w-[250px] h-[350px] rounded-lg border">
            <p className="text-center p-5 text-primaryColor font-bold">
              Stall Renter
            </p>
            <img
              src="../public/images/Stall.png"
              alt="Stall Image"
              className="w-max pt-5"
            />
          </div>
          <div className="bg-yellow-200 w-[250px] h-[350px] rounded-lg border">
            <p className="text-center p-5 text-primaryColor font-bold">
              Mobile Vendor
            </p>
            <img
              src="../public/images/Mobile.png"
              alt="Mobile Image"
              className="w-max"
            />
          </div>
          <div className="bg-yellow-200 w-[250px] h-[350px] rounded-lg border">
            <p className="text-center p-5 text-primaryColor font-bold">
              Product Promotion
            </p>
            <img
              src="../public/images/Promotion.png"
              alt="Promotion Image"
              className="w-max"
            />
          </div>
        </div>
      </div>
    </>
  );
};
