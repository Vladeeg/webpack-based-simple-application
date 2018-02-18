'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this)
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    /**
     * Place your code here
     */
    let ret = {};
    ret.obj1 = Object.assign({}, arg.obj1);

    ret.obj1.firstName = "Nikolay";
    ret.obj1.relatives[0].firstName = "Как видно, массив просто так не копируется";
    return {arg, ret} /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    /**
     * Place your code here
     */
    let ret = {};
    ret.obj1 = {...{}, ...arg.obj1, ...arg.obj2};
    ret.obj1.a = 42;
    ret.obj1.b = 12;
    return {arg, ret} /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    /**
     * Place your code here
     */
    arg.obj1.relatives.map(x => {
      if (x.lastName === "Ivanova") {
        x.gender = "female";
      } else {
        x.gender = "male";
      }
    });    

    return arg /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let ret = [];
    arg.obj1.relatives.filter((x) => {
      return x.gender === "female";
    }).forEach((x) => {
      ret.push(`Hello, ${x.firstName}!`);
    });
    return ret /* variable with result */;
  }
}

export default OperationExecutor;