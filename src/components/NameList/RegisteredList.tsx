import Name from "../Name/Name";

type TCallBackWithProps = (value: string) => void;

const RegisteredList = (props: {names: Array<string>, remove: TCallBackWithProps}) => {
    return(
        <ul className="flex flex-col gap-4">
            {props.names.map((name, key) => (
                <Name value={name} key={key} remove={props.remove} />
            ))}
        </ul>
    )
}

export default RegisteredList;