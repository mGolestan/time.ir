// @flow

module.exports = (name: string, allowEmpty?: boolean): string => {
  if (!allowEmpty && !process.env[name]) {
    throw new Error(`Attempted to use undefined environment variable ${name}`);
  }

  return process.env[name] || "";
};
