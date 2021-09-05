import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		gray: {
			"900": "#181B23",
			"800": "#1F2029",
			"700": "#353646",
			"600": "#4B4D63",
			"500": "#616480",
			"400": "#797D9A",
			"300": "#9699B0",
			"200": "#B3B5C6",
			"100": "#D1D2DC",
			"50": "#ffff",
		},
		green: {
			"900": "#008744ff",
			"800": "#009149ff",
			"700": "#019B4Eff",
			"600": "#01A553ff",
			"500": "#01AF58ff",
			"400": "#02B85Eff",
			"300": "#02C263ff",
			"200": "#02CC68ff",
			"100": "#03D66Dff",
			"50": "#03E072ff",
		},
		blue: {
			"900": "#0057E7ff",
			"800": "#1062EAff",
			"700": "#216DECff",
			"600": "#3179EFff",
			"500": "#4184F2ff",
			"400": "#528FF4ff",
			"300": "#629AF7ff",
			"200": "#72A6FAff",
			"100": "#83B1FCff",
			"50": "#93BCFFff",
		},
		red: {
			"900": "#D62D20ff",
			"800": "#DA3B2Eff",
			"700": "#DE483Dff",
			"600": "#E2564Bff",
			"500": "#E66359ff",
			"400": "#EA7168ff",
			"300": "#EE7E76ff",
			"200": "#F28C84ff",
			"100": "#F69993ff",
			"50": "#FAA7A1ff",
		},
		yellow: {
			"900": "#FFA700ff",
			"800": "#FFAD10ff",
			"700": "#FFB221ff",
			"600": "#FFB831ff",
			"500": "#FFBD41ff",
			"400": "#FFC352ff",
			"300": "#FFC862ff",
			"200": "#FFCE72ff",
			"100": "#FFD383ff",
			"50": "#FFD993ff",
		},
	},
	fonts: {
		body: "Poppins",
		heading: "Poppins",
	},
	styles: {
		global: {
			body: {
				bg: 'gray.50',
				color: 'gray.900',
			}
		}
	}
})
