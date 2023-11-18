getval = () => {
    var ctc = Number.parseInt(document.getElementById("input1").value);
    var house = Number.parseInt(document.getElementById("input2").value);
    var other = Number.parseInt(document.getElementById("input3").value);
    var standard_deduction = 50000
    var taxable=ctc+house+other-standard_deduction
    console.log(taxable)
    if (taxable < 250000) {
        const tax = 0
    }
    else if (taxable >= 250000 && taxable < 500000) {
        const tax = (0.05 * taxable)
    }
    else if (taxable >= 500000 && taxable < 750000) {
        var tax = (0.05 * 250000 + 0.1 * (taxable - 500000))
    }
    else if (taxable >= 750000 && taxable < 1000000) {
        var tax = (0.05 * 250000 + 0.1 * 250000 + .15 * (taxable - 750000))
    }
    else if (taxable >= 1000000 && taxable < 1250000) {
        var tax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * (taxable - 1000000))
    }
    else if (taxable >= 1250000 && taxable < 1500000) {
        var tax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * (taxable - 1250000))
    }
    else (taxable > 1500000) 
        var tax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * 250000 + 0.3 * (taxable - 1500000))
    console.log(tax)
    var taxable_box=document.getElementById("taxable_income")
    taxable_box.innerHTML=taxable
    var tax_box=document.getElementById("total_tax")
    tax_box.innerHTML=tax
}