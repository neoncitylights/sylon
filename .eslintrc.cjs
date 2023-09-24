module.exports = {
	env: {
		node: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'neoncitylights/react-typescript',
	],
	ignorePatterns: [
		'node_modules',
		'dist',
	],
};
