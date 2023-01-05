export class NewGameInstance {
    private readonly _male: string
    private readonly _female: string

    constructor(male: string, female: string) {
        this._male = male;
        this._female = female;
    }

    get male(): string {
        return this._male;
    }

    get female(): string {
        return this._female;
    }
}