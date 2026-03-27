function reverseDayOfWeek(day: string): void {
    enum days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
console.log(days[day as keyof typeof days] ?? "error");
}