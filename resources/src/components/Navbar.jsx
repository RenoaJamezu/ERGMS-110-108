export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex flex-wrap items-center justify-between h-[70px] px-10 drop-shadow-lg bg-white">
        <div>
          <img src="../public/images/Logo.png"
            alt="Logo"
            className="w-[114px]"
          />
        </div>
        <ul className="flex gap-10 items-center justify-center ">
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <button className="bg-secondaryColor py-2 px-10 rounded-lg">
            Login
          </button>
        </ul>
      </div>
    </>
  )
}