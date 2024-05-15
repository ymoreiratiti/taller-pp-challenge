
export class PageEntity<T> {
    constructor(public pageNumber: number, public perPage: number, public totalItems: number, public items: T[]) { }

    public get totalPages(): number {
        return Math.ceil(this.totalItems / this.perPage);
    }
}
