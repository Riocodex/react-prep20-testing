import { render,fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test('check the initial value', () => {
  const { getByTestId } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;

  expect(Number(counter)).toEqual(0);
});

test("Check the increment Button", ()=>{
    const{getByTestId, getByRole} = render(<Counter initialValue={0}/>);
    let counter = getByTestId("count").textContent;
    expect(Number(counter)).toEqual(0);

    let incrementButton = getByRole("button",{ name: "Increase"});
    fireEvent.click(incrementButton);
    let counterInc = getByTestId("count").textContent;
    expect(Number(counterInc)).toEqual(1);  
})
