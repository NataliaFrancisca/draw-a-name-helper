type CallbackButtonFunction = () => void;

interface IButtonDraw{
    drawName: CallbackButtonFunction,
    values: Array<string>
}

const ButtonDraw = (props: IButtonDraw) => {
    return(
        <div className="bg-button-gradient rounded-full w-[220px] h-[220px] flex justify-center p-1 mx-auto">
            <button 
                className="rounded-full bg-black text-4xl text-white w-full cursor-pointer disabled:cursor-not-allowed" 
                onClick={() => props.drawName()}
                disabled={props.values.length === 0}
            >
                    DRAW 
            </button>
        </div>
    )
}

export default ButtonDraw;