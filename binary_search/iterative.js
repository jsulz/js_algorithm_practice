//iterative solution
function findKey( key, arr ){

  //set the low and high variables
  //these will be used as boundary points to resize the window of the array that we search
  var low = 0;
  var high = arr.length - 1;

  //run a loop while low is less than or equal to high
  //if low is greater than or equal to high, then we've reached the end of our dataset
  while ( low <= high ) {

    //calculate the midpoint of the array
    //if low is 10 and high is 30, then the midpoint of that will be 20
    //to get there, subtract 30 from 10 and divide that by two then add it to low!
    //this obviously can be run regardless of any low or high value
    //We're also accounting for odd numbers by setting the division operation to the lowest
    //whole integer using Math.floor
    var mid = low + Math.floor(( high - low ) / 2 );

    //if the value of the array at the current middle index is equal to the value of the key
    //then return an affirmative!
    if ( arr[mid] == key ) {
      return "We Got It!";
    }

    //if the key is less than the value of the middle index
    //then set the high boundary to be one less than the mid point
    //thus adjusting our window that we look through at the next iteration
    if ( key < arr[mid] ) {
      high = mid - 1;

    //if the key is greater than the value of the middle index
    //then set the low boundary to be one greater than the mid point
    //thus adjusting the window that we look through at the next iteratoin
    } else {
      low = mid + 1;
    }

  }

  //if we've gotten here, then we didn't find the key in the array
  //return a negative
  return "Nothing";

}


testArr = [0,5,10,15,16,19,20,26,37,39,40,45,48,51,53,79,80,99,100];
console.log( findKey( 17, testArr ) );
