import * as React from "react"
import { useState, useEffect } from "react"
import { Frame, addPropertyControls, ControlType, useCycle } from "framer"

export function Keyboard({
    gap,
    setMod,
    setSub,
    widthType,
    keyWidth,
    keyHeight,
    background,
    initialValue,
    onValueChange,
    customKeys,
    templates,
    template,
    customTemplate,
    customTemplateUrl,
    keysTemplates,
}) {
    const [value, setValue] = useState(initialValue)
    const [elements, setElements] = useState([])
    const [mod, cycleMod] = useCycle("m1", "m2")
    const [sub, cycleSub] = useCycle("a", "b")

    if (customTemplateUrl) {
        fetch(customTemplateUrl)
            .then(response => response.json())
            .then(json => (customTemplate = json))
    }

    // render elements
    useEffect(() => {
        const temp =
            template === "custom" ? customTemplate : templates[template]
        const { keys, inRow } = temp
        const elem = keys[mod + sub].split(" ").map((key, i) => {
            let [val, ratio = 1] = key.split("--")
            return (
                <Frame
                    key={i}
                    style={{
                        background: null,
                        position: "relative",
                        height: keyHeight + gap,
                        width:
                            widthType === "auto"
                                ? `calc(((100% / ${inRow}) * ${ratio})`
                                : (keyWidth + gap) * ratio,
                        padding: gap / 2,
                    }}
                >
                    {renderTemplate(val, i)}
                </Frame>
            )
        })
        setElements(elem)
    }, [template, customTemplate, mod, sub, keysTemplates])

    // callback on value change
    useEffect(() => {
        onValueChange(value)
    }, [value])

    // callback on value change
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    // callback on mod change
    useEffect(() => {
        setMod && cycleMod(setMod)
        setSub && cycleSub(setSub)
    }, [setMod, setSub])

    function addValue(val) {
        setValue(value => value + val)
    }

    function removeValue() {
        setValue(value => value.substring(0, value.length - 1))
    }

    function findTemplate(templates, name) {
        return templates.filter(element => {
            const elementName = element.props.name.split("/").pop()
            return elementName === name
        })
    }

    function renderTemplate(val, i) {
        let keyTemplate
        switch (val) {
            case "":
                return undefined

            case "backspace":
                keyTemplate = findTemplate(keysTemplates, val)
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
                          style: keyStyle,
                          onTap() {
                              removeValue()
                          },
                      })
                    : undefined
            case "space":
                keyTemplate = findTemplate(keysTemplates, val)
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
                          style: keyStyle,
                          onTap() {
                              addValue(" ")
                          },
                      })
                    : undefined
            case "return":
                keyTemplate = findTemplate(keysTemplates, val)
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
                          style: keyStyle,
                          onTap() {
                              addValue("\n")
                          },
                      })
                    : undefined
            case "m1":
            case "m2":
                keyTemplate = findTemplate(keysTemplates, val)
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
                          style: keyStyle,
                          onTap() {
                              cycleMod()
                          },
                      })
                    : undefined
            case "m1a":
            case "m1b":
            case "m2a":
            case "m2b":
                keyTemplate = findTemplate(keysTemplates, val)
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
                          style: keyStyle,
                          onTap() {
                              cycleSub()
                          },
                      })
                    : undefined
            default:
                keyTemplate = findTemplate(keysTemplates, "value")
                return keyTemplate[0]
                    ? React.cloneElement(keyTemplate[0], {
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
                flexFlow: "column-wrap",
                alignItems: "center",
                justifyContent: "center",
                padding: gap / 2,
                color: "#999",
            }}
            background={background}
            size="100%"
        >
            {keysTemplates[0] ? elements : "Connect keys"}
        </Frame>
    )
}

const keyStyle = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
}

Keyboard.defaultProps = {
    initialValue: "",
    height: 128,
    width: 240,
    gap: 6,
    itemHeight: 48,
    background: "#EBEBEB",
    onValueChange(value: string) {},
    customTemplateUrl: "",
    customTemplate: { keys: { m1a: "a b c" }, inRow: 3 },
    template: "numeric-iOS",
    templates: {
        numeric_iOS: {
            keys: {
                m1a: "1 2 3 4 5 6 7 8 9 0 00 backspace",
            },
            inRow: 3,
        },
        text_iOS: {
            keys: {
                m1a: `q w e r t y u i o p --.5 a s d f g h j k l --.5 m1a--1.25 --.25 z x c v b n m --.25 backspace--1.25 m1--2.5 space--5 return--2.5`,
                m1b: `Q W E R T Y U I O P --.5 A S D F G H J K L --.5 m1b--1.25 --.25 Z X C V B N M --.25 backspace--1.25 m1--2.5 space--5 return--2.5`,
                m2a: `1 2 3 4 5 6 7 8 9 0 - / : ; ( ) $ & @ " m2a--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 m2--2.5 space--5 return--2.5`,
                m2b: `[ ] { } # % ^ * + = _ / | ~ < > € $ £ ∙ m2b--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 backspace--1.25 m2--2.5 space--5 return--2.5`,
            },
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
    customTemplateUrl: {
        hidden: ({ template }) => template !== "custom",
        title: "Custom",
        type: ControlType.File,
        allowedFileTypes: ["json"],
    },
    widthType: {
        title: "Width type",
        type: ControlType.SegmentedEnum,
        defaultValue: "auto",
        options: ["auto", "custom"],
        optionTitles: ["Auto", "Custom"],
    },
    keyWidth: {
        hidden: ({ widthType }) => widthType !== "custom",
        title: "Key width",
        type: ControlType.Number,
        defaultValue: 48,
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
    keysTemplates: {
        title: "Keys templates",
        type: ControlType.Array,
        propertyControl: { type: ControlType.ComponentInstance },
    },
})
