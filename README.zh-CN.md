# countdown

> 时间倒计时工具，提供倒计时队列功能，避免开多个计时器，支持清除单个倒计时任务。
> 更高效的倒计时。

## 使用方法：

- 添加倒计时任务

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
    // do something
    console.log(remaining)
}
addCountdown(taskName, taskParams, task)
```

- 清除倒计时

```javascript
// 仅仅清除 skill 任务
clearCountdown('skill')
// 清除全部任务
clearCountdown()
```
