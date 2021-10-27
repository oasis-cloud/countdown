# countdown

> 时间倒计时工具，提供倒计时队列功能，避免开多个计时器，支持清除单个倒计时任务。
> 更高效的倒计时。

### 使用方法：

1. 添加倒计时任务
```javascript
import countdown from '@oasis-cloud/countdown'
// 解构使用的方法
const [clearCountdown, addCountdown] = countdown()
// 倒计时任务名称
const taskName = 'skill'
// 倒计时任务参数
const taskParams = {
    remaining: 1000, // 剩余时间
    unit: 'sec' // 剩余时间单位
}
// 倒计时任务
const task = (remaining) => {
    // todo something
    console.log(remaining)
}
addCountdown(taskName, taskParams, task)
```
2. 清除倒计时
```javascript
// 仅仅清除 skill 任务
clearCountdown('skill')
// 清除全部任务
clearCountdown()
```

### Todo
1. 清除单个任务，如果任务队列为空，则清除定时器
2. 清除全部任务同时清除定时器
3. 新增任务时检测定时器是否被清除，如果被清除需要重启定时器
