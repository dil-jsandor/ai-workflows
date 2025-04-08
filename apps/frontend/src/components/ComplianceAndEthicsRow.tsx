export default function ComplianceAndEthicsRow() {
  return (
    <div
      id="risk-and-strategy-row"
      className="w-full px-[40px] flex flex-col gap-y-[28px]"
    >
      <span className="text-[26px] text font-semibold">
        Compliance & <span className="text-red-700">Ethics</span>
      </span>
        <div className="gap-[16px] flex w-full flex-wrap">
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M9.70095 35.8336C8.61907 35.8336 7.70402 35.4595 6.95583 34.7112C6.20761 33.9631 5.8335 33.048 5.8335 31.9661V26.8593H10.8335V4.16699H34.1667V21.1872C33.8384 21.0868 33.4979 21.0096 33.1454 20.9554C32.7928 20.9013 32.4353 20.8628 32.0728 20.84V6.26095H12.9275V26.8593H23.0482C22.9186 27.1876 22.8086 27.5254 22.7181 27.8726C22.6276 28.2198 22.5603 28.58 22.5162 28.9532H7.92745V31.9661C7.92745 32.4682 8.09751 32.8893 8.43762 33.2295C8.77773 33.5696 9.18959 33.7396 9.6732 33.7396H23.1102C23.2683 34.1356 23.4611 34.5072 23.6887 34.8544C23.9163 35.2016 24.1621 35.528 24.4264 35.8336H9.70095ZM15.3207 13.6755V11.5815H29.6796V13.6755H15.3207ZM15.3207 18.4831V16.3892H29.6796V18.4831H15.3207ZM23.1102 33.7396H7.92745H22.5162H22.4328H23.1102Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M28.2325 33.1672V29.2679H29.5197V33.1672H28.2325ZM31.5819 33.1672V29.2679H32.8567V33.1672H31.5819ZM26.9952 34.8544V33.3797H37.4434V34.8544H26.9952ZM34.9188 33.1672V29.2679H36.2061V33.1672H34.9188ZM26.9952 29.0429V27.1557L32.2193 24.5437L37.4434 27.1557V29.0429H26.9952ZM29.4823 27.5682H34.9563L32.2193 26.2059L29.4823 27.5682Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Compliance Maps</span>
            </div>
        </div>
    </div>
  );
}
