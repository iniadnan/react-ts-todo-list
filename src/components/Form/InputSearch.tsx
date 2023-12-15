function InputSearch() {
    return (
        <div className="w-full md:w-[600px] flex items-center bg-slate-50 gap-x-3 py-6 px-5 rounded-md overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 flex-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search To Do..." className="bg-transparent grow text-xl text-gray-700" />
        </div>
    )
}

export default InputSearch