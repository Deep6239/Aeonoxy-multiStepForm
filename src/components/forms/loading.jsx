import { FaRegCircle } from "react-icons/fa"

export const Loading = () => {
    return(
        <div className="flex justify-center flex-col mx-auto items-center h-screen gap-3">
            <div>
                <FaRegCircle className="h-20 w-20 text-yellow-400"/>
            </div>
            <div className="text-2xl flex flex-col justify-center items-center">
                <p>Finding learning path recommendations for you based</p>
                <p>on your responses.</p>
            </div>
        </div>
    )
}