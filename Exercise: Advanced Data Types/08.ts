type PersonDetails = { getPersonInfo(): string };
type LocationDetails = { getAddressInfo(): string };

function createCombinedFunction<T extends PersonDetails, U extends LocationDetails>(names: T, location: U) {
    type CombinedPerson = T & U;

    return function (combined: CombinedPerson): void {
        console.log(`Hello, ${combined.getPersonInfo()} from ${combined.getAddressInfo()}`);
    };
}