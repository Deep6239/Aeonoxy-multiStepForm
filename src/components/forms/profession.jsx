import { Option } from "../ui/option"

import {
    FcBusinesswoman,
    FcPortraitMode,
    FcManager,
    FcCustomerSupport,
    FcConferenceCall,
    FcSelfie,
  } from "react-icons/fc"

const Data = [
    {
        name: "Student",
        description: "or soon to be enrolled",
        icon: <FcPortraitMode />,
      },
      {
        name: "Professional",
        description: "pusruing a career",
        icon: <FcManager />,
      },
      {
        name: "Parent",
        description: "of a school aged-child",
        icon: <FcBusinesswoman />,
      },
      {
        name: "Lifelong learner",
        description: "",
        icon: <FcCustomerSupport />,
      },
      {
        name: "Taecher",
        description: "",
        icon: <FcConferenceCall />,
      },
      {
        name: "other",
        description: "",
        icon: <FcSelfie />,
      },
]

export const Profession = () => {
    return(
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center font-bold">
                Which describes you best?
            </h1>
            <h4 className="text-center mb-8 text-gray-500">
                This will help us personalise your experience
            </h4>
            <div className="flex flex-col gap-2 mx-auto">
                {Data.map((item) => (
                    <Option 
                        key={item.name}
                        text={item.name}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}