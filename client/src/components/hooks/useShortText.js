import { useState, useEffect } from 'react';

export default function useShortText(text, start = 0, padding = 5, maxLength = 250) {
    const [shortText, setShortText] = useState('')

    useEffect( () => {
        setShortText(text
            .slice(start, maxLength)
            .padEnd(maxLength + padding, '. . .')
        )
    }, [text, maxLength, padding, start])

    return shortText
} 