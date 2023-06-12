import countdown, { Unit } from './countdown'
import formatRemaining from './utils/formatRemaining'

export type {
  Unit,
  TaskParams,
  QueueItem,
  AddCountdown,
  ClearCountdown,
} from './countdown'
export default { countdown, formatRemaining }
