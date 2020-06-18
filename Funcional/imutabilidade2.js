const nums = [4, 8, 3, 2, 9, 1, 9, 3]

// // Estrategia 1 - Dados Mutáveis
// let total = 0

// for (let i = 0; i < nums.length; i++) {
//     total += nums[i]
// }

// console.log(total)

// // Estrategia 2 - Reduce
// const somar = (x, y) => x + y
// const total = nums.reduce(somar)

// console.log(total)

// Estrategia 3 - Recursividade
function somar(array, total = 0) {
    if (array.length === 0) {
        return total
    } else {
        return somar(array.slice(1), total + array[0])       
    }
}

console.log(somar(nums))
console.log(nums)

