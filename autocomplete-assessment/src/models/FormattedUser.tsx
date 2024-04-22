export class FormattedUser {
    id: number
    label: string
    street: string
    suite: string
    city: string

    constructor(id: number, label: string, street: string, suite: string, city:string) {
        this.id = id;
        this.label = label;
        this.street = street;
        this.suite = suite;
        this.city = city;
    }
}

