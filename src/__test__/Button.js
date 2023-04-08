import React from "react";
import Button from "../Components/Button";
import { render, screen } from "@testing-library/react";

describe("button", () => {
    describe("when the button is clicked", () => {
        it("should call the onClick handler", () => {
            const onClick = jest.fn();
            render(<Button onClick={onClick} />);
            screen.getByRole("button").click();
            expect(onClick).toHaveBeenCalled();
        });
    });
});
