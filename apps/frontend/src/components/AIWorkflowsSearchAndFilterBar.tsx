export default function AIWorkflowsSearchAndFilterBar() {
    return <div className="w-full h-[120px] flex justify-between items-center">
        <div
            className="cursor-text border-[#282E37] border-2 w-[432px] h-[35px] rounded-[7px] flex items-center px-[9px] gap-x-[9px]">
            <img src="/search_icon.svg" alt="search icon" className="w-[24px] h-[24px]"/>
            <span className="text-[#282E37]/40 text-[14px] font-medium">Search by name...</span>
        </div>

        <div className="w-full"></div>

        <div className="flex items-center pr-[36px] cursor-pointer">
            <span className="text-nowrap text-[15px] font-extrabold">Filter by</span>
            <img src="/chevron_down.svg" alt="filter icon"/>
        </div>
    </div>
}