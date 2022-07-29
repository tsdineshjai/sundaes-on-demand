import React from "react";
import "./summary-form.css";
import { useState } from "react";

function SummaryForm() {
	const [disabled, setDisabled] = useState(false);
	const buttonDisabled = disabled === false ? true : false;
	return (
		<div className="summary-form">
			<label htmlFor="toDisableOrderButton">
				<input
					type="checkbox"
					name="checkbox"
					id="toDisableOrderButton"
					defaultChecked={disabled}
					aria-checked={disabled}
					onClick={(e) => setDisabled(e.target.checked)}
				/>
				I agree to Terms and Conditions
			</label>
			<input type="button" value="Confirm Order" disabled={buttonDisabled} />
		</div>
	);
}

export default SummaryForm;
