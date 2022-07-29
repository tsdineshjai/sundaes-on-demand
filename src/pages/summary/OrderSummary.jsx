import React from "react";
import SummaryForm from "./SummaryForm";

function OrderSummary() {
	return (
		<div>
			<h1>Order Summary</h1>
			<h3>Scoops: $600</h3>
			<ul>
				<li>3 Vanilla</li>
			</ul>

			<h3>Toppings: $4.50</h3>
			<ul>
				<li>M&Ms</li>
				<li>Hot Fudge</li>
				<li>Gummi Bears</li>
			</ul>

			<SummaryForm />
		</div>
	);
}

export default OrderSummary;
