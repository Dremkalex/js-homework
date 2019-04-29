class Validator {
    isEmail(string) {
        return /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(string);
    }

    isDomain(string) {
        return /^[a-z0-9][-a-z0-9]+\.+[a-z]{2,3}$/.test(string);
    }

    isDate(string) {
        return /(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/.test(string);
    }

    isPhone(string) {
        return /[\+]\d{3}[\s][\(]\d{2}[\)][\s]\d{3}[\-]\d{2}[\-]\d{2}/.test(string);
    }
}

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'));