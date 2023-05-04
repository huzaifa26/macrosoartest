import { BiStore } from "react-icons/bi"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { TbReportSearch } from "react-icons/tb"
import { HiOutlineUsers } from "react-icons/hi"
import { BiLogIn } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { CgArrowsExchangeAltV } from "react-icons/cg"
import { BsFilter } from "react-icons/bs"


export default function App() {
  return (
    <div className="w-full min-h-screen grid grid-flow-col auto-cols-max ">
      <div className="w-[15vw] flex flex-col divide-y-2 pb-5">
        <div className="w-[80%] m-auto flex-1">
          <h1 className="font-[700] text-[42px] leading-[40px] text-center pt-[30px]">Pirata</h1>
          <div className="flex flex-col justify-center items-center mt-[40px]">
            <div className="rounded-full w-[110px] overflow-hidden">
              <img src="./profilePic.webp"></img>
            </div>
            <h3 className="font-[700] text-[18px] leading-[32px] mt-2">Karina solis villigran</h3>
            <p className="font-[500] text-[16px] leading-[24px]">Nutriwell</p>
          </div>

          <div className="mt-[70px] grid gap-2">
            <div className="flex justify-start items-center px-8 gap-2 h-12 rounded-lg text-gray-400">
              <BiStore className="text-2xl" />
              <p className="text-xl font-[500]">Stores</p>
            </div>
            <div className="flex justify-start items-center px-8 gap-2 h-12 rounded-lg text-gray-400">
              <MdOutlineProductionQuantityLimits className="text-2xl" />
              <p className="text-xl font-[500]">Products</p>
            </div>
            <div className="flex justify-start items-center px-8 gap-2 h-12 rounded-lg bg-gray-200">
              <TbReportSearch className="text-2xl text-blue-300" />
              <p className="text-xl font-[500]">Reports</p>
            </div>
            <div className="flex justify-start items-center px-8 gap-2 h-12 rounded-lg text-gray-400">
              <HiOutlineUsers className="text-2xl" />
              <p className="text-xl font-[500]">Promotors</p>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center px-8 gap-3 h-14">
          <BiLogIn className="text-2xl" />
          <p className="text-lg font-[500]">Signoff</p>
        </div>
        <div className="flex justify-start items-center px-8 gap-3 h-14">
          <AiOutlineSetting className="text-2xl" />
          <p className="text-lg font-[500]">Setting</p>
        </div>
      </div>

      <div className="w-[85vw] bg-[#47474710] pl-16 pr-32 pt-14">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between grid-cols-1">
              <h3 className="text-[32px] text-blue-500 font-[600]">reports</h3>
              <div className="flex gap-2">
                <div className="relative rounded-full overflow-hidden h-8 flex w-60">
                  <BsSearch className="absolute top-[50%] translate-y-[-50%] left-3"></BsSearch>
                  <input className="indent-8 flex-1 outline-none" placeholder="Search"></input>
                </div>
                <button className="relative rounded-full overflow-hidden h-8 flex justify-center items-center w-52 bg-white text-blue-500">
                  Download Reports
                </button>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow-md divide-y-2">
              <div className="flex justify-between h-16 py-4 items-center">
                <div className="flex gap-2 px-5">
                  <CgArrowsExchangeAltV className="text-4xl text-blue-300 " />
                  <p className="text-gray-300 text-2xl">last added</p>
                </div>
                <div className="rounded-full bg-gray-100 p-2">
                  <BsFilter className="text-2xl" />
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Juan Perez Sanchez</p>
                </div>

                <div className="flex gap-3">
                  <div className="space-x-2">
                    <button className="w-20 bg-blue-200 text-blue-400 text-left px-2 py-1 rounded-full">Bell</button>
                    <button className="w-44 bg-green-200 text-green-400 text-left px-2 py-1 rounded-full">2 additional exhibit</button>
                  </div>
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5 bg-green-100">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Luraco Doloros Lopez</p>
                </div>

                <div className="flex gap-3">
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Luraco Doloros Lopez</p>
                </div>

                <div className="flex gap-3">
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Luraco Doloros Lopez</p>
                </div>

                <div className="flex gap-3">
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Luraco Doloros Lopez</p>
                </div>

                <div className="flex gap-3">
                  <div>
                    <button className="w-40 bg-red-200 text-red-400 text-left px-3 py-1 rounded-full">lost product</button>
                  </div>
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>

              <div className="flex justify-between h-24 items-center px-5">
                <div>
                  <p className="font-[700] text-[16px]">Visit ID: 2089597</p>
                  <p className="font-[400] text-[16px]">Promotor: Luraco Doloros Lopez</p>
                </div>

                <div className="flex gap-3">
                  <p className="text-sm">10/02/2023</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-md divide-y-2">
              <h3 className="px-4 py-2 font-[700] text-[18px]">image of evidence</h3>
              <div className="hide-bar max-w-full">
                <div className="flex w-full gap-2 px-3 pt-4 overflow-y-hide">

                  {[0, 1, 2, 2].map(() =>
                    <div className="w-[180px] h-[150px] bg-gray-500"></div>
                  )}

                </div>
                <div className="px-7 pt-4 ">
                  <h3 className="px-4 py-2 font-[700] text-[18px]">Additional exhibits</h3>

                  <div className="flex w-full gap-2 overflow-y-hide">
                    {[0, 1, 2, 2].map(() =>
                      <div className="w-[180px] h-[150px] bg-gray-500"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="grid-cols-1 flex flex-col gap-4 mt-3">
            <div className="flex gap-2 h-8 items-center">
              <button className="py-2 px-6 text-white rounded-full bg-blue-500 ">Inventory</button>
              <button className="py-2 px-6 bg-white rounded-full">Shortage</button>
              <button className="py-2 px-6 bg-white rounded-full">On Inventory</button>
              <button className="py-2 px-6 bg-white rounded-full w-24">Lost</button>
            </div>

            <table className="table-auto border-collapse border border-slate-500 w-full bg-white rounded-lg shadow-md mt-3">
              <thead>
                <th className="border-[2px] border-[#47474720] px-4">SKU</th>
                <th className="border-[2px] border-[#47474720] px-2">Product</th>
                <th className="border-[2px] border-[#47474720] px-2">Inventory System</th>
                <th className="border-[2px] border-[#47474720] px-2">Inventory Store</th>
                <th className="border-[2px] border-[#47474720] px-2">Inventory Shell</th>
                <th className="border-[2px] border-[#47474720] px-2">Inventory total physical</th>
                <th className="border-[2px] border-[#47474720] px-2">Ammount adjusted</th>
                <th className="border-[2px] border-[#47474720] px-2">Price</th>
              </thead>
              <tbody>
                <tr>
                  <td className="border-[2px] border-[#47474720] px-4">15254667</td>
                  <td className="border-[2px] border-[#47474720] px-4">amaranth popcorn flax</td>
                  <td className="border-[2px] border-[#47474720] text-center">10</td>
                  <td className="border-[2px] border-[#47474720] text-center">9</td>
                  <td className="border-[2px] border-[#47474720] text-center">15</td>
                  <td className="border-[2px] border-[#47474720] text-center">35</td>
                  <td className="border-[2px] border-[#47474720] text-center">34</td>
                  <td className="border-[2px] border-[#47474720] text-center">$27.00</td>
                </tr>
                <tr>
                  <td className="border-[2px] border-[#47474720] px-4">15254667</td>
                  <td className="border-[2px] border-[#47474720] px-4">amaranth popcorn flax</td>
                  <td className="border-[2px] border-[#47474720] text-center">10</td>
                  <td className="border-[2px] border-[#47474720] text-center">9</td>
                  <td className="border-[2px] border-[#47474720] text-center">15</td>
                  <td className="border-[2px] border-[#47474720] text-center">35</td>
                  <td className="border-[2px] border-[#47474720] text-center">34</td>
                  <td className="border-[2px] border-[#47474720] text-center">$27.00</td>
                </tr>
                <tr>
                  <td className="border-[2px] border-[#47474720] px-4">15254667</td>
                  <td className="border-[2px] border-[#47474720] px-4">amaranth popcorn flax</td>
                  <td className="border-[2px] border-[#47474720] text-center">10</td>
                  <td className="border-[2px] border-[#47474720] text-center">9</td>
                  <td className="border-[2px] border-[#47474720] text-center">15</td>
                  <td className="border-[2px] border-[#47474720] text-center">35</td>
                  <td className="border-[2px] border-[#47474720] text-center">34</td>
                  <td className="border-[2px] border-[#47474720] text-center">$27.00</td>
                </tr>
                <tr>
                  <td className="border-[2px] border-[#47474720] px-4">15254667</td>
                  <td className="border-[2px] border-[#47474720] px-4">amaranth popcorn flax</td>
                  <td className="border-[2px] border-[#47474720] text-center">10</td>
                  <td className="border-[2px] border-[#47474720] text-center">9</td>
                  <td className="border-[2px] border-[#47474720] text-center">15</td>
                  <td className="border-[2px] border-[#47474720] text-center">35</td>
                  <td className="border-[2px] border-[#47474720] text-center">34</td>
                  <td className="border-[2px] border-[#47474720] text-center">$27.00</td>
                </tr>
              </tbody>
            </table>

            <div className="w-full bg-white rounded-lg shadow-md mt-3 min-h-[150px] px-8 py-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-[700] text-[24px]">Store</h3>
                  <p className="font-[400] text-[18px]">Av. Jose Martyar no. 38 Local A, Region 1, Agusascalientes</p>
                </div>
                <p className="text-[16px]">10/02/2023</p>
              </div>

              <div className="flex mt-4 gap-4">
                <div className="bg-blue-100 w-32 flex flex-col justify-center items-center rounded-md">
                  <h4 className="text-blue-400 font-[700p]">10:00 a.m</h4>
                  <p>checkin</p>
                </div>
                <div className="bg-blue-100 w-32 flex flex-col justify-center items-center rounded-md">
                  <h4 className="text-blue-400 font-[700p]">10:00 a.m</h4>
                  <p>checkin</p>
                </div>
                <div className="bg-blue-100 w-32 flex flex-col justify-center items-center rounded-md">
                  <h4 className="text-blue-400 font-[700p]">10:00 a.m</h4>
                  <p>checkin</p>
                </div>
                <div className="bg-blue-100 w-32 flex flex-col justify-center items-center rounded-md">
                  <h4 className="text-blue-400 font-[700p]">10:00 a.m</h4>
                  <p>checkin</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-md min-h-[150px] mt-5">

            </div>

            <div className="w-full  min-h-[250px] flex gap-4 mt-2">
              <div className="w-[55%] h-full flex flex-col gap-5">
                <div className="w-full min-h-12 bg-white h-full shadow-md rounded-md">

                </div>
                <button className="h-[80px] w-full bg-[red] text-white font-[600] text-lg rounded-md">NOT APPROVED</button>
              </div>
              <div className="flex-1 h-full flex flex-col gap-5">
                <div className="w-full min-h-12 bg-white h-full shadow-md rounded-md">

                </div>
                <button className="w-full h-[80px] bg-[green] text-white font-[600] text-lg rounded-md">APPROVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}