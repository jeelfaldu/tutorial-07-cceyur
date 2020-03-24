export class Student {

    name: string;
    email : string;
    pswd: string;
    branch: string;
  
    constructor(name: string, branch: string, pswd: string ,email : string) {
        this.name = name;
        this.email = email;
        this.pswd = pswd;
        this.branch = branch;
    }

}