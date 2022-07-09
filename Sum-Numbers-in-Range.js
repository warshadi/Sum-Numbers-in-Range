function sumAll(arr) {
    console.log("this is the original rang " + arr);
    //this for sort the rang.
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        // this for print the rang after sorted.
        console.log("this is the rang after sorted " + arr);
    }
    // result here for sum all the rang and store it.
    let reuslt = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        reuslt = reuslt + i;
    }
    console.log(reuslt);
}

sumAll([1, 4]);

sumAll([4, 1]);

sumAll([5, 2]);

sumAll([5, 10]);