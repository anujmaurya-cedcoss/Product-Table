const table = [["Product Id", "Product Name", "Product Price"]];
// function to verify id
function verifyID(val) {
    let n = val.length;
    let ret = (n >= 1);
    for(let i = 0; i < n; i++) {
        if((val[i] >= 'a' && val[i] <= 'z')|| (val[i] >= 'A' && val[i] <= 'Z') || val[i] == '_' || (val[i] >= '0' && val[i] <= '9')) {
            continue;
        } else {
            ret = false;
        }
    }
    return ret;
}
// function to verify name
function verifyName(val) {
    let n = val.length;
    let ret = (n >= 1);
    let space = false;
    for(let i = 0; i < n; i++) {
        if((val[i] >= 'a' && val[i] <= 'z') || (val[i] >= 'A' && val[i] <= 'Z')) {
            continue;
        } else if(!space){
            // only 1 space is allowed between name
            space = true;
        } else {
            ret = false;
        }
    }
    return ret;
}
// function to verify price
function verfiyPrice(val) {
    return !(val <= 0 || val.length < 1);
}
function add() {
    const id = document.getElementById("prod-id").value;
    const name = document.getElementById("prod-name").value;
    const price = document.getElementById("prod-price").value;
    if(verfiyPrice(price) && verifyID(id) && verifyName(name)) {
        // after verification
        table.push([id, name, "USD "+price]);
        let output = "";
        let n = table.length;
        for(let i = 0; i < n; i++) {
            output += "<tr>"
            output += "<td>" + table[i][0] + "</td>"
            output += "<td>" + table[i][1] + "</td>"
            output += "<td>" + table[i][2] + "</td>"
            output += "</tr>";
        }
        document.getElementById("output").innerHTML = output;
        // removing the error message, if the current values are correct
        document.getElementById("error").innerHTML = "";
        // removing the values from the field, once they're filled in the table
        document.getElementById("prod-id").value = "";
        document.getElementById("prod-name").value = "";
        document.getElementById("prod-price").value = "";
    } else {
        console.log("error");
        document.getElementById("error").innerHTML = "Please enter correct values";
    }
}