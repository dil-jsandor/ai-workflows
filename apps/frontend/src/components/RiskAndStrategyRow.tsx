export default function RiskAndStrategyRow() {
  return (
    <div
      id="risk-and-strategy-row"
      className="w-full px-[40px] flex flex-col gap-y-[28px]"
    >
      <span className="text-[26px] text font-semibold">
        Risk & <span className="text-red-700">Strategy</span>
      </span>
      <div className="gap-[16px] flex w-full flex-wrap">
        <div className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
            <path
              d="M18.2051 25.1539L27.0897 16.28L25.6175 14.8142L18.267 22.1647L14.391 18.2886L12.8739 19.8057L18.2051 25.1539ZM20 35.7842C16.3839 34.7942 13.3965 32.65 11.0379 29.3516C8.67931 26.0532 7.5 22.389 7.5 18.3591V8.89333L20 4.21387L32.4999 8.89333V18.3591C32.4999 22.389 31.3206 26.0532 28.962 29.3516C26.6034 32.65 23.616 34.7942 20 35.7842ZM20 33.5899C23.0356 32.6091 25.5288 30.6995 27.4797 27.8612C29.4305 25.0229 30.406 21.8555 30.406 18.3591V10.3431L20 6.44028L9.59396 10.3431V18.3591C9.59396 21.8555 10.5694 25.0229 12.5202 27.8612C14.4711 30.6995 16.9643 32.6091 20 33.5899Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="font-semibold text-[16px]">Risk Manager</span>
        </div>
        <div className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
            <path
              d="M16.0662 24.8227L20 21.8633L23.8333 24.7907L22.2905 20.0642L26.2883 17.0835H21.485L20 12.3527L18.5149 17.0835H13.7116L17.626 20.0642L16.0662 24.8227ZM20 35.7842C16.3839 34.7942 13.3965 32.65 11.0379 29.3516C8.67931 26.0532 7.5 22.389 7.5 18.3591V8.89333L20 4.21387L32.4999 8.89333V18.3591C32.4999 22.389 31.3206 26.0532 28.962 29.3516C26.6034 32.65 23.616 34.7942 20 35.7842ZM20 33.5899C23.0356 32.6091 25.5288 30.6995 27.4797 27.8612C29.4305 25.0229 30.406 21.8555 30.406 18.3591V10.3431L20 6.44028L9.59396 10.3431V18.3591C9.59396 21.8555 10.5694 25.0229 12.5202 27.8612C14.4711 30.6995 16.9643 32.6091 20 33.5899Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="font-semibold text-[16px]">Strategy</span>
        </div>
        <div className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.83268 14.0815V35.8336H18.1581V33.7396H7.92664V14.0815H32.072V18.0778H34.1659V14.0815H35.8326V4.16699H4.16602V14.0815H5.83268ZM6.25997 11.9875H33.7386V6.26095H6.25997V11.9875Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.3198 21.982H24.6788V20.0003H15.3198V21.982Z"
              fill="currentColor"
            ></path>
            <path
              d="M19.5332 28.0652L25.8366 34.3686L37.0417 23.1634L35.5502 21.6721L25.8366 31.3857L21.0246 26.5738L19.5332 28.0652Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="font-semibold text-[16px]">Asset Inventory</span>
        </div>
      </div>
    </div>
  );
}