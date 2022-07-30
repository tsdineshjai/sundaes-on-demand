import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";

import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("initial conditions of button and checkbox", () => {
	render(<SummaryForm />);

	const orderButton = screen.getByRole("button", { name: "Confirm Order" });
	const orderChecker = screen.getByRole("checkbox", {
		name: "I agree to terms and conditions",
	});

	expect(orderButton).toBeDisabled();
	expect(orderChecker).not.toBeChecked();
	//anyalzing hte firEvent
});

test("checkBox enables the button on first click and disables on next click", () => {
	//for userEvent v14 above the below code has to be written before rendering.

	render(<SummaryForm />);
	const orderButton = screen.getByRole("button", { name: "Confirm Order" });
	const orderChecker = screen.getByRole("checkbox", {
		name: "I agree to terms and conditions",
	});

	//firstClick
	userEvent.click(orderChecker);
	expect(orderButton).toBeEnabled();
	expect(orderChecker).toBeChecked();

	//secondCLick
	userEvent.click(orderChecker);
	expect(orderChecker).not.toBeChecked();
	expect(orderButton).toBeDisabled();
});

test("checking the pop over element prior hovering", async () => {
	render(<SummaryForm />);

	//popover starts hidden
	const popOverElement = screen.queryByText(/ice cream will not be delivered/i);
	expect(popOverElement).not.toBeInTheDocument();

	//popover starts when hovered over the target element
	const termsAndConditions = screen.getByText(/terms and conditions/i);
	userEvent.hover(termsAndConditions);

	const popOverElementAfterHovering = screen.getByText(
		/ice cream will not be delivered/i
	);
	expect(popOverElementAfterHovering).toBeInTheDocument();

	userEvent.unhover(termsAndConditions);
	await waitForElementToBeRemoved(() =>
		screen.queryByText(/ice cream will not be delivered/i)
	);
});
