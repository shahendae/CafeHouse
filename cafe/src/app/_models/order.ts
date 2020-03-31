export class Order {
    constructor(public id?:number,
        public date?:Date,
        public totalAmount?:number,
        public action?:string,
        public notes?:string,
        public applicationUserId?:string) {
    }
}
