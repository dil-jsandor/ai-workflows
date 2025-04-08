export default function EducationAndCertificationsRow() {
  return (
    <div
      id="risk-and-strategy-row"
      className="w-full px-[40px] flex flex-col gap-y-[28px]"
    >
      <span className="text-[26px] text font-semibold">
        Education & <span className="text-red-700">Certifications</span>
      </span>
        <div className="gap-[16px] flex w-full flex-wrap">
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M19.9828 33.0771L8.94654 27.0515V18.0131L3.39746 15.0003L19.9828 5.96191L36.6023 15.0003V26.9254H34.5084V16.199L31.0191 18.0131V27.0515L19.9828 33.0771ZM19.9828 21.652L32.2125 15.0003L19.9828 8.41054L7.78729 15.0003L19.9828 21.652ZM19.9828 30.699L28.9251 25.81V19.2225L19.9828 24.0357L11.0405 19.1776V25.81L19.9828 30.699Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Diligent Academy</span>
            </div>
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M19.7187 35.1647C19.0314 35.1647 18.4354 34.9838 17.9308 34.622C17.4262 34.2602 17.1126 33.7816 16.9901 33.1861H16.2272C15.6712 33.1861 15.1832 32.9761 14.7632 32.5562C14.3433 32.1362 14.1333 31.6482 14.1333 31.0922V25.6072C12.3505 24.5281 10.9608 23.1129 9.96396 21.3614C8.96715 19.61 8.46875 17.7154 8.46875 15.6777C8.46875 12.541 9.55956 9.88179 11.7412 7.70015C13.9228 5.51854 16.582 4.42773 19.7187 4.42773C22.8554 4.42773 25.5146 5.51854 27.6963 7.70015C29.8779 9.88179 30.9687 12.541 30.9687 15.6777C30.9687 17.7268 30.4709 19.6245 29.4754 21.3707C28.4799 23.1168 27.0895 24.529 25.3041 25.6072V31.0922C25.3041 31.6482 25.0942 32.1362 24.6742 32.5562C24.2542 32.9761 23.7662 33.1861 23.2102 33.1861H22.4473C22.3248 33.7816 22.0112 34.2602 21.5066 34.622C21.002 34.9838 20.406 35.1647 19.7187 35.1647ZM16.2272 31.0922H23.2102V29.3699H16.2272V31.0922ZM16.2272 27.8956H23.2102V26.2353H16.2272V27.8956ZM15.8661 24.1414H18.8662V18.6969L15.2166 15.0473L16.3939 13.87L19.7187 17.2055L23.0435 13.87L24.2208 15.0473L20.5712 18.6969V24.1414H23.5713C25.1539 23.3964 26.4335 22.2651 27.41 20.7477C28.3865 19.2302 28.8747 17.5403 28.8747 15.6778C28.8747 13.1165 27.989 10.9501 26.2176 9.17878C24.4463 7.40739 22.28 6.52169 19.7187 6.52169C17.1575 6.52169 14.9912 7.40739 13.2198 9.17878C11.4484 10.9501 10.5627 13.1165 10.5627 15.6778C10.5627 17.5403 11.051 19.2302 12.0275 20.7477C13.004 22.2651 14.2835 23.3964 15.8661 24.1414Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Diligent Institute</span>
            </div>
        </div>
    </div>
  );
}
