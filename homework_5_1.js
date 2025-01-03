function pow(x, y) {
    let z = 1
    for (let i = 0; i < y; i++){
        z *= x
    }
    console.log("Результат: " + x + " в ступені " + y + " = " + z);
}

pow(2, 3);