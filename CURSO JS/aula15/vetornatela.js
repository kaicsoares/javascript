var valores = [4, 1, 8, 9, 3, 11, 40, 24, 1509]
valores.push(7)
valores.sort()

console.log(`O vetor tem ${valores.length} posições`)
for(var pos = 0; pos < valores.length; pos++){
    if (pos % 2 == 0){
        console.log(`${pos} Esse número é Par`)
    } else {
        console.log(`${pos} Esse número é ímpar`)
    }
}
