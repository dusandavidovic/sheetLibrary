export type TStringFunction = (str: string) => string;
export type TgetHeaderObject = (header: string[]) => {};

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
      previous[camelString] = idx += 1;
      return previous;
    }, {});
  };
}

export default Common;
