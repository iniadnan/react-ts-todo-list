interface Props {
    id: string,
    todo: string,
    status: string
}

function ToDoCard(props: Props) {

    const { id, todo, status } = props

    return (
        <article id={id} className="w-full bg-slate-100 py-5 px-5 rounded flex items-center gap-x-3">
            <button type="button" className="h-5 w-5 rounded bg-slate-300 inline-flex items-center justify-center flex-none text-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </button>
            <h3 className="font-medium text-base text-gray-700 grow">{ todo }</h3>
            <button type="button" className={`${status == 'complete' ? 'bg-green-600' : 'bg-gray-400'} inline-block py-2 px-4 rounded-md text-xs text-white font-medium flex-none uppercase`}>{ status }</button>
        </article>
    )
}

export default ToDoCard