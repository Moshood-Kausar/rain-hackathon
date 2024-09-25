import { FlowCurve, FlowCurveReverse, FlowSnake, FlowStraight } from "../assets/svg";

export default function Timeline(){
    return (
        <section className="px-4 md:px-10 gap-10 lg:gap-20 my-20 mx-5" id="timeline">
            <h2 className="w-fit text-center text-dark mx-auto text-lg md:text-[32px] font-medium flex items-center mb-5 md:mb-20">
            Timeline
          </h2>
            <div className="flex flex-col w-full md:w-fit mx-auto max-w-[430px] md:max-w-[1100px] xl:max-w-full">
                <div className="gradient-primary py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-dark flex flex-col items-center">
                    <h3 className="text-sm md:text-xl font-medium text-center">Submission of Proposals</h3>
                    <p className="text-center text-xs md:text-base">Oct 1st - Oct 28th</p>
                    <p className="text-center text-xs md:text-base">1 month</p>
                </div>
                <div className="ml-auto md:ml-[86px] mt-6 flex">
                    <FlowCurve />
                    <div className="gradient-dark py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-white flex flex-col items-center mt-5 ml-2">
                        <h3 className="text-sm md:text-xl font-medium text-center">Review of Proposals</h3>
                        <p className="text-center text-xs md:text-base">Oct 1st - Oct 28th</p>
                        <p className="text-center text-xs md:text-base">1 month</p>
                    </div>
                </div>
                <div className="mr-0 md:ml-[250px] mt-6 flex">
                    <div className="hidden md:flex">
                        <FlowCurve />
                    </div>
                    <div className="gradient-primary py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-dark flex flex-col items-center mt-4 md:mt-5 mr-2 md:mr-0 md:ml-2">
                        <h3 className="text-sm md:text-xl font-medium text-center">Announcement of top 50 to build MVPs</h3>
                        <p className="text-center text-xs md:text-base">Nov 11th</p>
                        <p className="text-center text-xs md:text-base">A day</p>
                    </div>
                    <div className="flex md:hidden">
                        <FlowCurveReverse />
                    </div>
                </div>
                <div className="ml-auto md:ml-[445px] mt-6 flex">
                        <FlowCurve />
                    <div className="gradient-dark py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-white flex flex-col items-center mt-4 md:mt-5 ml-2">
                        <h3 className="text-sm md:text-xl font-medium text-center">Building Phase</h3>
                        <p className="text-center text-xs md:text-base">Nov 12th - Dec 15th</p>
                        <p className="text-center text-xs md:text-base">1 month</p>
                    </div>
                </div>
                <div className="ml-0 md:ml-[345px] xl:ml-[647px] mt-6 flex md:flex-col xl:flex-row">
                <div className="hidden xl:flex">
                        <FlowCurve />
                    </div>
                    <div className="w-full max-w-[245px] hidden md:flex xl:hidden justify-end">
                        <FlowSnake />
                    </div>
                    <div className="gradient-primary py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-dark flex flex-col items-center mt-4 md:mt-4 xl:mt-5 mr-2 md:mr-0 md:ml-2">
                        <h3 className="text-sm md:text-xl font-medium text-center">Review of 50 MVPs to top 10</h3>
                        <p className="text-center text-xs md:text-base">Nov 12th - Dec 15th</p>
                        <p className="text-center text-xs md:text-base">1 month</p>
                    </div>
                    <div className="flex md:hidden">
                        <FlowCurveReverse />
                    </div>
                </div>
                <div className="ml-auto md:mr-[220px] xl:ml-[855px] mt-6 flex md:flex-col xl:flex-row">
                    <div className="flex md:hidden xl:flex">
                        <FlowCurve />
                    </div>
                    <div className="w-full max-w-[245px] hidden md:flex xl:hidden justify-end">
                        <FlowSnake />
                    </div>
                    <div className="gradient-dark py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-white flex flex-col items-center mt-4 md:mt-4 xl:mt-5 ml-2">
                        <h3 className="text-sm md:text-xl font-medium text-center min-w-[14ch]">Perfection of top 10 MVPs</h3>
                        <p className="text-center text-xs md:text-base">Jan 6th - Jan 20th</p>
                        <p className="text-center text-xs md:text-base">2 weeks</p>
                    </div>
                </div>
                <div className="ml-0 md:ml-[225px] xl:ml-[925px] mt-4 flex flex-col">
                    <div className="w-full max-w-[245px] hidden md:flex justify-center">
                        <FlowStraight />
                    </div>
                    <div className="w-full max-w-[245px] flex md:hidden justify-end">
                        <FlowSnake />
                    </div>
                    <div className="gradient-primary py-[15px] px-7 rounded-[10px] w-fit max-w-[245px] text-dark flex flex-col items-center mt-4 mr-2 md:mr-0">
                        <h3 className="text-sm md:text-xl font-medium text-center">Live presentation</h3>
                        <p className="text-center text-xs md:text-base">Jan 20th - Jan 31st</p>
                        <p className="text-center text-xs md:text-base">A day in-between</p>
                    </div>
                </div>
            </div>
        </section>
    )
}