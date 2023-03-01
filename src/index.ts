import ControlInfo from "./library/control";
// import SpreadSheet from "./library/SpreadSheet";

const SS_regControl = "1dpgRrLWnkd-RL5ksQcOkk3pGjY6T0t0RqoNfWR4HAZQ";
// function testSheet() {
//   const regControl = new SpreadSheet(SS_regControl);

//   console.log("Using getSheetList");
//   console.log(regControl.getSheetList());

//   const sheetList = regControl.sheetList;
//   regControl.setSheet(sheetList[0]);

//   console.log("Get all values");
//   console.log(regControl.header);
//   console.log(regControl.headerObj);
//   console.log(regControl.values);
// }

const testControl = () => {
  const spreadsheetInfo = new ControlInfo(SS_regControl);
  const headerObj = spreadsheetInfo.me.headerObj;
  console.log(headerObj);
};
