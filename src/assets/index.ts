import ButtonImage from "../types/buttons"

// Assets
import barBlueStart from "../assets/bar_blue_start.png"
import barBlueMiddle from "../assets/bar_blue_middle.png"
import barBlueEnd from "../assets/bar_blue_end.png"

import barPeacockGreenStart from "../assets/bar_peacockgreen_start.png"
import barPeacockGreenMiddle from "../assets/bar_peacockgreen_middle.png"
import barPeacockGreenEnd from "../assets/bar_peacockgreen_end.png"

import barGreenStart from "../assets/bar_green_start.png"
import barGreenMiddle from "../assets/bar_green_middle.png"
import barGreenEnd from "../assets/bar_green_end.png"

import barYellowStart from "../assets/bar_yellow_start.png"
import barYellowMiddle from "../assets/bar_yellow_middle.png"
import barYellowEnd from "../assets/bar_yellow_end.png"

import barRedStart from "../assets/bar_red_start.png"
import barRedMiddle from "../assets/bar_red_middle.png"
import barRedEnd from "../assets/bar_red_end.png"

import barPinkStart from "../assets/bar_pink_start.png"
import barPinkMiddle from "../assets/bar_pink_middle.png"
import barPinkEnd from "../assets/bar_pink_end.png"

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
    peacockGreen: {
        fontColor: "white",
        start: makeImageFromUrl(barPeacockGreenStart),
        middle: makeImageFromUrl(barPeacockGreenMiddle),
        end: makeImageFromUrl(barPeacockGreenEnd),
    },
    green: {
        fontColor: "white",
        start: makeImageFromUrl(barGreenStart),
        middle: makeImageFromUrl(barGreenMiddle),
        end: makeImageFromUrl(barGreenEnd),
    },
    yellow: {
        fontColor: "white",
        start: makeImageFromUrl(barYellowStart),
        middle: makeImageFromUrl(barYellowMiddle),
        end: makeImageFromUrl(barYellowEnd),
    },
    red: {
        fontColor: "white",
        start: makeImageFromUrl(barRedStart),
        middle: makeImageFromUrl(barRedMiddle),
        end: makeImageFromUrl(barRedEnd),
    },
    pink: {
        fontColor: "white",
        start: makeImageFromUrl(barPinkStart),
        middle: makeImageFromUrl(barPinkMiddle),
        end: makeImageFromUrl(barPinkEnd),
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
