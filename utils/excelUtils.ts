// reading data from excel

import xlxs from 'xlsx'

export class ExcelUtils {
// which excel , where is that
// which excel sheet need to be read---file path 
// which sheet to be considered from the excel : name of the sheet 


static getExcelData(filepath:string , sheetname:string){
try {
//readfile is method in the excel
// readfile will read data from file and returns the value in workbook formate (excel)
// workbook formate is nothing but sheetname and data
const wb = xlxs.readFile(filepath)
const sheet= wb.Sheets[sheetname]
// convert the Excel to json
const data = xlxs.utils.sheet_to_json(sheet)
return data 



}catch(error){
    console.log(error);
}

}

}
