import Common from "./common";

class SpreadSheet {
  id: string | undefined = "";
  ss: GoogleAppsScript.Spreadsheet.Spreadsheet;
  sheet: GoogleAppsScript.Spreadsheet.Sheet | null;
  sheetName: string | undefined = "";
  sheetList: string[];
  values: any[][] = [];
  header: any[] | string[] | undefined = [];
  headerObj: any = {};

  constructor(id?: string, sheetName?: string) {
    this.id = id;
    this.ss = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
    this.sheetList = this.setSheetList();

    this.setSheet(sheetName);
  }

  getSheet() {
    return this.sheet;
  }
  getSheetList() {
    return this.sheetList;
  }
  getAllValues() {
    if (!this.values && this.sheet) this.values = this.sheet.getDataRange().getValues();
    return this.values;
  }

  setSheet(sheetName: string | undefined) {
    if (sheetName !== this.sheetName) {
      this.sheetName = sheetName;
      this.sheet = sheetName ? this.ss.getSheetByName(sheetName) : this.ss.getActiveSheet();
      this.refreshSheet();
    }
  }

  setSheetList(): string[] {
    const list: string[] = [];
    if (this.ss) {
      this.ss.getSheets().forEach((value) => {
        list.push(value.getName());
      });
    }
    return list;
  }
  refreshSheet() {
    if (this.sheet) {
      this.values = this.sheet.getDataRange().getValues();
      this.header = this.values.shift();
      if (this.header) this.headerObj = Common.getHeaderobject(this.header);
    }
  }

  // setHeaderObj(header) {
  //   let idx = 0;
  //   return header.reduce((previous: { [x: string]: number }, current: string) => {
  //     let camelString = camelize(current.replace(/[^a-zA-Z ]/g, ""));
  //     previous[camelString] = idx += 1;
  //     return previous;
  //   }, {});
  // }
}

export default SpreadSheet;
