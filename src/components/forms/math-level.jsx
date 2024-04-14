import { Card } from "../ui/card"

const Data = [
    {
      topic: "Arithmatic",
      type: "Introductory",
    },
    {
      topic: "Basic Algebra",
      type: "Foundational",
    },
    {
      topic: "Intermediate Algebra",
      type: "Intermediate",
    },
    {
      topic: "Calculus",
      type: "Advanced",
    },
]

export const MathLevel = () => {
    return(
        <div className="flex flex-col gap-4 my-10">
            <div className="flex flex-col gap-2">
                <h1 className=" flex justify-center text-3xl font-bold mb-3">
                    What is your math comfort level?
                </h1>
                <h4 className=" flex justify-center mb-8 text-gray-500 md:whitespace-nowrap">
                    Choose the highest level you feel confident in. You can always change this later.
                </h4>
            </div>
            <div className="flex flex-wrap gap-3 mb-4 md:flex-nowrap mx-auto">
                <div className="mx-auto md:mx-0 flex justify-center flex-wrap gap-2 mb-4">
                    {Data.map((item) => (
                        <Card
                            key={item.topic}
                            topic={item.topic}
                            type={item.topic}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}