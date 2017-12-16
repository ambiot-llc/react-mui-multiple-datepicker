# React Multiple Datepicker 📅

[![](https://raw.githubusercontent.com/codeinfuse/react-multiple-datepicker/master/demo/react-multiple-datepicker-screenshot.png)](https://codesandbox.io/s/p7q599zlqq)

Let's the user pick more than one date from the date picker.

## Motivation

After looking at various date picking libraries out there I couldn't find a single one who lets users pick more than one date without enforcing a range, so I decided to write one myself.

## Usage

```
yarn add react-multiple-datepicker
```

```javascript
import MultipleDatePicker from 'react-multiple-datepicker'


render() {
  <MultipleDatePicker
    onSubmit={dates => console.log('selected date', dates)}
  />
}
```

## Roadmap

* [ ] Make it responsive
* [ ] Support for `onDateSelect` prop.
* [ ] Add test cases

## Note From Author

Hi, thanks for checking out this library. You can read more about me at https://bilalbudhani.com/about or you can follow me at https://twitter.com/BilalBudhani
