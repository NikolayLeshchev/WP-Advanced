const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Точка входа: здесь мы будем подключать наш JS и SCSS
    entry: './src/assets/js/main.js',
    
    // Куда сохранять готовые файлы
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true, // Очищает папку dist перед каждой новой сборкой
    },
    
    // Правила обработки файлов
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Вытаскивает CSS в отдельный файл
                    'css-loader',                // Читает CSS
                    'sass-loader'                // Компилирует SCSS в CSS
                ],
            },
        ],
    },
    
    // Плагины
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css', // Имя итогового CSS файла
        }),
    ],
};