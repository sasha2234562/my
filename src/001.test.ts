import  {sum, mun} from "./test-1"

test("correct", () => {
    const a = 4;
    const b = 2;
    const  result = sum(a, b);
    const  resultTwo = mun(a, b);
    expect(result).toBe(6);
    expect(resultTwo).toBe(2);
})
