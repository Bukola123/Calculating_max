Array = [1,2,3];


function Maximum(Array){
    if( Array.length <= 1){
        return "Invalid number of Age input, input two age"
    }else{
        let oldest = Math.max.apply(null,Array);
        Array.splice(Array.indexOf(oldest),1);
        let second_oldest= Math.max.apply(null,Array);
        return [oldest, second_oldest]
    }
}

console.log(Maximum(Array))