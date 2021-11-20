function first(num1, num2) {
    if (num1 > num2) {
        console.log('Первое число больше второго')
    } else if (num1 < num2) {
        console.log('Второе число больше')
    } else {
        console.log('Они равны')
    }
}

first(2, 3)
first(5, 1)
first(5, 5)