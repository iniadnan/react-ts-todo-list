interface propsInputNewTodo {
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputNewTodo(props: propsInputNewTodo) {

    const { onInputChange } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event)
    }

    return (
        <div className="w-full flex items-center bg-slate-100 gap-x-3 py-2 md:py-3 px-5 rounded-md overflow-hidden">
            <input onChange={handleChange} type="text" placeholder="Write New To Do..." className="bg-transparent grow text-base text-gray-700" />
            <button type="submit" className="text-base text-white font-medium bg-blue-500 pt-1 pb-1.5 px-5 rounded">Insert</button>
        </div>
    )
}

export default InputNewTodo