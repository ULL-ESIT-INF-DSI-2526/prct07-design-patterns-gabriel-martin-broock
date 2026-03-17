// Client code is able to work properly with the interface of SystemA
class SystemA {
  constructor(private csvData: string = '') {
  }
  getData(): string {
    return this.csvData;
  }
}

type JSONData = {
  name: string;
  surname: string;
  username: string;
}

// Client code wants to use SystemB, but its interface is not compatible with
// the current client code
class SystemB {
  constructor(private jsonData: JSONData = {
    name: '', surname: '', username: ''}) {
  }
  getSpecificData(): JSONData {
    return this.jsonData;
  }
}

// Initialization of systems A and B
const systemA = new SystemA('Eduardo,Segredo,esegredo');
const systemB = new SystemB({
  name: 'Eduardo',
  surname: 'Segredo',
  username: 'esegredo',
});

// Client code
function clientCode(data: string) {
  console.log(data);
}

clientCode(systemA.getData());
console.log(systemB.getSpecificData());

// This provokes an error. The client code does not understand the interface
// provided by SystemB
// clientCode(systemB.getSpecificData());