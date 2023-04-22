# countdown

> The time countdown tool provides a countdown queue function, avoids opening multiple timers, and supports clearing a single countdown task.
> More efficient countdown.

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
// 仅仅清除 skill 任务
clearCountdown('skill')
// 清除全部任务
clearCountdown()
```
