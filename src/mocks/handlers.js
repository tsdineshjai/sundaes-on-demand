import { rest } from "msw";

export const handlers = [
	rest.get('http"//localhost:3030', (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: "Chocoloate", imagePath: "/images/chocolate.png" },
				{ name: "Vanilla", imagePath: "/images/vanilla.png" },
			])
		);
	}),
];

//ctx is the utility to build response.
