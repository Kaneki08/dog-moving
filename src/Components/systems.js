import { DOG_CHAR_WIDTH, DOG_CHAR_HEIGHT } from "../constants";

const MoveCharacter = (entities, { input }) => {
  // get input to move character to the right
  const { payload } = input.find((x) => x.name === "onKeyDown") || {};

  console.log(payload);

  /**
   * inputItem:
   * - name
   * - payload
   */
  //   input.find((inputItem) => {
  //     if (inputItem.name === "onMouseMove") {
  //       return true;
  //     }
  //   });

  //saying that our character is the main entity
  const dogChar = entities["mainChar"];

  /**
   * take the right border x and subtract half of the dog width
   * TODO:
   * Make the game width a constant
   */
  const dogRightBorderCondition = 800 - DOG_CHAR_WIDTH / 2;
  const dogLeftBorderCondition = 0 + DOG_CHAR_WIDTH / 2

  if (payload) {
    // Only move the dog chracter if the entity has not reached the right border
    // we need to check the dog width
    if (dogChar.x < dogRightBorderCondition && payload.code === "ArrowRight") {
      // this moves the dog to the right
      dogChar.x = dogChar.x + 10;
      console.log(dogChar.x);
    } else {
      console.log("the dog should stop moving");
    }

        // Only move the dog chracter if the entity has not reached the right border
    // we need to check the dog width
    if (dogChar.x > dogLeftBorderCondition && payload.code === "ArrowLeft") {
        // this moves the dog to the right
        dogChar.x = dogChar.x - 10;
        console.log(dogChar.x);
      } else {
        console.log("the dog should stop moving");
      }
  }

  return entities;
};

export { MoveCharacter };
