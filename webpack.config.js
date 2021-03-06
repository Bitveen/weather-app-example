module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname + '/src',
        alias: {
            App: 'components/App.jsx',
            CurrentLocationWeather: 'containers/CurrentLocationWeather.jsx',
            SearchHistory: 'components/SearchHistory.jsx',
            SearchForm: 'components/SearchForm.jsx',
            Navbar: 'components/Navbar.jsx',
            Weather: 'components/Weather.jsx',
            WeatherByCity: 'containers/WeatherByCity.jsx',
            WeatherBySearchHistory: 'containers/WeatherBySearchHistory.jsx',
            NotFound: 'components/NotFound.jsx',
            FetchError: 'components/FetchError.jsx',
            actions: 'actions.jsx',
            reducers: 'reducers.jsx',
            api: 'api.jsx',
            actionTypes: 'actionTypes.jsx'
        },
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: __dirname + '/src',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
