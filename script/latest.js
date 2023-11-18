getval = () => {
    var ctc = Number.parseInt(document.getElementById("input1").value);
    var house = Number.parseInt(document.getElementById("input2").value);
    var other = Number.parseInt(document.getElementById("input3").value);
    var standard_deduction = 50000
    var taxable=ctc+house+other-standard_deduction
    console.log(taxable)
    if (taxable < 300000) {
        const tax = 0
    }
    else if (taxable >= 300000 && taxable < 600000) {
        const tax = (0.05 * taxable-300000)
    }
    else if (taxable >= 600000 && taxable < 900000) {
        var tax = (0.05 * 300000 + 0.1 * (taxable - 600000))
    }
    else if (taxable >= 900000 && taxable < 1200000) {
        var tax = (0.05 * 300000 + 0.1 * 300000 + .15 * (taxable - 900000))
    }
    else if (taxable >= 1200000 && taxable < 1500000) {
        var tax = (0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * (taxable - 1200000))
    }
    else
        var tax = (0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * 300000 + 0.3 * 300000 + 0.3 * (taxable - 1500000))
    console.log(tax)
    var taxable_box=document.getElementById("taxable_income")
    taxable_box.innerHTML=taxable
    var tax_box=document.getElementById("total_tax")
    tax_box.innerHTML=tax
}