export const LearningPathCard = ({ isPopular, title }) => {
    return(
        <div className="relative border-2 border-gray-200 rounded-md hover:border-yellow-300 hover:cursor-pointer">
            <div
                className={`absolute bg-yellow-500 top-0 left-1/2 transform -translate-x-1/2 -mt-3 h-6 p-2 justify-center items-center rounded-xl z-10
                    ${
                        isPopular ? 'flex' : 'hidden'
                    }`}
            >
                Most Popular 
            </div>
            <div className="flex p-5">
                <div className="w-60 flex flex-col pt-10">
                    <h3 className="font-bold w-full">
                        {title}
                    </h3>
                    <p>
                        Build your foundational skills in algebra geometry and probability
                    </p>
                </div>
                <img
                    className="h-36 w-36" 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png" 
                    alt="Learning Path" 
                />
            </div>
        </div>
    )
}