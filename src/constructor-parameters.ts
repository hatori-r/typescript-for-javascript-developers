export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let Taro = new Person('Taro', 30);
console.log(Taro);

type PersonType = typeof Person;

type Profile  = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;