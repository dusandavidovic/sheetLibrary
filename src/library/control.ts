import SpreadSheet from "./SpreadSheet";

type TSheets = {
  name: string;
  sheet?: GoogleAppsScript.Spreadsheet.Sheet | null;
  values?: any[][];
  header?: any[] | undefined;
  headerObj?: any;
};
type TControl = {
  ss?: SpreadSheet;
  currentIndex?: number;
  Sheets?: TSheets[];
};
class Control {
  info: TControl = {};

  constructor(id: string, sheetName?: string) {
    this.info.ss = new SpreadSheet(id, sheetName); // create SpreadSheet object
  }
}

class ControlInfo extends Control {
  me: TSheets = {
    name: "spreadsheetInfo",
  };
  constructor(id: string) {
    super(id, "spreadsheetInfo");
    this.me.sheet = this.info.ss?.sheet;
    this.me.values = this.info.ss?.values;
    this.me.header = this.info.ss?.header;
    this.me.headerObj = this.info.ss?.headerObj;
  }

  //   getSheet() {
  //     return this.me.SS.getSheet();
  //   }
}
export default ControlInfo;
