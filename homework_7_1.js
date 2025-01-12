let services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    price() {
        let sum = 0
        for (let i in this) {
            if (typeof this[i] !== 'function') {
                sum += parseFloat(this[i])
            } 
        }
        return 'Сума всіх послуг: ' + sum + " грн"
    },
    minPrice() {
        let min = Infinity;
        for (let i in this) {
            if (typeof this[i] === 'string') {
                if (parseFloat(this[i]) < min) {
                    min = parseFloat(this[i])
               }
            } 
        }
        return 'Найдешевша послуга: ' + min + ' грн'
    },   
    maxPrice() {
        let max = -Infinity;
        for (let i in services) {
            if (typeof this[i] === 'string') {
                if (parseFloat(this[i]) > max) {
                    max = parseFloat(this[i])
                }
             } 
        }
        return 'Найдорожча послуга: ' + max + ' грн'
    },
    showServices() {
        let service = []
        for (let i in this) {
            if (typeof this[i] !== 'function'){
                service += i + ' | ';
            }
        }
        return service
    }
};  

services['Розбити скло'] = '200 грн';
console.log('Послуги: ' + services.showServices())
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice())