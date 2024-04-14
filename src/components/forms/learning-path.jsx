import { LearningPathCard } from "../ui/learning-path-card"

export const LearningPath = () => {
    return(
        <div>
            <div className="flex flex-col gap-2 my-10">
                <h1 className="flex justify-center text-3xl font-bold mb-3">
                    Learning Path based on your answer
                </h1>
                <h4 className="flex justify-center mb-8 text-gray-500"> 
                    Choose one to get started. You can always change this later.
                </h4>
            </div>
            <div className="flex gap-2">
                <LearningPathCard isPopular={true} title={'Foundational Math'}/>
                <LearningPathCard isPopular={false} title={'Mathematical thinking'}/>
            </div>
        </div>
    )
}