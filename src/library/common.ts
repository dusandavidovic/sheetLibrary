export type TStringFunction = (str: string) => string;
export type TgetHeaderObject = (header: string[]) => {};
export type TgetDataObject = (headerObject: {}, dataRow: any[]) => {};
export type TreadByKeyColumnValue = (
  keyColumn: string,
  value: any,
  matrix: any[][] | undefined,
  headerObject: {}
) => any[];
class Common {
  static camelize: TStringFunction = (str: any): any => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  static capitalize: TStringFunction = (str: any): string => {
    return str.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  };

  static getHeaderobject: TgetHeaderObject = (header: string[]) => {
    let idx = 0;
    return header.reduce((previous: { [x: string]: number }, current: string) => {
      let camelString = this.camelize(current.replace(/[^a-zA-Z ]/g, ""));
      previous[camelString] = idx;
      idx += 1;
      return previous;
    }, {});
  };

  static getDataObject: TgetDataObject = (headerObject: {}, dataRow: any[]) => {
    return dataRow.map(function (row) {
      return Object.keys(headerObject).reduce(function (p, c) {
        p[c] = row[headerObject[c]];
        return p;
      }, {});
    });
  };

  static readByKeyColumnValue: TreadByKeyColumnValue = (
    keyColumn: string,
    value: any,
    matrix: any[] | undefined,
    headerObject: {}
  ) => {
    const index = headerObject[keyColumn];
    let rowIndex = 0;
    if (matrix) {
      rowIndex = matrix.findIndex((val, idx) => {
        console.log(val[index], idx);
        return value === val[index];
      });
      return matrix[rowIndex];
    }
  };
}

export default Common;
