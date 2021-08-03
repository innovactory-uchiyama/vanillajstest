export function increment(count: number): number {
    count = count + 1
    if (count == Number.MAX_VALUE) {
        count = 0
    }
    return count
}
