module.exports = {
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
		'!<rootDir>/coverage/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/jest.config.js',
		'!<rootDir>/jest.polyfills.js',
		'!<rootDir>/rsbuild.config.{ts,js}',
		'!<rootDir>/src/assets/**/*',
		'!<rootDir>/src/tests/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/src/bootstrap.{ts,tsx,js,jsx}',
		'!<rootDir>/src/index.{ts,tsx,js,jsx}',
		'!<rootDir>/src/env.d.{ts,tsx}',
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
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$"
			: "<rootDir>/src/tests/mocks/file-mock.js",
		'techshop/ListLastNewsTopics': '<rootDir>/src/tests/mocks/ListLastNewsTopics.js',
		'techshop/Products': '<rootDir>/src/tests/mocks/Products.js',
		'techshop/api': '<rootDir>/src/tests/mocks/fetch-data.js',
		"\\.(css|less|scss|sass)$"
			: "<rootDir>/node_modules/jest-css-modules-transform"
			,
		"^@mf-types/(.*)$": "<rootDir>/@mf-types/$1",
	},
};