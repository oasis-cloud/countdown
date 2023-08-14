# countdown

> The time countdown tool provides a countdown queue function, avoids opening multiple timers, and supports clearing a single countdown task.
> More efficient countdown.

## Install
```shell
npm install @oasis-cloud/countdown
```

## Demo

- Add countdown task

```javascript
import countdown from '@oasis-cloud/countdown'

const [clearCountdown, addCountdown] = countdown()

const taskName = 'skill'

const taskParams = {
    remaining: 1000,
    unit: 'sec'
}

const task = (remaining) => {
    // do something
    console.log(remaining)
}
addCountdown(taskName, taskParams, task)
```

- Clear countdown

```javascript
// Only clears skill tasks
clearCountdown('skill')
// clear all tasks
clearCountdown()
```
