import { generateRandomId } from './utils';

function Component(options: { id: string }) {
    return target => {
        target.id = options.id;
    };
}

function enumerable(isEnumerable: boolean) {
    return (target, propertyKey, propertyDescriptor: PropertyDescriptor) => {
        console.log("propertyKey: ", propertyKey);
        propertyDescriptor.enumerable = isEnumerable;
    };
}

function prop(obj, name){
    console.log("Property decorator", obj, name);
}

function param(obj, name, index){
    console.log("Parameter decorator", obj, name, index);
}

@Component({
    id: 'app'
})
class App {
    @prop
    static version: string

    @enumerable(false)
    init(@param element: HTMLElement | null): void {
        setInterval(() => {
            if (element) {
                element.innerHTML = generateRandomId({
                    symbol: '#',
                    length: 7
                });
            }
        }, 1000);
    }
}

for (let key in App.prototype) {
    console.log(key);
}

function main(ComponentClass) {
    const element = document.getElementById(ComponentClass.id);
    const cmp = new ComponentClass();
    cmp.init(element);
}

main(App);