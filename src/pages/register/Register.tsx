import { useHandleCrud } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import RegisteredList from "../../components/NameList/RegisteredList";

export const Register = () => {

    const { error, userValues, remove, setUserInputValue, onSubmit } = useHandleCrud();
    const onNavigate = useNavigate();

    return(
        <main className="bg-custom-gradient min-h-screen p-10 gap-8 flex flex-col md:w-2/6 md:m-auto justify-between"> 

            <section className="gap-8 flex flex-col">
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

                {userValues.length > 0 && <RegisteredList names={userValues} remove={remove} /> }
            </section>

            <button className="bg-white py-4 leading-none rounded-md w-6/12 font-bold text-xl self-end" onClick={() => onNavigate('/sort')}>NEXT</button>
        </main>
    )
}