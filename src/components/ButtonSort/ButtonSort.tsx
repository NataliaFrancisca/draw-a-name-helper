type CallbackButtonFunction = () => void;

interface IButtonSort{
    sortValue: CallbackButtonFunction,
    values: Array<string>
}

const ButtonSort = (props: IButtonSort) => {
    return(
        <div className="bg-button-gradient rounded-full w-[200px] h-[200px] flex justify-center p-1 mx-auto">
            <button 
                className="rounded-full bg-black text-4xl text-white w-full cursor-pointer disabled:cursor-not-allowed" 
                onClick={() => props.sortValue()}
                disabled={props.values.length === 0}
            >
                    SORT
            </button>
        </div>
    )
}

export default ButtonSort;