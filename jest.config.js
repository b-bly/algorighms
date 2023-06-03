module.exports = {
	testMatch: ["**/*.spec.js"],
	transform: {
		"\\.ts$": "@swc/jest",
	},
};