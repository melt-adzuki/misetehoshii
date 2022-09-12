import ButtonImage from "./types/buttons"

type Props = {
    context: CanvasRenderingContext2D
    text: string
    button: ButtonImage
}

export function draw({ context, text, button }: Props) {
    const textSize = context.measureText(text)
    const textWidth = textSize.width + 32

    context.canvas.width = button.start.width + textWidth + button.end.width

    context.drawImage(button.start, 0, 0)
    context.drawImage(button.middle, button.start.width, 0, textWidth, button.middle.height)
    context.drawImage(button.end, button.start.width + textWidth, 0)

    context.font = "16px メイリオ, sans-serif"
    context.fillStyle = button.fontColor
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(text, (button.start.width + textWidth + button.end.width) / 2, button.middle.height / 2)
}
