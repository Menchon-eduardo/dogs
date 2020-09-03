export class Character{
    constructor(
        public _id: String,
        public name: String,
        public game: String,
        public background: String,
        public description: String,
        public backgroundKind: Array<JSON>,
        public acuity: Number,
        public body: Number,
        public heart: Number,
        public will: Number,
        public traits: Array<JSON>,
        public relationships: Array<JSON>,
        public belongings: Array<JSON>,
        public img: String,
        public pc: Boolean
    ){}
}