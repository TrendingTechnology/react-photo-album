module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
                loose: true,
            },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
};
