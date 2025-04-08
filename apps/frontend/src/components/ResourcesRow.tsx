export default function ResourcesRow() {
  return (
      <div
          id="risk-and-strategy-row"
          className="w-full px-[40px] flex flex-col gap-y-[28px]"
      >
          <span className="text-[26px] text font-semibold">Resources</span>
          <div
              className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                  <path
                      d="M7.92766 12.4847V32.0722H32.0727V12.4847H25.8335V25.2484L20.0002 22.3318L14.1668 25.2484V12.4847H7.92766ZM5.8335 34.1663V10.5788L9.56016 5.83301H30.4072L34.1668 10.6109V34.1663H5.8335ZM8.59516 10.3909H31.3614L29.3493 7.92718H10.6177L8.59516 10.3909ZM16.261 12.4847V21.8488L20.0002 19.9793L23.7393 21.8488V12.4847H16.261Z"
                      fill="currentColor"
                  ></path>
              </svg>
              <span className="font-semibold text-[16px]">Installers</span>
          </div>
      </div>
  );
}
