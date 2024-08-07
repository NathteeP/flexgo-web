export default function checkHostForm(object, arg) {
  if (arg && arg.length >= 1) {
    const key = [...arg];
    const missingKey = [];
    for (let item of key) {
      if (typeof object[item] === 'object') {
        if (Object.keys(object[item]).length < 1) {
          missingKey.push(item);
        } else {
          for (let el in object[item]) {
            if (!object[item][el]) {
              missingKey.push(el);
            }
          }
        }
      }
      if (typeof object[item] === 'string')
        if (!object[item]) {
          missingKey.push(item);
        }
    }
    return missingKey;
  } else {
    const missingKey = [];
    for (let key in object) {
      if (key === 'accomId') {
        continue;
      } else if (!object[key]) {
        missingKey.push(key);
      }
    }
    return missingKey;
  }
}
