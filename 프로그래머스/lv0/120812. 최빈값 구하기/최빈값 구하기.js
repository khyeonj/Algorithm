function solution(arr) {
    var answer = 0;
    arr.sort((a,b)=>a-b);
    
    let now=0;
    
		const a = arr.reduce((acc,value)=>{
    		
        if(!acc[now]){
          acc[now] =[]
          acc[now].push(value);
        }else{
        	if(acc[now][0] == value){
          	acc[now].push(value);
          }else{
          	now++
          	acc[now] = [];
            acc[now].push(value);
          }
           
        }
        return acc;
        
    },[]).sort((a,b)=>{
    	return b.length - a.length;
    })
   	
    answer = a[0][0]
    
   if(a.filter(v=>a[0].length == v.length).length >1){
   	answer = -1;
   };
   
    return answer;
                      
}