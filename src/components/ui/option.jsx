export const Option = ({icon, text, description}) => {
    return(
        <div className="flex md:w-[600px] p-3 items-center gap-2 border-[1px] border-gray-200 hover:border-yellow-300 rounded-md cursor-pointer">
            <div className="text-4xl">{icon}</div>
            <div className="flex flex-col md:flex-row gap-2 ml-3">
                <span className="font-semibold">{text}</span>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    )
}