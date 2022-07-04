// #todo

"use strict";

/* 0. Starter Code


*/

// =============== JSDoc description of the challenge ===============
/** 
* The government is issuing corona money to healthcareworkers
* The actual premium has not been decided yet
*
* For nurses:
*  Less than 10-year experience: x1,2
*  More than 10 or equal: x1,3
*  More than 15 or equal: x1,5
*  More than 20 or equal: x1,7
*  Never more than: 500 (throw an error)
 For doctors, the rules are as following:
*  Less than 10-year experience: x1,5
*  More than 10 or equal: x2
*  More than 20 or equal: x3
*  Never more than: 1000 (throw an error)
* Any other profession should not get a premium (but no error should be thrown)
*
* {
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
}
*/

/**
 * Calculate the premium for healthcareworkers
 *
 * @param {object} - The healthcareworker object that is passed to the function
 * @param {number} - The base premium
 * @return {number} The premium rounded down to an integer~
 */

// =============== your solutions will go here ===============
const premium = (employee = {}, base) => {
  let indexation;
  let expIndex;
  const database = [
    {
      profession: "nurse",
      experience: [10, 15, 20, 55],
      coefficient: [1.2, 1.3, 1.5, 1.7],
    },
    {
      profession: "doctor",
      experience: [10, 20, 56],
      coefficient: [1.5, 2, 3],
    },
  ];
  const workExperience = employee.experience;
  const jobName = employee.profession;
  for (const person of database) {
    if (person.profession === jobName) {
      expIndex = person.experience.findIndex((exp) => workExperience <= exp);
      indexation = person.coefficient[expIndex];
      break;
    }
  }
  if (Math.floor(base * indexation) > 500 && jobName === "nurse")
    throw new Error("too much money");
  if (Math.floor(base * indexation) > 1000 && jobName === "doctor")
    throw new Error("too much money");
  return Math.floor(base * indexation);
};

// =============== a for-of loop to control which solution(s) are tested ===============

for (const solution of [premium]) {
  // =============== test cases for this challenge ===============/
  describe(solution.name + ": _", () => {
    describe("Premium calculation for nurses", () => {
      describe("The base for premium calculation is 200", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,2 when she has less than 10 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 200)).toBe(
              Math.floor(1.2 * 200)
            );
          });
        }
        for (let j = 11; j <= 15; j++) {
          it("Should multiply by x1,3, when she has more than 10 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 200)).toBe(
              Math.floor(1.3 * 200)
            );
          });
        }
        for (let j = 16; j <= 20; j++) {
          it("Should multiply by x1,5, when she has more than 15 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 200)).toBe(
              Math.floor(1.5 * 200)
            );
          });
        }
        for (let j = 21; j <= 55; j++) {
          it("Should multiply by x1,7, when she has more than 20 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 200)).toBe(
              Math.floor(1.7 * 200)
            );
          });
        }
      });
      describe("The base for premium calculation is 300", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,2 when she has less than 10 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 300)).toBe(
              Math.floor(1.2 * 300)
            );
          });
        }
        for (let j = 11; j <= 15; j++) {
          it("Should multiply by x1,3, when she has more than 10 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 300)).toBe(
              Math.floor(1.3 * 300)
            );
          });
        }
        for (let j = 16; j <= 20; j++) {
          it("Should multiply by x1,5, when she has more than 15 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 300)).toBe(
              Math.floor(1.5 * 300)
            );
          });
        }
      });
      describe("The base for premium calculation is 400", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,2 when she has less than 10 year experience", () => {
            expect(solution({ profession: "nurse", experience: j }, 400)).toBe(
              Math.floor(1.2 * 400)
            );
          });
        }
      });
      describe("should return error if the premium exceeds a certain somme", () => {
        for (let j = 0; j <= 55; j++) {
          it("Should raise an error if the premium is more than 500", () => {
            expect(
              () => solution({ profession: "nurse", experience: j }, i) > 500
            ).toThrowError();
          });
        }
      });
    });
    describe("Premium calculation for doctors", () => {
      describe("The base for premium calculation is 200", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,5, when she has less than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 200)).toBe(
              Math.floor(1.5 * 200)
            );
          });
        }
        for (let j = 11; j <= 20; j++) {
          it("Should multiply by x2 when she has more than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 200)).toBe(
              Math.floor(2 * 200)
            );
          });
        }
        for (let j = 21; j <= 55; j++) {
          it("Should multiply by x3, when she has more than 20 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 200)).toBe(
              Math.floor(3 * 200)
            );
          });
        }
      });
      describe("The base for premium calculation is 300", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,5, when she has less than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 300)).toBe(
              Math.floor(1.5 * 300)
            );
          });
        }
        for (let j = 11; j <= 20; j++) {
          it("Should multiply by x2 when she has more than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 300)).toBe(
              Math.floor(2 * 300)
            );
          });
        }
        for (let j = 21; j <= 55; j++) {
          it("Should multiply by x3, when she has more than 20 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 300)).toBe(
              Math.floor(3 * 300)
            );
          });
        }
      });
      describe("The base for premium calculation is 400", () => {
        for (let j = 0; j <= 10; j++) {
          it("Should multiply by x1,5, when she has less than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 400)).toBe(
              Math.floor(1.5 * 400)
            );
          });
        }
        for (let j = 11; j <= 20; j++) {
          it("Should multiply by x2 when she has more than 10 year experience", () => {
            expect(solution({ profession: "doctor", experience: j }, 400)).toBe(
              Math.floor(2 * 400)
            );
          });
        }
      });
      describe("should return error if the premium exceeds a certain somme", () => {
        for (let j = 0; j <= 55; j++) {
          it("Should raise an error if the premium is more than 1000", () => {
            expect(
              () => solution({ profession: "doctor", experience: j }, i) > 1000
            ).toThrowError();
          });
        }
      });
    });
  });
}

// // =============== a minified solution you can use to test your test cases ===============

// // prettier-ignore