export namespace A {
    interface Animal {
        name:string;
        eat():void;
    }
    export class Dog implements Animal {
        name: string;         
        constructor(name:string){
            this.name = name;
        }
        eat(): void {
           console.log('A eat....');
        }

    }
}
export namespace B {
    interface Animal {
        name:string;
        eat():void;
    }
    export class Dog implements Animal {
        name: string;         
        constructor(name:string){
            this.name = name;
        }
        eat(): void {
           console.log('B eat....');
        }

    }
} 
