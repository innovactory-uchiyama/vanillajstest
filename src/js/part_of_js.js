const increment = (count) => {
    count = count + 1
    if(count == Number.MAX_VALUE){
        count = 0
    }
    return count
}

export { increment }
