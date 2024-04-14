export const Button = ({ onClick, step }) => {
    return(
        <button 
            onClick={onClick}
            className={`bg-black p-4 w-40 mt-4 rounded-md text-white 
                ${step > 5 ? 'hidden' : ''}`}
        >
            Countinue
        </button>
    )
}