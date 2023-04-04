import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

describe("Button", () => {
  test("should render text", () => {
    render(<Button>click me</Button>);
    expect(screen.getByText("click me")).toBeInTheDocument();
  });

  test("should execute function on click", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>click me</Button>);
    const button = screen.getByRole("button");
    expect(onClick).toHaveBeenCalledTimes(0);
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
