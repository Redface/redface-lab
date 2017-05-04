export class BaseModel {

  public static getKeys():string[] {
    return Object.keys(new this());
  }

  deepCopy(self:any = this) {
    let newObj = self;
    if (self && typeof self === 'object') {
      newObj = Object.prototype.toString.call(self) === '[object Array]' ? [] : {};

      for (let i in self) {
        if (i === null) {
          continue;
        }
        newObj[i] = this.deepCopy(self[i]);
      }
    }
    return newObj;
  }
}
