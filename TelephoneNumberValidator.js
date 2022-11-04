function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        console.log("US Tel No rex1");
        return true;
    }
    else {
        // return rex2.test(str) ? true : false
        if (rex2.test(str)) {
            console.log("US Tel No with rex2");
            return true;
        } else {
            console.log(" Not US Tel No");
            return false;
        }
    }
}
telephoneCheck("555-555-5555");
telephoneCheck("555-555-4555");