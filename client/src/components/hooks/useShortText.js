import { useState, useEffect } from 'react';

export default function useShortText(text, start = 0, padding = 5, maxLength = 250) {
    const [shortText, setShortText] = useState('')

    useEffect( () => {
        const padEndLength = text.length < maxLength ? text.length : maxLength

        setShortText(text
            .slice(start, maxLength)
            .padEnd(padEndLength + padding, '. . .')
        )
    }, [text, maxLength, padding, start])

    return shortText
} 