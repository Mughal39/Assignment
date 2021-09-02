function arrinput(){
    return document.getElementById("text").value.split(",");
}

// LargestNumber
function largestNumber(){
    var Arr = arrinput();
    var maxNumber = 0;
    for (var i = 0; i < parseInt(Arr.length); i++) {
        if (parseInt(Arr[i])> maxNumber) {
            maxNumber = parseInt(Arr[i]);
        }
    }
    console.log(maxNumber);
    document.getElementById("output").innerHTML = "Largest number is " + maxNumber;
}

// SmallestNumber
function smallestNumber(){
    var Arr = arrinput();
    var minNumber = Arr  [0];
    for (var i = 0; i < parseInt(Arr.length); i++) {
        if (parseInt(Arr[i])< minNumber) {
            minNumber = parseInt(Arr[i]);
        }
    }
    console.log(minNumber);
    document.getElementById("output").innerHTML = "Smallest number is " + minNumber;
}

// AscendingOrder


function AscendingOrder(){
    var Arr = arrinput();
        var NewArr = [];
        var inserted;

        for (var i = 0, ii = parseInt(Arr.length) ; i < ii ; i++){
        inserted = false;
        for (var j = 0, jj = parseInt(Arr.length) ; j < jj ; j++){
            if (parseInt(Arr[i]) < NewArr[j]){
            inserted = true;
            NewArr.splice(j, 0, parseInt(Arr[i]));
            break;
            }
        }
        
        if (!inserted)
            NewArr.push(parseInt(Arr[i]))
        }

    console.log(NewArr);
    document.getElementById("output").innerHTML = "Ascending Order " + NewArr;
}

// Descending Order

function DescendingOrder(){
    var Arr = arrinput();
        var NewArr = [];
        var inserted;

        for (var i = 0, ii = parseInt(Arr.length) ; i < ii ; i++){
        inserted = false;
        for (var j = 0, jj = parseInt(Arr.length) ; j < jj ; j++){
            if (parseInt(Arr[i]) > NewArr[j]){
            inserted = true;
            NewArr.splice(j, 0, parseInt(Arr[i]));
            break;
            }
        }
        
        if (!inserted)
            NewArr.push(parseInt(Arr[i]))
        }

    console.log(NewArr);
    document.getElementById("output").innerHTML = "Descending Order " + NewArr;
}

// Add Numbers

function AddNumbers(){
    var Arr = arrinput();
    let sum = 0;

    for (let i = 0; i < parseInt(Arr.length); i++) {
        sum += parseInt(Arr[i]);
    }
    console.log(sum);
    document.getElementById("output").innerHTML = "Sum of Numbers " + sum;
}

// ODD Numbers

function OddNumbers(){
    var Arr = arrinput();
    var Odd = [];
        for (var i = 0; i < parseInt(Arr.length); i++) {
    
            if ((parseInt(Arr[i]) % 2) == 1) {
                Odd.push(parseInt(Arr[i]));
    }
}
    document.getElementById("output").innerHTML = "Odd Numbers " + Odd;
};

// Even Numbers

function EvenNumbers(){
    var Arr = arrinput();
    var even = [];
    for (var i = 0; i < parseInt(Arr.length); i++) {
        if ((parseInt(Arr[i]) % 2) != 1) {
            even.push(parseInt(Arr[i]));
            console.log(even);
        }
    }
    document.getElementById("output").innerHTML = "Odd Numbers " + even;
}

// Average

function Average(){
    var Arr = arrinput();
    var avg = 0;
    for (var i=0,sum=0;i<parseInt(Arr.length);i++) {
        sum += parseInt(Arr[i]);
      }
      avg = sum / parseInt(Arr.length);
    document.getElementById("output").innerHTML = "Average of Numbers " + avg;
}