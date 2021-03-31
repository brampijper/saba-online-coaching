import React, {useState, useEffect} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import "../styles/fade.css";

const OnHoverChangeText = (props) => {
    const [myIndex, setIndex] = useState(0);
    const [myString, setString] = useState(props.defaultString);
    const [state, setState] = useState(false);
    const [taglines, setTaglines] = useState([]);

    useEffect(() => {
        props.taglines.map( (tagline) => {
            const { tagline: {text} } = tagline;
            setTaglines(oldArray => [...oldArray,  sliceFirstLetter(text)]);
        })

        function sliceFirstLetter(sentence) {
            return sentence.slice(1, sentence.length);
        }

    }, [props.taglines.length])

    function onMouseOver () {
        setString(taglines[myIndex]);
        setIndex(prevState => prevState +1);
        setState(state => !state); 
    }

    function onMouseOut () {
        setString(props.defaultString);
        if (taglines.length === myIndex) {
            setIndex(0);
            setString(props.defaultString);
        } else {
            setState(state => !state);
        }
    }

    return (
        <div className="flex flex-row">
        <h5>S</h5>
        <SwitchTransition mode='out-in'>
            <CSSTransition 
                key={state} 
                classNames="fade"
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                }}
            >
                <div onMouseEnter={onMouseOver} onMouseLeave={onMouseOut} className={`${props.className} text-black`}>
                    <h5>
                        {`${myString}`}
                    </h5>
                </div>
            </CSSTransition>
        </SwitchTransition>
        </div>
    )
}

OnHoverChangeText.propTypes = {
    taglines: PropTypes.array.isRequired,
    defaultString: PropTypes.string.isRequired
};

export default OnHoverChangeText;