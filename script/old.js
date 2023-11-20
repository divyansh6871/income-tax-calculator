getval = () => {
    var gross = Number.parseInt(document.getElementById("input1").value);
    var hra = Number.parseInt(document.getElementById("input2").value);
    var lta = Number.parseInt(document.getElementById("input3").value);
    var house = Number.parseInt(document.getElementById("input4").value);
    var other = Number.parseInt(document.getElementById("input5").value);
    var pf = Number.parseInt(document.getElementById("input6").value);
    var mediclaim = Number.parseInt(document.getElementById("input7").value);
    var child_tution_fee = Number.parseInt(document.getElementById("input8").value);
    var standard_deduction = 50000
    var taxable1=gross-hra-lta+house+other-pf-mediclaim-child_tution_fee-standard_deduction
    console.log(taxable1)
    if (taxable1 < 250000) {
        var oldtax = 0
    }
    else if (taxable1 >= 250000 && taxable1 < 500000) {
        var oldtax = (0.05 * taxable1-250000)
    }
    else if (taxable1 >= 500000 && taxable1 < 1000000) {
        var oldtax = (0.05 * 250000 + 0.2 * (taxable1 - 500000))
    }
    else (taxable1 >= 1000000 && taxable1 < 1500000) 
        var oldtax = (0.05 * 250000 + 0.2 * 500000 + 0.3 * (taxable1 - 1000000))
    console.log(oldtax)
    if(oldtax>0){
    var taxable_box = document.getElementById("taxable_income")
    taxable_box.innerHTML = taxable1
    var tax_box = document.getElementById("total_tax")
    tax_box.innerHTML = oldtax}    
    else {
        alert("You might have not filled all the inputs\nPlease do enter all the fileds")
    }
}
