
import {
    FcComboChart,
    FcGlobe,
    FcMindMap,
    FcApproval,
    FcBinoculars,
  } from "react-icons/fc";
import { Option } from "../ui/option";
  
  const Data = [
    {
      description: "Learning specific skills to advance my career",
      icon: <FcComboChart />,
    },
    {
      description: "exploring new topics I'm interested in",
      icon: <FcGlobe />,
    },
    {
      description: "Refreshing my math foundations",
      icon: <FcMindMap />,
    },
    {
      description: "Excersing my brain to stay sharp",
      icon: <FcApproval />,
    },
    {
      description: "Something else",
      icon: <FcBinoculars />,
    },
]

export const Interest = () => {
    return(
        <div className="flex flex-col justify-center gap-4">
            <h1 className="flex justify-center text-3xl font-bold">
                Which are you most interested in?
            </h1>
            <h4 className="flex justify-center mb-8 text-gray-500 md:whitespace-nowrap">
            Choose just one.This will help us to get you started (but won't limit your experience )
            </h4>
            <div className="flex flex-col gap-2 mx-auto">
                {Data.map((item) => ( 
                    <Option 
                        key={item.description}
                        icon={item.icon}
                        text={item.description}
                        description=""
                    />
                ))}
            </div>
        </div>
    )
}