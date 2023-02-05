export default class Character {
  constructor(name, type) {
    if (!(typeof (name) === 'string')) {
      throw new Error('"name" is not a string');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Length of "name" does not match expected value: from 2 to 10 symbols');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
