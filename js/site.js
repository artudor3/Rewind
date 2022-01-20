function getString() {
    let inputString = document.getElementById("revString").value;

    if (inputString != "") {
        revString = reverseAString(inputString);

        displayData(revString);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a message and try again'
        });
    }
}


function reverseAString(input) {
    //let revString = [];
    let revString2 = "";
    for (let i = input.length - 1; i >= 0; i--) {
       //revString.push(input[i]);
        revString2 += input[i];
    }
    return revString2;
}

function displayData(revString) {
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    document.getElementById("alert").classList.remove('d-none');

}