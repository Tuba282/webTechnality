import { TbUserScan } from "react-icons/tb";
import { BsPhone,BsBox } from "react-icons/bs"; 
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiFlowArrow, PiMonitorThin, PiSparkleLight , PiChartPieSlice , PiLightbulbLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

const features = [
    { icon: BsPhone, label: "Senior-level quality" },
    { icon: PiMonitorThin, label: "Systems thinking" },
    { icon: PiFlowArrow, label: "Developer-friendly" },
    { icon: PiChartPieSlice, label: "Clear process " },
    { icon: PiLightbulbLight, label: "On-brand, every time" },
    { icon: CiSettings, label: "Reliable partner" },
    { icon: PiSparkleLight, label: "Fast execution" },
    { icon: BsBox, label: "Thoughtful feedback" },
    { icon: TbUserScan, label: "Smooth handoff" },
];

export default function IconGrid() {
    return (
        <div className=" max-w-6xl mx-auto py-12 mt-10 px-1 sm:px-6 lg:px-20">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-2">
                {features.map(({ icon: Icon, label }, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center text-[#898989] text-xl">
                            <Icon />
                        </div>
                        <span className="flex lg:flex-row flex-col align-middle gap-2">
                            <span className="text-[#898989] font-medium text-sm sm:text-base">{label}</span>
                            <span className="text-[#898989]"> __________________ </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

