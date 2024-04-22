export class FormattedUser {
    id: number
    label: string
    street: string
    suite: string
    city: string

    constructor(id: number, label: string, street: string, suite: string, city:string) {
        this.id = id;
        this.label = formatName(label);
        this.street = street;
        this.suite = suite;
        this.city = city;
    }
}

// Takes a name as a string and returns a string that complies
// with the format "Last Name Suffix, First Name (Title)".
function formatName(name: string) {
    let formattedName = "";
    let nameParts;

    try {
        nameParts = name.split(" ");

        if (nameParts[0].includes(".")) {
            return formattedName += `${nameParts.slice(2, -1)}, ${nameParts[1]} (${nameParts[0]})`
        }
        else {
            return formattedName += `${nameParts.slice(1, -1)}, ${nameParts[0]}`
        }
    }
    catch (e: any) {
        console.log(e.message);
        return "Error formtting name";
    }
}