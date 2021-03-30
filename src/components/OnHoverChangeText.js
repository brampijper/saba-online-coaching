import React, {useState} from 'react';

const OnHoverChangeText = (props) => {
    const [myIndex, setIndex] = useState(0);
    const [myString, setString] = useState(props.defaultString);
    const taglines = []

    if (props.taglines) {
        props.taglines.map( tagline => taglines.push(tagline.text) )
    }

    function onMouseOver () {
        if (taglines.length === myIndex) setIndex(0); 
        setString(taglines[myIndex]);
        setIndex(prevState => prevState +1);
    }

    function onMouseOut () {
        setString(props.defaultString);
    }

    return (
        <div 
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOut}
            className={`${props.className} text-black`}>
            <h4>{myString}</h4>
        </div>
    )
}

export default OnHoverChangeText;