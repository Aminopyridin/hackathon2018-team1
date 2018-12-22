function GetOrder() {
    let ELEMENT_TYPES =
        [0, 0,
            1, 1,
            2, 2,
            3, 3,
            4, 4,
            5, 5,
            6, 6,
            7, 7];
    for(let i = 0; i < 10; i++)
        ELEMENT_TYPES.sort(() => Math.random() - 0.5);
    return (ELEMENT_TYPES);
}

console.log(GetOrder());