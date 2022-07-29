import { render, screen, fireEvent } from "@testing-library/react";

import SummaryForm from "../SummaryForm";

test("initial conditions of button and checkbox", () => {
	render(<SummaryForm />);

	const orderButton = screen.getByRole("button", { name: "Confirm Order" });
	const orderChecker = screen.getByRole("checkbox", {
		name: "I agree to Terms and Conditions",
	});

	expect(orderButton).toBeDisabled();
	expect(orderChecker).not.toBeChecked();
	//anyalzing hte firEvent
});

test("checkBox enables the button on first click and disables on next click", () => {
	render(<SummaryForm />);
	const orderButton = screen.getByRole("button", { name: "Confirm Order" });
	const orderChecker = screen.getByRole("checkbox", {
		name: "I agree to Terms and Conditions",
	});

	//firstClick
	fireEvent.click(orderChecker);
	expect(orderButton).toBeEnabled();
	expect(orderChecker).toBeChecked();

	//secondCLick
	fireEvent.click(orderChecker);
	expect(orderChecker).not.toBeChecked();
	expect(orderButton).toBeDisabled();
});
