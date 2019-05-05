const person = {
    get salary() {
        const date = new Date();
        const today = date.getDate();
        const lastMonthDay = new Date(date.getFullYear(), date.getMonth()+1, 0);

        return lastMonthDay - today > 20 ? 'good salary' : 'bad salary'
    }
}

console.log(person.salary);