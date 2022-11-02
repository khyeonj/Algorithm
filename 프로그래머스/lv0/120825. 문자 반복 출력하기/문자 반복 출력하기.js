function solution(my_string, n) {
    return [...my_string].map(v=>v.repeat(n)).join('');
    
    /* 
    let arr = my_string.split('')
    for(let i=0; i<arr.length; i++){
      console.log(arr[i].repeat(n));
      answer+= arr[i].repeat(n);
      console.log(answer)
    }
    return arr; */
}