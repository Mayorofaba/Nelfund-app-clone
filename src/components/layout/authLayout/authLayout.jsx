import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      {/* header */}

      <div className="w-full items-center p-5 flex justify-between bg-white">
        <div>
          <Link to="/dashboard/home">
            <img
              src="https://portal.nelf.gov.ng/assets/NELFUND_Logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        {/* header right */}

        <div>
          <h1 className="text-center text-gray-700 text-sm">
            Having Troubles?{" "}
            <span className="text-green-800 font-semibold ">Get Help</span>
          </h1>
        </div>
      </div>

      {/* layout */}

      <div className=" overflow-y-auto h-screen grid xl:grid-cols-2 grid-cols-1  bg-[#f3f4f8] w-full  overflow-hidden">
        <div className="  w-full  ">
          <Outlet />
        </div>
        <div className="hidden xl:block bg-green-600 col-span-1 ">
          <img
            src="https://portal.nelf.gov.ng/_next/static/media/girlPhoneSides.44dfe52f.svg"
            alt="Login"
            className={
              " w-90vw border-b-green-600 shadow-green-600 aspect-auto"
            }
          />
        </div>
      </div>
    </>
  );
}
