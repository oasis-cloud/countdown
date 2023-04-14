export default function formatRemaining(remaining: string) {
    const remainingNum = Number(remaining)
    const hour = ((remainingNum / (60 * 60)) % 24).toString().padStart(2, '0')
    const min = ((remainingNum / (60)) % 60).toString().padStart(2, '0')
    const sec = ((remainingNum) % 60).toString().padStart(2, '0');
    return `${hour}:${min}:${sec}`;
}
