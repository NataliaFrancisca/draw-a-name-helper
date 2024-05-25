import { FormEvent } from "react"
import { useHandleCrud } from "../../hooks/useHandleCrud";
import Name from "../../components/Name/Name";

export const Register = () => {

    const { error, userValues, remove, set, setUserInputValue } = useHandleCrud();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        const response = set();

        if(response){
            e.currentTarget.reset();
        }
    }

    return(
        <main className="bg-custom-gradient h-screen p-10 gap-8 flex flex-col md:w-2/6 md:m-auto"> 
            <form className="flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
                <legend className="font-bold text-xl">TYPE A VALUE:</legend>
                <input 
                    type="text" 
                    className="w-full py-3 px-4 rounded-md"
                    placeholder="Type your best name"
                    onChange={(e) => setUserInputValue(e.target.value)}
                />

                {error && <p>{error}</p>}

            </form>

            {userValues.length > 0 && 
                userValues.map((value, key) => (
                    <Name value={value} remove={remove} key={key} />
                ))
            }
        </main>
    )
}