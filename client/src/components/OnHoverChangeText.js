import React, {useState, useEffect} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import "../styles/fade.css";

const OnHoverChangeText = (props) => {
    const [myIndex, setIndex] = useState(0);
    const [myString, setString] = useState(props.defaultString);
    const [animate, setState] = useState(false);
    const [taglines, setTaglines] = useState([]);

    useEffect(() => {
        props.taglines.map( (tagline) => {
            const { text } = tagline;
            return setTaglines(oldArray => [...oldArray,  sliceFirstLetter(text)]);
        })

        function sliceFirstLetter(sentence) {
            return sentence.slice(1, sentence.length);
        }

    }, [props.taglines, props.taglines.length])

    function onMouseOver () {
        switchTagline(false);
        setIndex(prevState => prevState +1);
        switchAnimateState(animate);
    }

    function onMouseOut () {
        switchTagline(true);
        if (taglines.length === myIndex || myIndex > taglines.length) {
            setIndex(0);
        } else {
            switchAnimateState(animate);
        }
    }
    
    function switchTagline(defaultString) {
        defaultString 
            ? setString(props.defaultString) 
            : setString(taglines[myIndex]);
    }

    // this function is needed for the CSSTransition component, so it switches between the animation states.
    function switchAnimateState(bool) {
        setState(bool => !bool)
    }

    return (
        <button className="hidden lg:flex lg:flex-row text-black focus:outline-none" onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
        <h5>S</h5>
        <SwitchTransition mode='out-in'>
            <CSSTransition 
                key={animate} 
                classNames="fade"
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                }}
            >
                <div>
                    <h5>
                        {`${myString}`}
                    </h5>
                </div>
            </CSSTransition>
        </SwitchTransition>
        </button>
    )
}

OnHoverChangeText.propTypes = {
    taglines: PropTypes.array.isRequired,
    defaultString: PropTypes.string.isRequired
};

export default OnHoverChangeText;