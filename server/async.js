// async function timeout(flag) {
//     if(flag){
//         return 'hello'
//     }else{
//         return 'hi'
//     }
// }
// console.log(timeout(false))
// // timeout().then(data => {
// //     console.log(data)
// // })
// console.log('1')

function doubleAfter2Sec(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2 * num)
            resolve()
        }, 2000)
    })
}
async function test(){
    await doubleAfter2Sec(30)
    // console.log(result)
    console.log(12)
}

test()
console.log(123)