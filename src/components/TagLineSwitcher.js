import React, {useState} from 'react';

const taglines = [
    'ee your potential',
    'ee your beauty',
    'hine bright',
    'hoot for the stars',
    'tart the journey',
    'uccess & happiness are  inside you',
    'how what you can do',
    'mile  :)',
    'uccess is a state of mind',
    'uccess is a choice',
    'truggles make you stronger'
]

const TagLineSwitcher = () => {
    const [tagline, setState] = useState({
        val: 'Sofia Kakkava',
        num: 0
    });

    function onMouseOver () {

        setState(prevState => {
            return {
                num: prevState.num +1,
                val: `S${taglines[tagline.num]}`
            }
        })
    }

    function onMouseOut () {
        setState(prevState => {
            return {
                num: prevState.num,
                val: 'Sofia Kakkava'
            }
        })
    }

    return (
        <div 
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOut}
            className="text-black"
        >
            <h4>{tagline.val}</h4>
        </div>
    )
}

export default TagLineSwitcher;