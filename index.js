for(let i=2;i<100;i++){
    let n = 0;
    for(let j=i-1; j >= 2; j--){
       if(i%j == 0){
           n = n + 1;
       } 
    }
    if(n == 0){
        console.log(i)
    }
}

