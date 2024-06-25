export default {
	testEnvironment: "jest-environment-jsdom",
	testEnvironmentOptions: {
		customExportConditions: [''],
	},
	setupFiles: ['<rootDir>/jest.polyfills.js'],
	setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
	coverageDirectory : 'coverage',
	collectCoverageFrom: [
		'**/*.{ts,tsx,js,jsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!<rootDir>/tests/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/coverage/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/src/bootstrap.{ts,tsx,js,jsx}',
		'!<rootDir>/src/index.{ts,tsx,js,jsx}',
		'!<rootDir>/rsbuild.config.{ts,js}'
	],
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					parser: {
						tsx: true,
						syntax: "typescript",
					},
					transform: {
						react: {
							runtime: "automatic",
						},
					},
				},
				isModule: "unknown",
			},
		],
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/tests/mocks/file-mock.js",
		"\\.(css|less|scss|sass)$": "<rootDir>/tests/mocks/style-mock.js",
	},
};