function dayOfWeek(day: number): void{
    enum days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };
    console.log(days[day] || "error");
}
dayOfWeek(1);