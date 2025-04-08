export default function IssuesAndReportingRow() {
  return (
    <div
      id="risk-and-strategy-row"
      className="w-full px-[40px] flex flex-col gap-y-[28px]"
    >
      <span className="text-[26px] text font-semibold">
        Issues & <span className="text-red-700">Reporting</span>
      </span>
        <div className="gap-[16px] flex w-full flex-wrap">
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M17.4528 25.8818C18.0262 26.4587 18.8176 26.7247 19.8273 26.6799C20.8369 26.635 21.571 26.2646 22.0297 25.5688L30.9164 12.4043L17.799 21.321C17.1038 21.7868 16.729 22.5191 16.6745 23.518C16.62 24.517 16.8794 25.3049 17.4528 25.8818ZM19.9549 7.51758C21.5176 7.51758 23.0434 7.74033 24.5324 8.18583C26.0213 8.63133 27.4695 9.35408 28.8769 10.3541L27.0126 11.6532C25.9058 10.9652 24.7343 10.4529 23.4982 10.1163C22.2621 9.7798 21.0818 9.61154 19.9573 9.61154C16.1581 9.61154 12.9255 10.9558 10.2595 13.6442C7.59348 16.3327 6.26046 19.589 6.26046 23.4133C6.26046 24.621 6.42589 25.8281 6.75675 27.0346C7.08759 28.2411 7.56057 29.3651 8.17571 30.4064H31.7199C32.3474 29.3808 32.8248 28.2497 33.152 27.0132C33.4793 25.7768 33.643 24.536 33.643 23.291C33.643 22.2084 33.4914 21.0561 33.1884 19.8343C32.8853 18.6124 32.3766 17.4826 31.6622 16.4448L32.9955 14.5806C33.9307 16.0457 34.6125 17.4782 35.0409 18.8781C35.4693 20.278 35.7013 21.7056 35.7369 23.1607C35.7654 24.7034 35.6012 26.1537 35.2444 27.5116C34.8875 28.8695 34.3502 30.1756 33.6322 31.4299C33.3936 31.8551 33.113 32.1398 32.7904 32.284C32.4677 32.4282 32.0846 32.5004 31.6408 32.5004H8.25192C7.86637 32.5004 7.49274 32.4021 7.13105 32.2055C6.76935 32.0089 6.48843 31.729 6.2883 31.3657C5.65155 30.2205 5.13873 28.9976 4.74984 27.697C4.36095 26.3964 4.1665 24.9683 4.1665 23.4128C4.1665 21.2355 4.57955 19.1829 5.40563 17.2552C6.23171 15.3276 7.35653 13.6434 8.78009 12.2029C10.2036 10.7624 11.8783 9.62137 13.804 8.77987C15.7297 7.93834 17.78 7.51758 19.9549 7.51758Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Activity Center</span>
            </div>
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M4.1665 33.9633V31.8693H35.8331V33.9633H4.1665ZM5.83317 29.1556V19.1663H9.5938V29.1556H5.83317ZM14.002 29.1556V10.833H17.7626V29.1556H14.002ZM22.2039 29.1556V15.833H25.9645V29.1556H22.2039ZM30.4058 29.1556V5.83301H34.1664V29.1556H30.4058Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Results</span>
            </div>
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M11.8225 22.8469L16.9059 17.7796L20.2392 21.1129L26.7756 14.6022V18.1022H28.8695V11.0083H21.7756V13.1022H25.2756L20.2392 18.1386L16.9059 14.8053L10.3643 21.3886L11.8225 22.8469Z"
                        fill="currentColor"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.11426 27.1199V6.2793H35.7809V27.1199H20.948V29.1416L26.0887 34.2822L24.6745 35.6964L19.9478 30.9698L15.2214 35.6964L13.8071 34.2822L18.948 29.1412V27.1199H4.11426ZM6.11426 8.2793H33.7809V25.1199H6.11426V8.2793Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Storyboards</span>
            </div>
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        d="M4.77876 33.4938L14.3267 20.1606H22.7113L33.91 7.08697V33.4938H4.77876ZM6.11093 24.4864L4.43359 23.2706L11.0564 14.0068H19.4293L27.0511 5.12109L28.6322 6.49393L20.3866 16.1007H12.1034L6.11093 24.4864ZM8.86518 31.3998H31.816V12.7332L23.6408 22.2545H15.3737L8.86518 31.3998Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Reports</span>
            </div>
            <div
                className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-[40px] w-[40px] text-red-700">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.939 5.8335H34.1667V23.2052C33.839 23.1048 33.4996 23.0277 33.1487 22.974C32.7977 22.9202 32.439 22.8876 32.0728 22.8762V7.92745H7.92745V32.0728H22.8762C22.8876 32.439 22.9202 32.7977 22.974 33.1487C23.0277 33.4996 23.1048 33.839 23.2052 34.1667H5.8335V5.8335H6.06129V5.83236H16.3793C16.3785 4.92569 16.7061 4.14347 17.3621 3.48569C18.0181 2.82791 18.8242 2.49902 19.7804 2.49902C20.7366 2.49902 21.5426 2.82791 22.1986 3.48569C22.8546 4.14347 23.1769 4.92569 23.1654 5.83236H33.939V5.8335ZM20.7279 6.70786C20.4604 6.97033 20.1411 7.10157 19.7701 7.10157C19.3991 7.10157 19.0824 6.97033 18.8199 6.70786C18.5574 6.44539 18.4262 6.12612 18.4262 5.75007C18.4262 5.37398 18.5574 5.05472 18.8199 4.79227C19.0824 4.5298 19.3991 4.39857 19.7701 4.39857C20.1411 4.39857 20.4604 4.5298 20.7279 4.79227C20.9954 5.05472 21.1292 5.37398 21.1292 5.75007C21.1292 6.12612 20.9954 6.44539 20.7279 6.70786Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M31.9488 37.7405L30.4905 36.2822L33.7192 32.9958H25.9019V30.9019H33.7192L30.4905 27.6155L31.9488 26.1572L37.7405 31.9488L31.9488 37.7405Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M21.2943 27.6709C21.0512 27.914 20.7561 28.0355 20.4088 28.0355C20.0616 28.0355 19.7683 27.914 19.5288 27.6709C19.2893 27.4279 19.1696 27.1345 19.1696 26.7909C19.1696 26.4472 19.2893 26.1539 19.5288 25.9108C19.7683 25.6678 20.0616 25.5462 20.4088 25.5462C20.7561 25.5462 21.0512 25.6678 21.2943 25.9108C21.5373 26.1539 21.6588 26.4472 21.6588 26.7909C21.6588 27.1345 21.5373 27.4279 21.2943 27.6709Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M19.3448 22.7984H21.4387V12.1702H19.3448V22.7984Z"
                        fill="currentColor"
                    ></path>
                </svg>
                <span className="font-semibold text-[16px]">Issue Tracker</span>
            </div>
        </div>
    </div>
  );
}
