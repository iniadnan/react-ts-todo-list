function InputNewTodo() {
    return (
        <div className="w-full flex items-center bg-slate-100 gap-x-3 py-2 md:py-3 px-5 rounded-md overflow-hidden">
            <input type="text" placeholder="Write New To Do..." className="bg-transparent grow text-base text-gray-700" />
            <button type="submit" className="text-base text-white font-medium bg-blue-500 pt-1 pb-1.5 px-5 rounded">Insert</button>
        </div>
    )
}

export default InputNewTodo