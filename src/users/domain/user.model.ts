export class UserModel {
  constructor(
    public id: number,
    public name: string,
    public lastname: string,
    public age: number,
    public password: string,
    public refreshToken: string
  ) {}
}

// export class UserModel {
//   id: number;
//   name: string;
//   lastname: string;
//   age: number;
//   password: string;
//   refreshToken: string;

//   constructor(
//     id: number,
//     name: string,
//     lastname: string,
//     age: number,
//     password: string,
//     refreshToken: string
//   ) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.lastname = lastname;
//     this.password = password;
//     this.refreshToken = refreshToken;
//   }
// }
