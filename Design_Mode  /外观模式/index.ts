console.log('外观模式')

class Facade {
	protected subsystem1: Subsystem1
	protected subsystem2: Subsystem2
	
	constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
		this.subsystem1 = subsystem1 || new Subsystem1()
		this.subsystem2 = subsystem2 || new Subsystem2()
	}
	
	operation():string {
		let result = 'Facade initializes subsystems:\n';
		result += this.subsystem1.operation1();
		result += this.subsystem2.operation1();
		result += 'Facade orders subsystems to perform the action:\n';
		result += this.subsystem1.operationN();
		result += this.subsystem2.operationZ();
		
		return result;
	}
}




class Subsystem1 {
	operation1():string {
		return 'Subsystem1: Ready!\n';
	}
	
	//...
	operationN():string {
		return 'Subsystem1: Go!\n';
	}
}


class Subsystem2 {
	operation1():string {
		return 'Subsystem2: Ready!\n';
	}
	
	//...
	operationZ():string {
		return 'Subsystem2: Go!\n';
	}
}




function clientCode(facade: Facade) {
	// ...
	
	console.log(facade.operation());
	
	// ...
}

/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);


export {}
