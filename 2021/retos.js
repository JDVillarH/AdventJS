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
    return letterArray.every(element => /\(\p{Script=Latin}+\)|^\p{Script=Latin}+$/u.test(element))
}

// Reto #4 ¡Es hora de poner la navidad en casa!
export default function createXmasTree(height) {
    const totalWidth = (height * 2) - 1;
    const centerIndex = Math.floor(totalWidth / 2);
    const trunk = `${"_".repeat(centerIndex)}#${"_".repeat(centerIndex)}`;
    const tree = [];
  
    for (let i = 0; i < height; i++) {
      const ornamentsRow = "*".repeat(2 * i + 1);
      const branches = ornamentsRow.padStart(centerIndex + i + 1, "_").padEnd(totalWidth, "_");
      tree.push(branches);
    }
  
    tree.push(trunk, trunk);
    return tree.join("\n");
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


// Reto #7 - Buscando en el almacén...
export default function contains(store, product) {
    for (const item of Object.values(store)) {
        if (typeof item === 'object' && contains(item, product) || item === product) {
            return true
        }
    }

    return false;
}

// Reto #8 - La locura de las criptomonedas
export default function maxProfit(prices) {

    const pricesLength = prices.length
    let firstDiff = -1

    if (Math.max(...prices) === Math.min(...prices)) {
        return firstDiff
    }

    for (let i = 0; i < pricesLength; i++) {
        for (let j = i + 1; j < pricesLength; j++) {
            const newDiff = prices[j] - prices[i]

            if (firstDiff < newDiff) {
                firstDiff = newDiff
            }
        }
    }

    return firstDiff
}

// Reto #9 - Agrupando cosas automáticamente
export default function groupBy(collection, it) {
    const isFunction = typeof it === "function"
    const orderBy = {}

    for (const item of collection) {
        const newKey = isFunction ? it(item) : item[it]

        orderBy[newKey] ??= []
        orderBy[newKey].push(item)
    }

    return orderBy
}

// Reto #10 - La máquina de cambio
export default function getCoins(change) {
    const coinsTemplate = [50, 20, 10, 5, 2, 1]
    const coinsReturn = coinsTemplate.map((coin, index) => {
        const currentCoins = Math.floor(change / coinsTemplate[index])
        change %= coinsTemplate[index]
        return currentCoins
    })

    return coinsReturn.reverse()
}

// Reto #11 - ¿Vale la pena la tarjeta fidelidad del cine?
export default function shouldBuyFidelity(times) {
    const normalPrice = 12 * times
    let fidelityAccumulator = 0

    for (let i = 1; i < times; i++) {
        fidelityAccumulator += 12 * Math.pow(0.75, i)
    }

    return normalPrice > (fidelityAccumulator + 250)
}

// Reto #12 - La ruta perfecta para dejar los regalos

// Reto #13 - Envuelve regalos con asteriscos
export default function wrapGifts(gifts) {
    if (gifts.length === 0) return []

    const giftsWrapped = []
    const topAndBottom = "*".repeat(gifts[0].length + 2)

    giftsWrapped.push(topAndBottom)
    gifts.map(item => giftsWrapped.push(`*${item}*`))
    giftsWrapped.push(topAndBottom)

    return giftsWrapped
}

// Reto #14 - En busca del reno perdido
export default function missingReindeer(ids) {
    const sortedIds = ids.sort((a, b) => a - b)
    const numberLength = sortedIds.length

    for (let i = 0; i < numberLength; i++) {
        if (i < sortedIds[i]) return i // Se rompe la coordinación
        if (sortedIds[i] === numberLength - 1) return i + 1 // Llegamos al final, es el último
    }
}

// Reto #15 - El salto del perfecto
export default function checkSledJump(heights) {
    const heightsLength = heights.length
    const maxHeightIndex = heights.indexOf(Math.max(...heights));

    if (maxHeightIndex === 0 || maxHeightIndex === heightsLength - 1) return false

    for (let i = 0; i < maxHeightIndex; i++) {
        if (heights[i] <= heights[i - 1]) return false
    }

    for (let i = (maxHeightIndex + 1); i < heightsLength; i++) {
        if (heights[i] >= heights[i - 1]) return false
    }

    return true
}

// Reto #16 - Descifrando los números...
export default function decodeNumber(symbols) {
    const convertedSymbols = []
    const symbolsTemplate = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

    for (const symbol of symbols) {
        const currentSymbol = symbolsTemplate[symbol]

        if (currentSymbol === undefined) {
            return NaN
        }

        convertedSymbols.push(currentSymbol)

        if (currentSymbol > convertedSymbols.at(-2)) {
            convertedSymbols[convertedSymbols.length - 2] *= -1;
        }
    }

    return convertedSymbols.reduce((accumulator, number) => accumulator + number, 0);
}

// Reto #18 - El sistema operativo de Santa Claus
export default function fixFiles(files) {
    const duplicatedFiles = {}

    files.forEach((file, index) => {
        duplicatedFiles[file] = duplicatedFiles[file] === undefined ? 0 : duplicatedFiles[file] + 1
        if (duplicatedFiles[file] > 0) {
            files[index] = `${file}(${(duplicatedFiles[file])})`
        }
    })

    return files
}

// Reto #20 - ¿Una carta de pangramas? ¡QUÉ!
export default function pangram(letter) {
    const alphabet = "abcdefghijklmnñopqrstuvwxy".split("");
    const letterSet = new Set(letter.replaceAll(/[áäéëíóöúüÿ]/g, "").toLowerCase());
    return alphabet.filter(character => !letterSet.has(character)).length === 0
}