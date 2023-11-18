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
    var taxable=gross-hra-lta+house+other-pf-mediclaim-child_tution_fee-standard_deduction
    console.log(taxable)
    if (taxable < 250000) {
        const tax = 0
    }
    else if (taxable >= 250000 && taxable < 500000) {
        const tax = (0.05 * taxable-250000)
    }
    else if (taxable >= 500000 && taxable < 1000000) {
        var tax = (0.05 * 250000 + 0.2 * (taxable - 500000))
    }
    else (taxable >= 1000000 && taxable < 1500000) 
        var tax = (0.05 * 250000 + 0.2 * 500000 + 0.3 * (taxable - 1000000))
    console.log(tax)
    var taxable_box = document.getElementById("taxable_income")
    taxable_box.innerHTML = taxable
    var tax_box = document.getElementById("total_tax")
    tax_box.innerHTML = tax
}