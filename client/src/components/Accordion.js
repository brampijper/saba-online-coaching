import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'

function Accordion(props) {

    const [setActive, setActiveState ] = useState("hidden");

    function toggleAccordion() {
        setActiveState(setActive === "hidden" ? "" : "hidden")
    }


    return (
        <article className="border-b">
            <div className={`border-l-2 ${setActive === "hidden" ? "border-transparent" : "border-s-turquoise"}`}>
                <button className={`focus:outline-none flex w-full justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`} tabIndex="0" onClick={toggleAccordion}>
                    <span className={`font-thin text-xl md:text-2xl mr-4 font-bold text-left ${setActive === "hidden" ? "text-grey-darkest" : "text-s-turquoise"}`}>
                        {props.question}
                    </span>
                    <div className={`rounded-full border border-grey w-7 h-7 flex items-center justify-center`}>
                        <svg aria-hidden="true" className="" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            {
                                setActive === "hidden"
                                    ? <polyline points="6 9 12 15 18 9"></polyline>
                                    : <polyline points="18 15 12 9 6 15"></polyline>
                            }
                        </svg>
                    </div>
                </button>
                <div className={`${setActive}`}>
                    <div className="pl-4 pb-4 pr-4 md:pl-16 md:pr-16 md:pb-12 text-grey-darkest">
                        <ul className="pl-4">
                            <li className="pb-2 max-w-prose text-base md:text-sm">
                                <ReactMarkdown children={props.answer} className="space-y-6 max-w-prose" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Accordion;