export class NewGameModelViewMode {
    private readonly _visible: boolean
    private readonly _closable: boolean

    constructor(visible: boolean, closable: boolean) {
        this._visible = visible;
        this._closable = closable;
    }


    get visible(): boolean {
        return this._visible;
    }

    get closable(): boolean {
        return this._closable;
    }
}