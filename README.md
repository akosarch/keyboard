# Keyboard
This Framer X component gives you the functional keyboard which can be fully customized: from the appearance of the different keys to the layout and behavior. 

This package contains the single code component (the keyboard itself) and multiple design components for the keys. Just connect them to the keyboard and you're locked and loaded. Download [example file](https://github.com/akosarch/keyboard/tree/master/keyboard.framerfx) for the reference.

If you like the component and want to contribute or leave feedback hit me via [FACEBOOK](https://www.facebook.com/anton.kosarchyn), [SPECTRUM](https://spectrum.chat/users/anton-kosarchyn) or [GITHUB](https://github.com/akosarch/keyboard)

### Why is it useful

Sometimes you'd like to use the native mobile keyboard in your prototypes, but soon you find that native keyboard behavior is unpredictable in browsers (especially on iOS) and hard to control. Solution: use the keyboard from this package and control it with overrides.

### How to use

1. Drag the keyboard to the canvas. 
2. Drag the design components to the canvas and connect to the `Keys templates` section of the keyboard.
3. Use a simple override to obtain typed value.
4. Customize keyboard if needed (*for nerds*) 🤓
5. Profit x999 😱

#### Special key names

To use built in functionality you should give your keys special names. 
You can use custom keys as well. See the **Customization** section for the details.

| Special name                   | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `$value`                       | This one will be used to render the regural key values like numbers and letters. Also this one should be converted to the **design component with a text override** turned on and named `value`. |
| `$space`                       | Adds a space on tap. Equalt to ` `.                          |
| `$return`                      | Breaks the line by default. Equals to `/n`.                  |
| `$backspace`                   | Removes the last sybol from the string.                      |
| `$m1` , `$m2`                  | Functional keys to toggle between mods.                      |
| `$m1a`, `$m1b`, `$m2a`, `$m2b` | Functional keys to toggle between sub-modes of a current mode. |

#### Keyboard props

| Property          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `template`        | Template is the main configuration of the keyboard. It defines each key's value, size and position on a keyboard. When set to `custom` will use the custom layout from `.json` file or overrides. |
| `customTemplate`  | You can create your own layouts by overriding this prop or uploading a `.json` file with a template. See the **Customization** section for more details about templating. |
| `widthType`       | Toggles between the `auto` and `custom` width of the keys. If `auto` is selected the width of the key is calculated as a fraction of the keyboard width, else `keyWidth` is used. |
| `keyWidth`        | Explicitly sets the width of the single key. Visible only if `widthType` is set to `custom`. |
| `keyHeight`       | Explicitly sets the height of the single key.                |
| `gap`             | Sets gap between the keys.                                   |
| `background`      | Defines the background color of the keyboard.                |
| `initialValue`    | Sets the initial value of the keyboard.                      |
| `onValueChange()` | Callback that returns a modified value.                      |
| `setMod`          | Switches the active keyboard layout to the desired mode: `m1` or `m2` |
| `setSub`          | Switches the active keyboard layout to the desired sub-mode: `a` or `b` |

### Overrides

#### Get value from the keyboard

The keyboard is a stateful component. Stateful means it has it's own inner state where it stores the value typed by the user. The most common override you'll need is to obtain the value from the keyboard. Use `onValueChange()` callback:

```jsx
const data = Data({
    text: "",
})

export function HandleKeyboard(props): Override {
    return {
        // This callback returns a value
        // while the user is typing
        onValueChange(value) {
            data.text = value
        },
    }
}
```

#### Reset/set value explicitly

While normally you wouldn't set the keyboard value explicitly, sometimes it's useful to override it. Like when you want to reset its value between the different appears. Use the following snippet for that: 

```jsx
const data = Data({
    reset: false,
})

export function HandleKeyboard(props): Override {
    return {
        // This callback returns a value
    		initialValue: data.reset && "",
    }
}
```

#### Change mode dynamically

Sometimes you want to control mode switch of the keyboard. The most common case for that is when you start typing you often start from the capital letter. Just override the `setMod` property:

```jsx
const data = Data({
    text: "",
})

export function HandleKeyboard(props): Override {
    return {
        // Switch layout to letters
        setMod: "m1", 
        // Start from the capital letter
        setSub: data.text ? "a" : "b",
        onValueChange(value) {
            data.text = value
        },
    }
}
```

#### Highlight keys while tapping

**Last but not least:** add your keyboard a tint of feedback. Just assign the following override to the inner frame of the key's design component:

```jsx
export function KeyTapResponse(props): Override {
    return {
        // Light theme
        whileTap: { background: "#CCC" },
        // Dark theme 😈
        whileTap: { background: "#666" },	
    }
}
```



### Customization

The keyboard is **fully customizable**, so you're able to create your own layouts! But how?! There are two ways basically: 

1. Pass your custom template to the `customTemplate` through overrides
2.  From UI select `Template > Custom` and below upload the `.json` file with your template.

The first option allows you to preview the result in realtime, however, it's not rendered on the canvas. The second option is rendered on the canvas but doesn't allow you to change template on the go. 

**Recommended flow:** use overrides when creating the custom layout, and once you're happy with the result — copy that into separate `.json` file and upload through UI.

#### Template structure

In general, template is a set of single/couple keyboard layouts (mods) defined within `keys` and `inRow` property. Here is a template for the `Text iOS` keyboard:

```jsx
{
    keys: {
        m1a: `q w e r t y u i o p --.5 a s d f g h j k l --.5 $m1a--1.25 --.25 z x c v b n m --.25 $backspace--1.25 $m1--2.5 $space--5 $return--2.5`,
        m1b: `Q W E R T Y U I O P --.5 A S D F G H J K L --.5 $m1b--1.25 --.25 Z X C V B N M --.25 $backspace--1.25 $m1--2.5 $space--5 $return--2.5`,
        m2a: `1 2 3 4 5 6 7 8 9 0 - / : ; ( ) $ & @ " $m2a--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 $backspace--1.25 $m2--2.5 $space--5 $return--2.5`,
        m2b: `[ ] { } # % ^ * + = _ / | ~ < > € $ £ ∙ $m2b--1.25 --.25 .--1.4 ,--1.4 ?--1.4 !--1.4 '--1.4 --.25 $backspace--1.25 $m2--2.5 $space--5 $return--2.5`
    },
    inRow: 10
}
// Note: this is written in .js format
// For the .json you should wrap each property with a "" so the keys becomes "keys" etc
```

It might look complex at a glance, but it's not! Let's break it apart: 

```jsx
{
    keys: {}, // Holds all the keys information like the key-value and its ratio
    inRow: 10 // Defines the maximum number of keys in a row
}
```

Now get it? But what are those `m1a`,  `m1b`,  `m2a`,  `m2b` ? Those are what I call keyboard modes. Basically they hold different keyboard layouts which could be toggled. Mods could be nested. Eg top-level mod `m1` holds the layout with letters only. It has the 2 sub-modes — `a` and `b`, for the **lowercase** and **uppercase** accordingly. The combination of the 1st level mode `m1` and 2nd level mode `a` gives the layout template of `m1a`.

```jsx
{
    keys: {
        m1: { // Mod1: Letters
            m1a: 'abc', // lowercase
            m1b: 'ABC', // UPPERCASE
        },
        m2: {	// Mod2: Numbers & Symbols
            m2a: '123', // numbers
            m2b: '#+=', // symbols
        },
    },
}
// Note: m1 and m2 are omitted in the final template, so we write only m1a, m1b, m2a, m2b
```

#### Single layout

Now once we're good with the template structure in general, let's take a look at a single layout:

```jsx
`q w e r t y u i o p --.5 a s d f g h j k l --.5 $m1a--1.25 --.25 z x c v b n m --.25 $backspace--1.25 $m1--2.5 $space--5 $return--2.5`
```

It's written as a set of symbols separated with spaces. Mostly symbols represent key values like `q w e`, except the specials. They start with a `$` prefix; those are the keys with the special functionality, eg `$backspace` (for the full list see the top section). 

You have probably noticed the `--` symbol and a number after it. This notation defines a **ratio of a key** relative to the other keys in a row. So If you see the `$space--5` it means to render a space key 5 times wider than a single key. If the number is omitted – ratio 1 will be applied for that key. Think of it as of [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) if you're familiar with CSS Flexbox. You can also **skip the value** but specify a ratio like this `--2`. In that case an empty spacer element will be rendered with a width set to 2.

#### Using custom keys

You can use just any number of **custom keys** beside the default one. Just name custom keys properly, starting with a `$` prefix, and include those names into the layout template as described above.

### Known issues and updates

The keyboard component doesn't work with the included key component. The issue is under investigation.
As a **temporary solution** you can creat your own design key component, turn on text override and name it `value` as well.

#### Updates

##### November 23, 2019

- Added support for the `custom keys`
- Removed the need to plug each key to the separate keyboard node. Just use the `Keys templates` section of the component to plug all the keys you want to use. Just don't forget to name your keys properly first!