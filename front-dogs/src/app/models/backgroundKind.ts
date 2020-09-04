export class BackgroundKind{
    constructor(
        public _id: String,
        public name: String,
        public stats: Number,
        public treats: Array<Number>,
        public relationships: Array<Number>
    ){}
}