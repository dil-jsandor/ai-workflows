export default function TopBar() {
    return <div id="top-bar" className="w-full h-[64px] bg-white flex px-[12px] items-center border-b border-gray-200 gap-x-[8px]">
        <div className='flex items-center gap-x-[12px]'>
            <div className="w-[56px] h-[56px] flex justify-center items-center">
                <div className="bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                        <path
                            d="M3.25 20.5771V7.07715H7.25V3.07715H16.75V11.0771H20.75V20.5771H13.25V16.5771H10.75V20.5771H3.25ZM4.74995 19.0772H7.25V16.5771H4.74995V19.0772ZM4.74995 15.0771H7.25V12.5771H4.74995V15.0771ZM4.74995 11.0771H7.25V8.57712H4.74995V11.0771ZM8.74995 15.0771H11.25V12.5771H8.74995V15.0771ZM8.74995 11.0771H11.25V8.57712H8.74995V11.0771ZM8.74995 7.07715H11.25V4.57712H8.74995V7.07715ZM12.75 15.0771H15.25V12.5771H12.75V15.0771ZM12.75 11.0771H15.25V8.57712H12.75V11.0771ZM12.75 7.07715H15.25V4.57712H12.75V7.07715ZM16.75 19.0772H19.25V16.5771H16.75V19.0772ZM16.75 15.0771H19.25V12.5771H16.75V15.0771Z"
                            fill="currentColor">
                        </path>
                    </svg>
                </div>
            </div>
            <span className='font-semibold text-[16px] text-nowrap'>Hackfest Org</span>
        </div>

        <div className="h-full w-full"></div>

        <div className="border-gradient flex items-center h-[36px] bg-white border py-[4px] px-[12px] rounded-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M17.115 9.2998L18.24 7.0498L20.49 5.9248L18.24 4.7998L17.115 2.5498L15.99 4.7998L13.74 5.9248L15.99 7.0498L17.115 9.2998Z"
                    fill="url(#paint0_linear_3392_10151)"/>
                <path
                    d="M11.565 9.67478L9.24001 5.02478L6.91001 9.67478L2.26501 11.9998L6.91001 14.3248L9.24001 18.9748L11.565 14.3248L16.215 11.9998L11.565 9.67478Z"
                    fill="url(#paint1_linear_3392_10151)"/>
                <path
                    d="M15.99 16.9497L17.115 14.6997L18.24 16.9497L20.49 18.0747L18.24 19.1997L17.115 21.4497L15.99 19.1997L13.74 18.0747L15.99 16.9497Z"
                    fill="url(#paint2_linear_3392_10151)"/>
                <defs>
                    <linearGradient id="paint0_linear_3392_10151" x1="3.10294" y1="8.92852" x2="20.1202" y2="21.9335"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D3222A"/>
                        <stop offset="0.64" stop-color="#C247FA"/>
                        <stop offset="1" stop-color="#4D1DD5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3392_10151" x1="3.10294" y1="8.92852" x2="20.1202" y2="21.9335"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D3222A"/>
                        <stop offset="0.64" stop-color="#C247FA"/>
                        <stop offset="1" stop-color="#4D1DD5"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3392_10151" x1="3.10294" y1="8.92852" x2="20.1202" y2="21.9335"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D3222A"/>
                        <stop offset="0.64" stop-color="#C247FA"/>
                        <stop offset="1" stop-color="#4D1DD5"/>
                    </linearGradient>
                </defs>
            </svg>
            <span className="text-nowrap text-[14px] font-semibold">Ask AI for help</span>
        </div>

        <div className="hover:bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded-[12px] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                <path
                    d="M11.989 17.6153C12.2745 17.6153 12.5157 17.5168 12.7125 17.3196C12.9093 17.1225 13.0077 16.8811 13.0077 16.5956C13.0077 16.31 12.9091 16.0689 12.7119 15.8721C12.5148 15.6753 12.2734 15.5769 11.9879 15.5769C11.7024 15.5769 11.4612 15.6755 11.2644 15.8726C11.0676 16.0698 10.9692 16.3111 10.9692 16.5967C10.9692 16.8822 11.0678 17.1234 11.265 17.3202C11.4621 17.5169 11.7034 17.6153 11.989 17.6153ZM11.2808 14.0346H12.6884C12.7012 13.5423 12.7734 13.149 12.9048 12.8548C13.0362 12.5606 13.3551 12.1705 13.8615 11.6846C14.3012 11.2449 14.6381 10.8388 14.8721 10.4663C15.106 10.0939 15.223 9.65407 15.223 9.14685C15.223 8.28613 14.9137 7.61378 14.2952 7.1298C13.6766 6.64583 12.9449 6.40385 12.1 6.40385C11.2654 6.40385 10.5747 6.62661 10.0279 7.07213C9.48109 7.51763 9.09103 8.04229 8.8577 8.64613L10.1423 9.1615C10.2641 8.82945 10.4724 8.50606 10.7673 8.19133C11.0622 7.87658 11.5 7.7192 12.0808 7.7192C12.6718 7.7192 13.1086 7.88107 13.3913 8.2048C13.674 8.52852 13.8154 8.88461 13.8154 9.27308C13.8154 9.61281 13.7186 9.9237 13.525 10.2058C13.3314 10.4878 13.0846 10.7602 12.7846 11.0231C12.1282 11.6154 11.7135 12.0878 11.5404 12.4404C11.3673 12.7929 11.2808 13.3243 11.2808 14.0346ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z"
                    fill="currentColor"></path>
            </svg>
        </div>

        <div className="hover:bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded-[12px] shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                <path
                    d="M6.02308 17.2923C6.87308 16.6615 7.79903 16.1635 8.80095 15.7981C9.80287 15.4327 10.8692 15.25 12 15.25C13.1307 15.25 14.1971 15.4327 15.199 15.7981C16.2009 16.1635 17.1269 16.6615 17.9769 17.2923C18.5987 16.609 19.0913 15.8179 19.4548 14.9192C19.8182 14.0205 20 13.0474 20 12C20 9.78331 19.2208 7.89581 17.6625 6.33748C16.1041 4.77914 14.2166 3.99998 12 3.99998C9.78331 3.99998 7.89581 4.77914 6.33748 6.33748C4.77914 7.89581 3.99998 9.78331 3.99998 12C3.99998 13.0474 4.18171 14.0205 4.54518 14.9192C4.90864 15.8179 5.40128 16.609 6.02308 17.2923ZM12.0003 12.75C11.0873 12.75 10.3173 12.4366 9.69038 11.8099C9.06346 11.1831 8.75 10.4133 8.75 9.50028C8.75 8.58726 9.06336 7.81729 9.69008 7.19038C10.3168 6.56346 11.0867 6.25 11.9997 6.25C12.9127 6.25 13.6827 6.56336 14.3096 7.19008C14.9365 7.81681 15.25 8.58668 15.25 9.49968C15.25 10.4127 14.9366 11.1827 14.3099 11.8096C13.6831 12.4365 12.9133 12.75 12.0003 12.75ZM12 21.5C10.6807 21.5 9.44325 21.2519 8.2875 20.7557C7.13173 20.2596 6.12628 19.5839 5.27115 18.7288C4.41603 17.8737 3.7404 16.8682 3.24425 15.7125C2.74808 14.5567 2.5 13.3192 2.5 12C2.5 10.6807 2.74808 9.44325 3.24425 8.2875C3.7404 7.13173 4.41603 6.12628 5.27115 5.27115C6.12628 4.41603 7.13173 3.7404 8.2875 3.24425C9.44325 2.74808 10.6807 2.5 12 2.5C13.3192 2.5 14.5567 2.74808 15.7125 3.24425C16.8682 3.7404 17.8737 4.41603 18.7288 5.27115C19.5839 6.12628 20.2596 7.13173 20.7557 8.2875C21.2519 9.44325 21.5 10.6807 21.5 12C21.5 13.3192 21.2519 14.5567 20.7557 15.7125C20.2596 16.8682 19.5839 17.8737 18.7288 18.7288C17.8737 19.5839 16.8682 20.2596 15.7125 20.7557C14.5567 21.2519 13.3192 21.5 12 21.5ZM12 20C12.9025 20 13.7727 19.8548 14.6105 19.5644C15.4484 19.274 16.1923 18.8679 16.8423 18.3461C16.1923 17.8436 15.458 17.4519 14.6394 17.1711C13.8208 16.8903 12.941 16.75 12 16.75C11.0589 16.75 10.1775 16.8887 9.35573 17.1663C8.53393 17.4439 7.80123 17.8371 7.15765 18.3461C7.80765 18.8679 8.55157 19.274 9.3894 19.5644C10.2272 19.8548 11.0974 20 12 20ZM12 11.25C12.4974 11.25 12.9134 11.0827 13.2481 10.7481C13.5827 10.4134 13.75 9.99741 13.75 9.49998C13.75 9.00254 13.5827 8.58651 13.2481 8.25188C12.9134 7.91726 12.4974 7.74995 12 7.74995C11.5025 7.74995 11.0865 7.91726 10.7519 8.25188C10.4173 8.58651 10.25 9.00254 10.25 9.49998C10.25 9.99741 10.4173 10.4134 10.7519 10.7481C11.0865 11.0827 11.5025 11.25 12 11.25Z"
                    fill="currentColor"></path>
            </svg>
        </div>
    </div>;
}