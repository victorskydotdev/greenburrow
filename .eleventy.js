module.exports = function (eleventyConfig) {
	eleventyConfig.addDataExtension('json', (contents) => JSON.parse(contents));

	eleventyConfig.addWatchTarget('./src/compiled-assets/main.js');

	eleventyConfig.addWatchTarget('./src/compiled-assets/main.css');

	// Copy src/compiled-assets to /assets
	eleventyConfig.addPassthroughCopy({ './src/compiled-assets': 'assets' });

	// Copy all images
	eleventyConfig.addPassthroughCopy('./src/assets/images');

	return {
		dir: {
			includes: '_components',
			input: 'src',
			layouts: '_layouts',
			output: 'dist',
		},
	};
};
