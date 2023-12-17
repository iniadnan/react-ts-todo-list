import { useState } from "react"

interface Props {
    id: string,
    todo: string,
    status: string,
    isReadOnly: boolean,
    onUpdateMouseOut: (event: React.FocusEvent<HTMLInputElement, Element>) => void,
    onChangeTodo: (event: React.ChangeEvent<HTMLInputElement>) => void,
    toggleSelect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    toggleStatus: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function ToDoCard(props: Props) {

    const { id, todo, status, isReadOnly, onUpdateMouseOut, onChangeTodo, toggleSelect, toggleStatus } = props

    const [checkIcon, setCheckIcon] = useState(false)


    const onToggleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCheckIcon(prevState => {
            return !prevState
        })
        toggleSelect(event)
    }

    return (
        <article id={id} className="w-full bg-slate-100 py-5 px-5 rounded flex items-center gap-x-3">
            <button onClick={onToggleSelect} type="button" className={`${checkIcon ? 'bg-blue-500 text-white' : 'bg-slate-300 text-transparent'} h-5 w-5 rounded inline-flex items-center justify-center flex-none`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </button>
            <input onChange={onChangeTodo} onBlur={onUpdateMouseOut} readOnly={!isReadOnly} type="text" className={`${isReadOnly ? 'bg-white' : 'bg-transparent'} font-medium text-base bg-transparent py-2 px-3 text-gray-700 grow`} title="Press Enter To Save Todo!" defaultValue={todo} />
            <button onClick={toggleStatus} type="button" className={`${status == 'completed' ? 'bg-green-600' : 'bg-gray-400'} inline-block py-2 px-4 rounded-md text-xs text-white font-medium flex-none uppercase`}>{status}</button>
        </article>
    )
}

export default ToDoCard