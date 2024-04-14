export const Progressbar = ({ step }) => {
    const progress = (step / 5)*100

    return(
        <div className={`bg-gray-200 rounded-full h-1 ${progress > 100 ? 'hidden' : ''}`}>
            <div className={`bg-green-700 h-1 rounded-full`} style={{width: `${progress}%`}}>
            </div>
        </div>
    )
}