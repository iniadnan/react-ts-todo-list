function ToDoCard() {
    return (
        <article className="w-full bg-slate-100 py-5 px-5 rounded flex items-center gap-x-3">
            <button type="button" className="h-5 w-5 rounded bg-slate-300 inline-flex items-center justify-center flex-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </button>
            <h3 className="font-medium text-base text-gray-700 grow">Wake Up</h3>
            <span className="inline-block py-2 px-4 bg-green-600 rounded-md text-xs text-white font-medium flex-none">COMPLETE</span>
        </article>
    )
}

export default ToDoCard