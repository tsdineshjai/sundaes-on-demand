import React from "react";
import "./summary-form.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function SummaryForm() {
	const [disabled, setDisabled] = useState(false);
	const buttonDisabled = disabled === false ? true : false;

	const popover = (
		<Popover id="popover-basic">
			<Popover.Body>ice cream will not be delivered</Popover.Body>
		</Popover>
	);

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
				I agree to
				<OverlayTrigger placement="right" overlay={popover}>
					<span style={{ color: "darkBlue" }}>terms and conditions</span>
				</OverlayTrigger>
			</label>
			<input type="button" value="Confirm Order" disabled={buttonDisabled} />
		</div>
	);
}

export default SummaryForm;
