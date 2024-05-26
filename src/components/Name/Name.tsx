import imgUrl from '../../assets/trash.svg';
type TCallBackWithProps = (value: string) => void;

const Name = (props: {value: string, remove: TCallBackWithProps}) => {

    return (
        <article className='w-full bg-white py-2.5 px-5 flex justify-between rounded-md border-solid border-black border-4'>
            <span className='text-xl'>{props.value}</span>
            <button className='bg-transparent hover:scale-125 transition-transform' onClick={() => props.remove(props.value)}>
                <img src={imgUrl} />
            </button>
        </article>
    )
};

export default Name;