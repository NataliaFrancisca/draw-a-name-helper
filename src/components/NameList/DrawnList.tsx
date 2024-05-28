const DrawnList = (props: {names: Array<string>}) => {

    return(
       <section className="flex flex-col bg-button-transparent p-6 rounded-md">
            <label className="font-bold text-xl mb-2">Drawn Names:</label>

            <ul className="list-decimal list-inside" role="list">
                {props.names.map((value, key) => ( 
                    <li className="marker:font-bold uppercase text-lg" key={key}>
                        {value}
                    </li>
                ))}
            </ul>
       </section>
    )
}

export default DrawnList;