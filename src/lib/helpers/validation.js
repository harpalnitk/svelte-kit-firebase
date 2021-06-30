export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isValidEmail(val) {
    return new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ).test(val.trim());
  }

  export function minLength(val, length = 6) {
    return val.trim().length >= length;
  }

  export function maxLength(val, length = 50) {
    return val.trim().length <= length;
  }