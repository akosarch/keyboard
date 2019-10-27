import * as React from "react"
import { useState, useEffect } from "react"
import { Override, Data, Frame } from "framer"

// Learn more: https://framer.com/docs/overrides/

const data = Data({
    pastQuery: "",
    currQuery: "",
    calcValue: "",
    initialValue: "",
    offsetLines: 0,
})

export function HandleText(props): Override {
    const [cursor, setCursor] = useState("")
    useEffect(function() {
        let time = 0
        const delay = 0.75
        const interval = setInterval(function() {
            setCursor(time % 2 ? "|" : "")
            time++
        }, delay * 1000)
        return () => clearInterval(interval)
    }, [])
    return {
        text:
            `<div style="-webkit-text-fill-color:#999; font-size:16px; line-height: 32px;">${data.pastQuery}</div>` +
            data.currQuery +
            cursor,
        bottom: data.offsetLines * 32,
    }
}

export function HandleKeyboard(props): Override {
    return {
        initialValue: data.initialValue,
        onValueChange(value) {
            data.currQuery = value
        },
        // customTemplate: {
        //     keys: {
        //         m1a: "7 8 9 backspace return 4 5 6 + - 1 2 3 * / 0--2 . ( )",
        //     },
        //     inRow: 4,
        // },
    }
}

export function HandleReturnKey(props): Override {
    return {
        onTap(value) {
            const calculated = (
                Math.round(eval(data.currQuery) * 100) / 100
            ).toString()
            data.calcValue = calculated
            data.pastQuery += `${data.currQuery}\n`
            data.currQuery += calculated
            data.initialValue = calculated
            data.offsetLines += 1
        },
        whileTap: { background: "#666" },
    }
}

export function KeyTapResponse(props): Override {
    return {
        whileTap: { background: "#666" },
    }
}
