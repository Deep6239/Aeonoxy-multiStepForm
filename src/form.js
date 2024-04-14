import { useState } from "react"
import { Progressbar } from "./components/ui/progressbar"
import { Profession } from "./components/forms/profession"
import { Button } from "./components/ui/button"
import { Interest } from "./components/forms/interest"
import { RightPlace } from "./components/forms/right-place"
import { MathLevel } from "./components/forms/math-level"
import { OnWay } from "./components/forms/on-way"
import { Loading } from "./components/forms/loading"
import { LearningPath } from "./components/forms/learning-path"
import { BiChevronLeft } from "react-icons/bi"

export const Form = () => {
    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep((prev) => prev + 1)
    }

    const preStep = () => {
        if(step > 1) {
            setStep((prev) => prev - 1)
        }
    }

    setTimeout(() => {
        if(step === 6){
            setStep(7)
        }
    }, 2000)

    return(
        <div className="flex flex-col mx-auto min-h-screen h-screen p-8 my-auto lg:w-[1200px]">
            <div className="flex items-center">
                <div onClick={preStep} className={`${step <=1 ? 'hidden' : ''} ${step >= 5 ? 'hidden' : ''}`}>
                    <BiChevronLeft />
                </div>
                <div className="flex-1 self-center">
                    <Progressbar step={step} />
                </div>
            </div>
            <div className="mx-auto p-4 h-screen flex flex-col gap-3">
                {(step === 1) && (
                    <Profession />
                )}
                {(step === 2) && (
                    <Interest />
                )}
                {(step === 3) && (
                    <RightPlace />
                )}
                {(step === 4) && (
                    <MathLevel />
                )}
                {(step === 5) && (
                    <OnWay />
                )}
                {(step === 6) && (
                    <Loading />
                )}
                {(step === 7) && (
                    <LearningPath />
                )}
                <div className="text-center">
                    <Button onClick={nextStep} step={step}/>
                </div>
            </div>
        </div>
    )
}