type Diagnosable = {
    partName: string;
    runDiagnostics(): string;
};

function monitorCar(
    carBody: { material: string, state: string } & Diagnosable,
    tires: { airPressure: number, condition: string } & Diagnosable,
    engine: { horsepower: number, oilDensity: number } & Diagnosable
) {
    console.log(`Checking ${carBody.runDiagnostics()}: State is ${carBody.state}`);
    console.log(`Checking ${tires.runDiagnostics()}: Pressure is ${tires.airPressure}`);
    console.log(`Checking ${engine.runDiagnostics()}: HP is ${engine.horsepower}`);
}

const runDiagnostics = function(this: Diagnosable) { 
    return this.partName; 
};

monitorCar(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);