type hallwayWithPass = {
    hallway: "A",
    pass?: "Guest"
}
type hallwayWithoutPass = {
    hallway: "C"
}
type TrainFloor = {
    number: 1,
    train: () => void,
    
} & (hallwayWithPass | hallwayWithoutPass);
type dineFloor ={
    number: 2,
    dine: () => void,
    hallway: "A" | "C",
    pass?: "Guest"
};
type sleepFloor = {
    number: 3,
    sleep: () => void,
    hallway: "A" | "C"
}
function visitFloor(
  floor: TrainFloor | dineFloor | sleepFloor
) {
  switch (floor.number) {
    case 1:
      floor.train();
      return;

    case 2:
      floor.dine();
      return;

    case 3:
      floor.sleep();
      return;
  }
}
