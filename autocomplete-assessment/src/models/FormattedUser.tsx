export class FormattedUser {
    id: number
    label: string
    street: string
    suite: string
    zipcode: string

    constructor(id: number, label: string, street: string, suite: string, zipcode:string) {
        this.id = id;
        this.label = label;
        this.street = street;
        this.suite = suite;
        this.zipcode = zipcode;
    }
}

