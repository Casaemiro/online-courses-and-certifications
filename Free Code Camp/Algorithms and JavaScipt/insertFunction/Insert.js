function FracinSplice(arr1,arr2,n){
    let finalArr = arr2.splice(n,0,...arr1);
    console.log(arr2)
    return finalArr;
}

FracinSplice([1,2,3],[4,5,6], 1);