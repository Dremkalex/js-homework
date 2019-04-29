class MyString {
    reverse(string) {
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        return string[0].toUpperCase().concat(string.slice(1));
    }

    ucWords(string) {
        return string.split(' ').map(item => this.ucFirst(item)).join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));