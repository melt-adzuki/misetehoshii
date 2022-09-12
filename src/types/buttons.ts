type ButtonImage = {
    [K in "start" | "middle" | "end"]: HTMLImageElement
} & {
    fontColor: "white" | "black"
}

export default ButtonImage
