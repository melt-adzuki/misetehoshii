import ButtonImage from "../types/buttons"

// Assets
import barBlueStart from "../assets/bar_blue_start.png"
import barBlueMiddle from "../assets/bar_blue_middle.png"
import barBlueEnd from "../assets/bar_blue_end.png"

import barGreenStart from "../assets/bar_green_start.png"
import barGreenMiddle from "../assets/bar_green_middle.png"
import barGreenEnd from "../assets/bar_green_end.png"

import barDisabledStart from "../assets/bar_disabled_start.png"
import barDisabledMiddle from "../assets/bar_disabled_middle.png"
import barDisabledEnd from "../assets/bar_disabled_end.png"

export const buttonImages: Record<string, ButtonImage> = {
    blue: {
        fontColor: "white",
        start: makeImageFromUrl(barBlueStart),
        middle: makeImageFromUrl(barBlueMiddle),
        end: makeImageFromUrl(barBlueEnd),
    },
    green: {
        fontColor: "white",
        start: makeImageFromUrl(barGreenStart),
        middle: makeImageFromUrl(barGreenMiddle),
        end: makeImageFromUrl(barGreenEnd),
    },
    disabled: {
        fontColor: "black",
        start: makeImageFromUrl(barDisabledStart),
        middle: makeImageFromUrl(barDisabledMiddle),
        end: makeImageFromUrl(barDisabledEnd),
    },
}

function makeImageFromUrl(url: string): HTMLImageElement {
    const image = new Image()
    image.src = url
    return image
}
