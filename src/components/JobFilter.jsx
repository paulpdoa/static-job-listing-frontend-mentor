import { useJobContext } from "../hooks/useJobContext"

const JobFilter = () => {

    const { selected,setSelected } = useJobContext();
    // removes array which is existing already
    const newSetSelected = [ ...new Set(selected) ];

    const removeSelected = (type) => {
        const removed = selected.filter(select => select !== type);
        setSelected(removed);
    }

  return (
    <div className={`${selected.length > 0 ? 'flex' : 'hidden'} justify-center w-full absolute -bottom-8`}>
        <div className="bg-white shadow-2xl rounded-md flex justify-between p-5 w-[80%] overflow-hidden">
         <div className="flex gap-4 items-center">
            { newSetSelected.map((job,key) => (
                <span className="btn-filter" key={key}>
                    {job}
                    <button onClick={() => removeSelected(job)} className="btn-remove"><img src="/images/icon-remove.svg" alt="remove" /></button>
                </span>
            )) }
         </div>
         <button onClick={() => setSelected([])} className="btn-clear">Clear</button>
        </div>
    </div>
  )
}

export default JobFilter