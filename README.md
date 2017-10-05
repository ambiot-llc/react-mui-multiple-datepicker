# React Multiple Datepicker 📅
![](https://raw.githubusercontent.com/codeinfuse/react-multiple-datepicker/master/demo/react-multiple-datepicker-screenshot.png)

Let's the user pick more than one date from the date picker.

### Why?
We created React Multiple Datepicker after we couldn't find a realiable datepicker which supports multiple datepicking option as required in one of our client project [Codeinfuse](https://www.codeinfuse.com).

### Usage
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
- [ ] Make it responsive
- [ ] Support for `onDateSelect` prop.
- [ ] Add test cases

## Development


## Brought To You By
[![](https://www.codeinfuse.com/images/codeinfuse-logo.svg)](https://www.codeinfuse.com)