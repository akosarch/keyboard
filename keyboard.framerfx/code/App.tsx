import * as React from "react"
import { useState, useEffect } from "react"
import { Override, Data, Frame } from "framer"

// Learn more: https://framer.com/docs/overrides/

const data = Data({
    text: "",
})

export function HandleText(props): Override {
    const text = data.text.substring(0, data.text.length - 1)
    const cursor = `<span style="background: #000; -webkit-text-fill-color: #fff">${data.text.substring(
        data.text.length - 1,
        data.text.length
    )}</span>`
    return {
        text: text + cursor,
    }
}

export function HandlePlaceholder(props): Override {
    return {
        opacity: data.text ? 0 : 0.4,
    }
}

export function HandleKeyboard(props): Override {
    return {
        setMod2: data.text ? "a" : "b", // start from capital letter
        onValueChange(value) {
            data.text = value
        },
    }
}

export function KeyTapResponse(props): Override {
    return {
        whileTap: { background: "#CCC" },
    }
}
