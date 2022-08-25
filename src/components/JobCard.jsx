import { useJobContext } from "../hooks/useJobContext";
import { useState } from 'react';

const JobCard = ({job}) => {

  const { setSelected } = useJobContext();
  const [active,setActive] = useState(false);

  // this will handle all the selected inputs
  const handleSelected = (type) => {
    // throw a unique array for jobs
    // if a word already exists in the array, dont add 
    // if a word is not existing add it to array
    // check each name of array

    setSelected(prev => [...prev, type])
  }

    return (
        <div onClick={() => setActive(!active)} className={`relative ${active && 'border-left-active'} cursor-pointer flex md:flex-row flex-col bg-white justify-between shadow-2xl p-6 rounded-md w-[80%]`}>
          <div className="flex border-mobile-bottom md:flex-row flex-col md:items-center items-start gap-4">
            <img className="md:static md:w-auto w-[60px] absolute -top-7" src={job.logo} alt={job.company} />
            <div className="flex flex-col mt-5 md:mt-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="job__title font-bold text-lg">{job.company}</span>
                {job.new && <span className="new text-white select-none font-semibold flex items-center justify-center px-2 rounded-full">NEW!</span>}
                { job.featured && <span className="featured text-white select-none font-semibold flex items-center justify-center px-2 rounded-full">FEATURED</span>}
              </div>
              <h1 className="text-xl font-bold text-gray-900">{job.position}</h1>
              <ul className="flex gap-5 items-center mb-4">
                <li className="gray font-semibold">{job.postedAt}</li>
                <li className="gray font-semibold list-disc">{job.contract}</li>
                <li className="gray font-semibold list-disc">{job.location}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 md:mt-0 items-center">
              <button onClick={() => handleSelected(job.role)} className="language-btn">{job.role}</button>
              <button onClick={() => handleSelected(job.level)} className="language-btn">{job.level}</button>
            { job.languages !== undefined && job.languages.map((language,key) => (
              <button key={key} onClick={() => handleSelected(language)} className="language-btn">{language}</button>
            )) }
          </div>
        </div>
    )
}

export default JobCard