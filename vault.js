'use strict';
module.exports = function() {
    let vault = {};
    let setValue = function (key, value){
      vault[key] = value;
    };

    let getValue = function (key){
      if (key === undefined || !vault[key] ){
        return null;
      } else {
        return vault[key];
      };
    };
    return {
      setValue: setValue,
      getValue: getValue,
    };
};