export const getCardClassName = (isSelected, isNext, isPrevious) => {

    const cardStyles = {
        selected: "opacity-100 scale-100 z-[2] translate-x-[0%]",
        next: "opacity-30 scale-95 translate-x-[20%] lg:translate-x-1/2 xl:translate-x-[70%]",
        previous: "opacity-30 scale-95 translate-x-[-20%] lg:translate-x-[-50%] xl:translate-x-[-70%]"
    }

    return `
        transition-all duration-500 ease-in-out will-change-transform
        absolute opacity-0
        ${isSelected ? cardStyles.selected : "" }
        ${isNext ? cardStyles.next : "" }
        ${isPrevious ? cardStyles.previous : "" }
    `
}