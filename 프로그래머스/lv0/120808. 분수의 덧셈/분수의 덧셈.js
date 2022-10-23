// function solution(denum1, num1, denum2, num2) {
//     var answer = [];
    
//     let second = num1*num2;
//     let first = denum1*num2 + denum2*num1;
    
//     const max = Math.max(num1,num2)
//     if(second%max==0 && first%max==0){
//         second /= max;
//         first /= max;
//     }
//     const min = Math.min(num1,num2)
//     if(second%min==0 && first%min==0){
//         second /= min;
//         first /= min;
//     }
//     //let first = num1 * denum2 + num2 * denum1; //분자
//     //let second = num1 * num2; //분모
//     //denum1/num1 + denum2/num2
    
//     answer = [first,second];
//     return answer;
// }

function solution(denum1, num1, denum2, num2) {
    var answer = [0, 0];
    // 분자
    let first = num1 * denum2 + num2 * denum1;
    // 분모
    let second = num1 * num2;

    // 최대공약수
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    let min = gcd(first, second);

    // 분자 / 최대공약수
    answer[0] = first / min;

    // 분모 / 최대공약수
    answer[1] = second / min;

    return answer;
}