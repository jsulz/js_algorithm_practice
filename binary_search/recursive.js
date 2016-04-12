var recursive_search = function( key, arr, low, high ) {
    //check if low is greater than high
    //if it is, then we've exhausted the dataset
    if ( low > high ) {
        return "Nothing";
    }

    //calculate the midpoint of the array
    //if low is 10 and high is 30, then the midpoint of that will be 20
    //to get there, subtract 30 from 10 and divide that by two then add it to low!
    //this obviously can be run regardless of any low or high value
    //We're also accounting for odd numbers by setting the division operation to the lowest
    //whole integer using Math.floor
    var mid = low + Math.floor( ( high - low ) / 2 );

    //check to see if the value found at the midpoint of the array is equal to the key
    //if it is, they we've found it!
    if ( arr[mid] == key ) {
        return "Found it!";
    }
    //if the key is less than the value found at the midpoint of the array
    //then we know that the key is somewhere in the "lower" available window
    //make the "high" boundary point the value of the midpoint minus one and call the function again
    else if ( key < arr[mid] ) {
        return recursive_search(key, arr, low, ( mid - 1 ) );
    }
    //if the key is greater than the value found at the midpoint of the array
    //then we know that the key is somewhere in the "higher" available window
    //make the "low" boundary point the value of the midpoint plus one and call the function again
    else  {
        return recursive_search(key, arr, ( mid + 1 ) , high );
    }

};

//this function serves as a wrapper to the recursive function
var binary_search = function( key, arr ){
    //return the result of the recursive function
    return recursive_search( key, arr, 0, ( arr.length - 1 ) );
};

testArr = [0,5,10,15,16,19,20,26,37,39,40,45,48,51,53,79,80,99,100];
console.log( binary_search(50 , testArr ) );
