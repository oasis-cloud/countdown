type Unit = 'ms' | 'sec' | 'min' | 'hour'

interface TaskParams {
    remaining: number,
    unit: Unit
}

interface QueueItem {
    taskName: string;
    taskParams: TaskParams
    task: (remaining: number) => void
}


function processTaskRemaining({remaining, unit}: TaskParams, ticktockStep: number) {
    let reduce = ticktockStep
    switch (unit) {
        case 'ms':
            reduce = ticktockStep
            break
        case 'sec':
            reduce = ticktockStep / ticktockStep
            break
        case 'min':
            reduce = ticktockStep / (ticktockStep * 60)
            break
        case 'hour':
            reduce = ticktockStep / (ticktockStep * 60 * 60)
            break
        default:
            break
    }
    return {remaining: remaining - reduce, unit}
}

export default function countdown(ticktockStep = 1000) {
    let taskQueue: Array<QueueItem> = []
    const intervalID = setInterval(() => {
        taskQueue.map((t) => {
            t.taskParams = processTaskRemaining(t.taskParams, ticktockStep)
            t.task(t.taskParams.remaining)
        })
    }, ticktockStep)
    const clearCountdown = (taskName: string | Array<string>) => {
        if (taskName) {
            taskQueue = taskQueue.filter((t) => {
                if (typeof taskName === 'string') {
                    return t.taskName != taskName
                }
                if (Array.isArray(taskName)) {
                    return taskName.indexOf(t.taskName) == -1
                }
            })
        } else {
            clearInterval(intervalID)
        }
    }
    const addCountdown = (taskName: string, taskParams: TaskParams, task: (remaining: number) => void) => {
        if (taskQueue.filter((t) => t.taskName == taskName).length) return
        taskQueue.push({
            taskName,
            taskParams,
            task,
        })
    }
    return [clearCountdown, addCountdown]
}
