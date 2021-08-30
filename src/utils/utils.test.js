import {specialSum, substraction, ordenar} from './utils';


const data = ['Jose','Maria','Adriana']
const mockFn = jest.fn()

describe("utils.js", () => {
  test("specialSum", () => {
    expect(specialSum(2, 5)).toEqual(7)
  });

//   test("substraction", () => {
//     expect(substraction(5, 3)).toEqual(-2));
//   });


  test("ordenar", () => {
    expect(ordenar(data)).toEqual(['Maria','Jose','Adriana']);
  });
  
});
