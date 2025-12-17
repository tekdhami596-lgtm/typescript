// var var_name : data_type = value
var num1:number = 10
var num2:number =30
var num3:number = 30

var total:number = num1 + num3
console.log(total)

var binary:number =0b00001
var oct:number =0o100001
var hexa:number =0x00001

console.log(oct+10)

var item1:number=100
var item2 ='50'
// var item2Converted = Number(item2)
var item2Converted =+item2

console.log(item1+item2Converted)

console.log(item1+ +item2)


// var data =30
// data = 40
// data ='Tek'

var data: number | string =30
data ='tek'