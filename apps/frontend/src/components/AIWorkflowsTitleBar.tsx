export default function AIWorkflowsTitleBar() {
    return <div className="w-full h-[120px] pt-[63px] pb-[22px] flex items-end border-b border-gray-200 gap-x-[15px]">
        <img src="/robot.svg" alt="robot icon"/>

        <img src="/ai_workflows_logo.svg" alt="ai workflows logo"/>

        <div
            className="cursor-pointer border-[#2B2E81] text-[#2B2E81] h-[31px] w-[63px] border border-4 rounded-[9px] font-extrabold text-[15px] text-center shrink-0">TRIAL
        </div>

        <div className="w-full"></div>

        <div
            className="cursor-pointer bg-white border-2 bg-clip-border p-[26px] py-[6px] rounded-[9px] font-extrabold text-[15px] text-[#282E37] text-nowrap"
            style={{
                borderImage: 'linear-gradient(90deg, #F64804, #F79434, #F87138) 1',
                borderRadius: '9px'
            }}>
            UPGRADE PLAN
        </div>

    </div>
}