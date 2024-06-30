///////// Net Salary Calculator (Toy Problem) //////


function calculateNetSalary(Salary , Benefits){
    //personal tax relief per month//
    const personalRelief = 2400 ;

    //grossSalary = salary + benefits//
    const grossSalary = Salary + Benefits ;

    //calculating taxable income//
    const taxableIncome = grossSalary - personalRelief;

    //calculating PAYE //
    let payee = 0;

    if (taxableIncome <= 24000) {
        return (taxableIncome * 0.1)
    }else if(taxableIncome <= 32333){
        return (taxableIncome * 0.25)
    }else  {
        return (taxableIncome * 0.35)
    }
} 
    //calculating NHIF Deductions//
    const NHIFRate = 0.15 ;

    const nhifDeductions = grossSalary * NHIFRate

    //calcculating NSSF deduction //
    const nssfRate = 0.06 ;
    const nssfDeduction = grossSalary * nssfRate
    //calculating net salary //
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeduction ;
