// ใส่ลูกน้ำให้ตัวเลข 

// 45070 => "45,070"
export const numberToString = (number) => {
    number += ''
    let integer = number.split('.')[0]
    let decimal = number.split('.')[1]
    let displaynumber = ''
    for (let i =integer.length; i > 0; i--) {
        displaynumber += integer[integer.length-i]
        if(i % 3 === 1 && i !== 1) displaynumber += ','
    }
    if (decimal) displaynumber += ('.' + decimal.padEnd(2, '0'))
    return displaynumber
}

// 45070 => "45,070.00"
export const numberToDecimalString = (number) => {
    number += ''
    let integer = number.split('.')[0]
    let decimal = number.split('.')[1]
    let displaynumber = ''
    for (let i =integer.length; i > 0; i--) {
        displaynumber += integer[integer.length-i]
        if(i % 3 === 1 && i !== 1) displaynumber += ','
    }
    if (!decimal) decimal = '00'
    displaynumber += ('.' + decimal.padEnd(2, '0'))
    return displaynumber
}