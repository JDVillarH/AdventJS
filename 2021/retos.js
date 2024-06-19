// Reto #1 - Contando ovejas para dormir
export default function contarOvejas(ovejas) {
    return ovejas.filter(oveja => {
        const ovejaName = (oveja.color === "rojo") ? (oveja.name).toLowerCase().replaceAll(" ", "") : "";
        return ovejaName.includes("n") && ovejaName.includes("a")
    })
}

// Reto #2 - ¡Ayuda al elfo a listar los regalos!
export default function listGifts(letter) {
    return letter.split(" ").reduce((regalosObj, regalo) => {
        if (regalo.trim() && !regalo.startsWith("_")) {
            regalosObj[regalo] = (regalosObj[regalo] ?? 0) + 1;
        }
        return regalosObj;
    }, {});
}

// Reto #3 - El Grinch quiere fastidiar la Navidad
export default function isValid(letter) {
    const letterArray = letter.split(" ")
    return letterArray.every(element => /\(\p{Script=Latin}+\)|^\p{Script=Latin}+$/ugm.test(element))
}

// Reto #4 ¡Es hora de poner la navidad en casa!
export default function createXmasTree(height) {
    const itemsArbol = height + (height - 1)
    const mitadItems = Math.floor(itemsArbol / 2)
    const troncoArbol = `${"_".repeat(mitadItems)}#${"_".repeat(mitadItems)}`
    let stringArbol = ""

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < itemsArbol; j++) {
            stringArbol += (j >= (mitadItems - i) && j <= (mitadItems + i)) ? "*" : "_"
        }
        stringArbol += "\n"
    }
    stringArbol += `${troncoArbol}\n${troncoArbol}`
    return stringArbol
}

// Reto #5 - Contando los días para los regalos
export default function daysToXmas(date) {
    return Math.ceil((Date.parse('Dec 25, 2021 00:00:00') - Date.parse(date)) / (1000 * 60 * 60 * 24))
}

// Reto #6 - Rematando los exámenes finales
export default function sumPairs(numbers, result) {
    const numbersLength = numbers.length

    for (let i = 0; i < numbersLength; i++) {
        for (let j = i + 1; j < numbersLength; j++) {
            if (numbers[i] + numbers[j] === result) {
                return [numbers[i], numbers[j]]
            }
        }
    }

    return null
}