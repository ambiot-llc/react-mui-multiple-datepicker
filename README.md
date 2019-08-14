# Material-UI Multiple Dates Picker

[![npm version](https://img.shields.io/npm/v/@randex/material-ui-multiple-dates-picker)](https://www.npmjs.com/package/@randex/material-ui-multiple-dates-picker)

![](https://raw.githubusercontent.com/randex/react-multiple-datepicker/master/demo/datepicker-screenshot.png)

Lets user pick more than one date from the date picker.

## Motivation

This is a fork of `react-multiple-datepicker`. I needed a date picker that is built on [Material-UI](https://github.com/mui-org/material-ui) and supports multiple dates selections, couldn't find one, so here it is!

 ## Features

- Based on Material-UI components with `Dialog` component being the root of it
- Choose dates right from the calendar
- See all selected dates on the list
- Click on any selected date to remove it (either on calendar or on the list)
- Customize button labels and titles
- Its appearance is based on your configuration of Material-UI theme

## Installation

To install the component run this command:

```
npm i -S @randex/material-ui-multiple-dates-picker
```

## Usage example

```javascript
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker'

const Example = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        Select Dates
      </Button>
      <MultipleDatesPicker
        open={open}
        selectedDates={[]}
        onCancel={() => setOpen(false)}
        onSubmit={dates => console.log('selected dates', dates)}
      />
    </div>
  )
}
```

## API

### MultipleDatesPicker (default export)

| Prop Name     | Type            | Default | Description                                                  |
| ------------- | --------------- | ------- | ------------------------------------------------------------ |
| open          | bool, required  | false   | Is Date Picker Dialog open or not                            |
| selectedDates | Array of `Date` | []      | `MultipleDatesPicker` uses its own internal array of selected date and sends it only when user clicks Submit button. But you can still use this variable to pass initial value to it — array will be copied. |
| onCancel      | func, required  | null    | Fires when user clicks Cancel button. You need to handle closing the picker when this handler fires. |
| onSubmit      | func, required  | null    | Fires when user clicks Submit button with only one parameter: array of selected `Date`s: `onSubmit(selectedDates)`. You need to handle closing the picker when this handler fires. |

## Contributing

I don't have enough time to maintain this library, so pull requests will be greatly appreciated!

1. Clone the repository: `git clone https://github.com/randex/material-ui-multiple-dates-picker.git`
2. Get inside the folder: `cd material-ui-multiple-dates-picker`
3. Install all the general dependencies: `npm i`
4. Get inside the `app` folder: `cd app`
5. Install all dependencies needed to launch the demo app: `npm i`
6. Run `npm start` to launch the demo app.
7. Library is located under `app/src/lib`. Edit the code and watch the changes in the browser.

Happy coding and thank you for your help!

