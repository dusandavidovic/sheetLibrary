import SpreadSheet from "./SpreadSheet";
import Common from "./common";

type TSheets = {
  name: string;
  keyColumn: string;
  sheet?: GoogleAppsScript.Spreadsheet.Sheet | null;
  values: any[][] | undefined;
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
    keyColumn: "name",
    values: [],
    header: [],
    headerObj: {},
  };
  constructor(id: string) {
    super(id, "spreadsheetInfo");
    this.me.sheet = this.info.ss?.sheet;
    this.me.values = this.info.ss?.values;
    this.me.header = this.info.ss?.header;
    this.me.headerObj = this.info.ss?.headerObj;
  }

  getRow(value: any) {
    const row = Common.readByKeyColumnValue(
      this.me.keyColumn,
      value,
      this.me.values,
      this.me.headerObj
    );
    return row;
  }

  getRowObject(value: any) {
    const rows = [this.getRow(value)];
    const rowObj = Common.getDataObject(this.me.headerObj, rows);
    return rowObj[0];
  }
}
export default ControlInfo;
