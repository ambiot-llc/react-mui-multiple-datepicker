# Material UI Multiple Dates Picker

![](https://raw.githubusercontent.com/randex/react-multiple-datepicker/master/demo/datepicker-screenshot.png)

Let's the user pick more than one date from the date picker.

## Motivation

After looking at various date picking libraries out there I couldn't find a single one who lets users pick more than one date without enforcing a range, so I decided to write one myself.

This is a fork of `react-multiple-datepicker`. I needed a date picker that is built on [Material-UI](https://github.com/mui-org/material-ui) and supports multiple dates selections, couldn't find one, so here it is!

 ## Features

- Based on Material-UI components with `Dialog` component being the root of it.
- Choose dates right from the calendar
- See all selected dates on the list
- Click on any selected date to remove it (either on calendar or on the list)
- Customize button labels and titles

## Usage example

```
npm i -S @randex/material-ui-multiple-dates-picker
```

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

I don't enough time to maintain this library, so pull requests will be greatly appreciated!

1. Clone the repository: `git clone https://github.com/randex/material-ui-multiple-dates-picker.git`
2. Get inside the folder: `cd material-ui-multiple-dates-picker`
3. Install all the general dependencies: `npm i`
4. Get inside the demo

