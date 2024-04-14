import StarRatings from "react-star-ratings"

export const OnWay = () => {
    return(
        <div className="flex flex-col justify-between mb-12">
            <div className="grid grid-cols-2 justify-evenly h-full gap-3">
                <div className="flex justify-center items-center h-full">
                    <img 
                        className="px-10"
                        src="https://utfs.io/f/0df96f6d-9cf2-4b2e-b2ea-8a261358cd9b-z6png8.png"
                        alt="On the Way"
                    />
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl font-bold md:leading-3 w-full my-12">
                        You're on your way!
                    </h1>
                    <div className="w-full mb-4">
                        <StarRatings 
                            starRatedColor="blue"
                            numberOfStars={5}
                            starSpacing="1px"
                            starDimension="30px"
                            name="rating"
                            size={24}
                            starEmptyColor="#ffbc3c"
                        />
                    </div>
                    <p>
                        "Through its engaging and well-structured courses, Brilliant has
                        taught me mathematical concepts that I previously struggled to
                        understand. I now feel confident approaching both technical job
                        interviews and real world problem solving situations."
                    </p>
                    <p className="w-full mt-3">- Jacob S.</p>
                </div>
            </div>
        </div>
    )
}