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
		'!<rootDir>/src/index.{ts,tsx,js,jsx}',
		'!<rootDir>/src/tests/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/src/tests/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/src/bootstrap.{ts,tsx,js,jsx}',
		'!<rootDir>/coverage/**/*.{ts,tsx,js,jsx}',
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
		"\\.(css|less|scss|sass)$": "<rootDir>/src/tests/mocks/file-mock.js",
	},
};
