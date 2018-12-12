export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ) {}

    macthes(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key: string]: User} = {
    'denis@gmail.com': new User('denis@gmail.com', 'Denis', '123')
}
