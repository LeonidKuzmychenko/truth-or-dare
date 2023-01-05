export class NewGameModelViewMode {
    private _visible: boolean
    private _closable: boolean

    constructor(visible: boolean, closable: boolean) {
        this._visible = visible;
        this._closable = closable;
    }

}