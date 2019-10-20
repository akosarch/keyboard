import * as React from "react"
import { useState, useEffect } from "react"
import { Frame, addPropertyControls, ControlType, useCycle } from "framer"

export function Keyboard({
    gap,
    keyHeight,
    background,
    initValue,
    onValueChange,
    customKeys,
    templates,
    template,
    keyTemp,
    backspaceTemp,
    spaceTemp,
    returnTemp,
    ...rest
}) {
    const [value, setValue] = useState(initValue)
    const [elements, setElements] = useState([])
    const [mod1, cycleMod1] = useCycle(0, 1)
    const [mod2, cycleMod2] = useCycle(0, 1)

    // render elements
    useEffect(() => {
        const { keys, inRow } = templates[template]
        const elem = keys[mod1][mod2].split(" ").map((key, i) => {
            let [val, ratio = 1] = key.split("--")
            return (
                <Frame
                    key={i}
                    style={{
                        height: keyHeight,
                        background: null,
                        position: "relative",
                        width: `calc(((100% / ${inRow}) * ${ratio})`,
                        padding: gap / 2,
                    }}
                >
                    {renderTemplate(val, i)}
                </Frame>
            )
        })
        setElements(elem)
    }, [template, mod1, mod2, keyTemp, backspaceTemp, spaceTemp, returnTemp])

    // callback on value change
    useEffect(() => {
        onValueChange(value)
    }, [value])

    function addValue(val) {
        setValue(value => value + val)
    }

    function removeValue() {
        setValue(value => value.substring(0, value.length - 1))
    }

    function toggleMod1() {
        cycleMod1()
    }

    function toggleMod2() {
        cycleMod2()
    }

    function renderTemplate(val, i) {
        switch (val) {
            case "":
                break
            case "backspace":
                return backspaceTemp[0]
                    ? React.cloneElement(backspaceTemp[0], {
                          style: keyStyle,
                          onTap() {
                              removeValue()
                          },
                      })
                    : undefined
            case "space":
                return spaceTemp[0]
                    ? React.cloneElement(spaceTemp[0], {
                          style: keyStyle,
                          onTap() {
                              addValue(" ")
                          },
                      })
                    : undefined
            case "return":
                return returnTemp[0]
                    ? React.cloneElement(returnTemp[0], {
                          style: keyStyle,
                      })
                    : undefined
            case "mod1_a":
            case "mod1_b":
                return rest[val][0]
                    ? React.cloneElement(rest[val][0], {
                          style: keyStyle,
                          onTap() {
                              toggleMod1()
                          },
                      })
                    : undefined
            case "mod2_a":
            case "mod2_b":
            case "mod2_c":
            case "mod2_d":
                return rest[val][0]
                    ? React.cloneElement(rest[val][0], {
                          style: keyStyle,
                          onTap() {
                              toggleMod2()
                          },
                      })
                    : undefined
            default:
                return keyTemp[0]
                    ? React.cloneElement(keyTemp[0], {
                          style: keyStyle,
                          value: val,
                          onTap() {
                              addValue(val)
                          },
                      })
                    : undefined
        }
    }
    return (
        <Frame
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: gap / 2,
                color: "#999",
            }}
            background={background}
            size="100%"
        >
            {keyTemp ? elements : "Connect keys"}
        </Frame>
    )
}

const keyStyle = {
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
}

Keyboard.defaultProps = {
    initValue: "",
    height: 128,
    width: 240,
    gap: 6,
    itemHeight: 48,
    keysInRow: 3,
    background: "#EBEBEB",
    onValueChange(value: number) {},
    template: "numeric-iOS",
    templates: {
        numeric_iOS: {
            keys: [["1 2 3 4 5 6 7 8 9 0 00 backspace"]],
            inRow: 3,
        },
        text_iOS: {
            keys: [
                [
                    `q w e r t y u i o p --.5 a s d f g h j k l --.5 mod2_a--1.25 --.25 z x c v b n m --.25 backspace--1.25 mod1_a--2.5 space--5 return--2.5`,
                    `Q W E R T Y U I O P --.5 A S D F G H J K L --.5 mod2_b--1.25 --.25 Z X C V B N M --.25 backspace--1.25 mod1_a--2.5 space--5 return--2.5`,
                ],
                [
                    `1 2 3 4 5 6 7 8 9 0 - / : ; ( ) $ & @ " mod2_c--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 mod1_b--2.5 space--5 return--2.5`,
                    `[ ] { } # % ^ * + = _ / | ~ < > € $ £ ∙ mod2_d--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 mod1_b--2.5 space--5 return--2.5`,
                ],
            ],
            inRow: 10,
        },
    },
}

addPropertyControls(Keyboard, {
    template: {
        title: "Template",
        type: ControlType.Enum,
        defaultValue: "numeric_iOS",
        options: ["numeric_iOS", "text_iOS", "custom"],
        optionTitles: ["Numeric iOS", "Text iOS", "Custom"],
    },
    keyHeight: {
        title: "Key height",
        type: ControlType.Number,
        defaultValue: 48,
    },
    gap: {
        title: "Gap",
        type: ControlType.Number,
        defaultValue: 6,
    },
    background: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: "#EBEBEB",
    },
    keyTemp: {
        title: "Key",
        type: ControlType.ComponentInstance,
    },
    backspaceTemp: {
        title: "Backspace",
        type: ControlType.ComponentInstance,
    },
    spaceTemp: {
        title: "Space",
        type: ControlType.ComponentInstance,
    },
    returnTemp: {
        title: "Return",
        type: ControlType.ComponentInstance,
    },
    mod1_a: {
        title: "Mod 1 a",
        type: ControlType.ComponentInstance,
    },
    mod1_b: {
        title: "Mod 1 b",
        type: ControlType.ComponentInstance,
    },
    mod2_a: {
        title: "Mod 2 a",
        type: ControlType.ComponentInstance,
    },
    mod2_b: {
        title: "Mod 2 b",
        type: ControlType.ComponentInstance,
    },
    mod2_c: {
        title: "Mod 2 c",
        type: ControlType.ComponentInstance,
    },
    mod2_d: {
        title: "Mod 2 d",
        type: ControlType.ComponentInstance,
    },
})
