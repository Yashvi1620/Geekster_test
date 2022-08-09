let a=(str)=>{
    let comb=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            comb.push(str.slice(i,j));
        }
    }
    return comb;
}
console.log(a('dog'));