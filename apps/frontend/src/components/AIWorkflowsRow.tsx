import { Link } from "react-router-dom";

export default function AIWorkflowsRow() {
    return (
        <div
            id="ai-workflows-row"
            className="w-full px-[40px] flex flex-col gap-y-[28px]"
        >
            <span className="text-[26px] text font-semibold">Workflow</span>
            <Link to="/workflows">
                <div
                    className="w-[189px] h-[140px] border-gray-200 border rounded-md bg-white shrink-0 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                    <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="h-[40px] w-[40px] text-red-700">
                        <path
                            d="M6.75126 25.5938C5.89226 25.5938 5.16167 25.293 4.55951 24.6917C3.95736 24.0904 3.65628 23.3603 3.65628 22.5012C3.65628 21.6422 3.95709 20.9116 4.5587 20.3095C5.16033 19.7073 5.89087 19.4062 6.75031 19.4062C6.99096 19.4062 7.22741 19.4362 7.45962 19.496C7.69182 19.5559 7.91105 19.6363 8.11729 19.7372L10.3479 16.9615C9.88058 16.4523 9.55822 15.8826 9.38081 15.2524C9.20342 14.6221 9.16737 13.9882 9.27264 13.3507L6.03172 12.2776C5.74902 12.732 5.37732 13.0961 4.91662 13.3702C4.45591 13.6442 3.94203 13.7812 3.375 13.7812C2.51564 13.7812 1.78517 13.4805 1.18361 12.8792C0.582056 12.2779 0.281269 11.5478 0.28125 10.6887C0.28125 9.82972 0.581906 9.09915 1.18322 8.49699C1.78453 7.89483 2.51469 7.59375 3.37371 7.59375C4.23272 7.59375 4.9633 7.89453 5.56545 8.49609C6.16762 9.09764 6.46871 9.8281 6.46872 10.6875C6.46872 10.7538 6.46693 10.8094 6.46333 10.8541C6.45973 10.8988 6.45793 10.9435 6.45793 10.9882L9.68803 12.1111C9.99811 11.537 10.4239 11.0445 10.9655 10.6334C11.5071 10.2224 12.1284 9.95844 12.8293 9.84161V6.38865C12.1053 6.21846 11.5204 5.85247 11.0748 5.29071C10.6291 4.72894 10.4063 4.08887 10.4063 3.3705C10.4063 2.51531 10.7069 1.78665 11.3083 1.18449C11.9096 0.582329 12.6397 0.28125 13.4988 0.28125C14.3577 0.28125 15.0883 0.582029 15.6905 1.18359C16.2926 1.78514 16.5938 2.5156 16.5938 3.37498C16.5938 4.09036 16.368 4.72894 15.9166 5.29071C15.4651 5.85247 14.8832 6.21846 14.1707 6.38865V9.84161C14.8716 9.95844 15.491 10.2224 16.029 10.6334C16.567 11.0445 16.9947 11.537 17.312 12.1111L20.542 10.9882C20.5348 10.9363 20.5312 10.8898 20.5312 10.8487V10.6875C20.5312 9.8281 20.832 9.09764 21.4333 8.49609C22.0346 7.89453 22.7647 7.59375 23.6238 7.59375C24.4827 7.59375 25.2133 7.89441 25.8155 8.49572C26.4176 9.09703 26.7188 9.82719 26.7188 10.6862C26.7188 11.5452 26.4179 12.2758 25.8164 12.878C25.2149 13.4801 24.4844 13.7812 23.625 13.7812C23.0604 13.7812 22.5441 13.6442 22.0764 13.3702C21.6088 13.0961 21.2394 12.732 20.9683 12.2776L17.7274 13.3507C17.8326 13.9882 17.7966 14.6192 17.6192 15.2438C17.4418 15.8682 17.1195 16.4373 16.6521 16.9507L18.8827 19.7091C19.089 19.6154 19.3081 19.5415 19.5403 19.4874C19.7726 19.4333 20.009 19.4062 20.2497 19.4062C21.1092 19.4062 21.8396 19.707 22.4413 20.3083C23.0429 20.9096 23.3438 21.6397 23.3438 22.4988C23.3438 23.3577 23.043 24.0883 22.4417 24.6905C21.8404 25.2926 21.1103 25.5938 20.2512 25.5938C19.3923 25.5938 18.6617 25.2929 18.0595 24.6914C17.4574 24.0899 17.1562 23.3594 17.1562 22.5C17.1562 22.1452 17.2136 21.8037 17.3283 21.4756C17.4429 21.1474 17.6142 20.8464 17.8421 20.5723L15.6115 17.7749C14.9726 18.1557 14.2677 18.3461 13.4967 18.3461C12.7259 18.3461 12.0174 18.1557 11.3712 17.7749L9.15792 20.5723C9.37859 20.8464 9.54807 21.1474 9.66634 21.4756C9.7846 21.8037 9.84373 22.1452 9.84373 22.5C9.84373 23.3594 9.54306 24.0899 8.94175 24.6914C8.34044 25.2929 7.61028 25.5938 6.75126 25.5938ZM3.375 12.0938C3.76586 12.0938 4.09796 11.9571 4.3713 11.6838C4.64462 11.4104 4.78128 11.0783 4.78128 10.6874C4.78128 10.2966 4.64462 9.96449 4.3713 9.69114C4.09796 9.41785 3.76586 9.28119 3.375 9.28119C2.98414 9.28119 2.65204 9.41785 2.3787 9.69118C2.1054 9.96451 1.96875 10.2966 1.96875 10.6875C1.96875 11.0783 2.10541 11.4104 2.37873 11.6838C2.65205 11.9571 2.98414 12.0938 3.375 12.0938ZM6.75 23.9062C7.14086 23.9062 7.47296 23.7696 7.7463 23.4962C8.01962 23.2229 8.15628 22.8908 8.15628 22.5C8.15628 22.1091 8.01962 21.777 7.7463 21.5037C7.47296 21.2303 7.14086 21.0938 6.75 21.0938C6.35914 21.0938 6.02704 21.2303 5.7537 21.5037C5.48038 21.777 5.34372 22.1091 5.34372 22.5C5.34372 22.8908 5.48038 23.2229 5.7537 23.4963C6.02704 23.7696 6.35914 23.9062 6.75 23.9062ZM13.5 4.78123C13.8908 4.78123 14.2229 4.64456 14.4963 4.37124C14.7697 4.0979 14.9062 3.7658 14.9062 3.37494C14.9062 2.98408 14.7697 2.65199 14.4963 2.37864C14.2229 2.10535 13.8908 1.96869 13.5 1.96869C13.1092 1.96869 12.7771 2.10536 12.5037 2.37868C12.2303 2.65201 12.0938 2.98411 12.0938 3.37498C12.0938 3.76584 12.2303 4.09794 12.5037 4.37128C12.7771 4.6446 13.1092 4.78123 13.5 4.78123ZM13.5 16.6586C14.2226 16.6586 14.8359 16.4065 15.34 15.9024C15.8441 15.3983 16.0962 14.7851 16.0962 14.0625C16.0962 13.3399 15.8441 12.7266 15.34 12.2225C14.8359 11.7183 14.2226 11.4663 13.5 11.4663C12.7774 11.4663 12.1641 11.7183 11.66 12.2225C11.1559 12.7266 10.9039 13.3399 10.9039 14.0625C10.9039 14.7851 11.1559 15.3984 11.66 15.9025C12.1641 16.4065 12.7774 16.6586 13.5 16.6586ZM20.25 23.9062C20.6408 23.9062 20.9729 23.7696 21.2463 23.4962C21.5197 23.2229 21.6562 22.8908 21.6562 22.5C21.6562 22.1091 21.5197 21.777 21.2463 21.5037C20.9729 21.2303 20.6408 21.0938 20.25 21.0938C19.8592 21.0938 19.5271 21.2303 19.2537 21.5037C18.9804 21.777 18.8438 22.1091 18.8438 22.5C18.8438 22.8908 18.9804 23.2229 19.2537 23.4963C19.5271 23.7696 19.8592 23.9062 20.25 23.9062ZM23.625 12.0938C24.0158 12.0938 24.3479 11.9571 24.6213 11.6838C24.8947 11.4104 25.0312 11.0783 25.0312 10.6874C25.0312 10.2966 24.8947 9.96449 24.6213 9.69114C24.3479 9.41785 24.0158 9.28119 23.625 9.28119C23.2342 9.28119 22.9021 9.41785 22.6287 9.69118C22.3554 9.96451 22.2188 10.2966 22.2188 10.6875C22.2188 11.0783 22.3554 11.4104 22.6287 11.6838C22.9021 11.9571 23.2342 12.0938 23.625 12.0938Z"
                            fill="oklch(50.5% 0.213 27.518)"/>
                    </svg>
                    <span className="font-semibold text-[16px] text-black">AI Workflows</span>
                </div>
            </Link>
        </div>
    );
}
