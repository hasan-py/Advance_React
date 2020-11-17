export const buyBook = () => {
    return {
        type: "BUY"
    }
}

export const changeMulti = (text) => {
    return {
        type: "multi",
        payload: text
    }
}