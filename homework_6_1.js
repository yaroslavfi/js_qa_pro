function checkProbabilityTheory(count){
    let even_numbers = 0
    let odd_numbers = 0
    for (let i = 0; i < count; i++){
        let random_num = getRandomInt(100, 1000);
        console.log(random_num)
        if(random_num % 2 == 0){
            even_numbers += 1
        }
        else{
            odd_numbers += 1
        }
    }
    console.log(`Numbers generated: ${count}`)
    console.log(`Even numbers: ${even_numbers} \nOdd numbers: ${odd_numbers}`)
    let percentageRatio = getPercentageRatio(even_numbers, odd_numbers)
    console.log(`Even/Odd percentage: ${percentageRatio}`)
}


function getPercentageRatio(first_value, second_value){
    if (first_value < second_value || first_value > second_value){
        let first_value_percent = Math.round((first_value / (first_value + second_value)) * 100)
        let second_value_percent = Math.round((second_value / (first_value + second_value)) * 100)
        return `${first_value_percent}/${second_value_percent}`
     }
     else{
         return "50/50"
     }
}


function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  

checkProbabilityTheory(100)