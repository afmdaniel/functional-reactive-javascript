function ordenar(array) {
    // gerar um clone do array para não ter efeito colateral
    // e manter a função pura
    return [...array].sort((a, b) => a - b)
}

const nums = Object.freeze([3, 1, 7, 9, 5, 4, 6])
const numsOrdenados = ordenar(nums)

console.log(nums, numsOrdenados)