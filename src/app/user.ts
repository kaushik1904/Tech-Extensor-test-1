export class User {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public textArea: string,
    public age: string,
    public gender: string,
    public hobby: {
      cricket: string;
      dancing: string;
      reading: string;
      blogging:string;
      journaling:string
    },
    public company: string
  ) {}
}
