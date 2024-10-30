/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sss: '340px',
            ss: '455px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        boxShadow: {
            '2m': '0px 2px 8px #c3f3f3',
            '3m': '0px 2px 10px #d1a952',
            '3i': '0px 4px 8px #565584',
            '4i': '5px 5px 10px #302f6d',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            purple: '#34036c',
            hoverPup: '#24014b',
            red: '#b91c1c',
            green: '#16a34a',

            metal: '#565584',
            tahiti: '#3ab7bf',
            silver: '#ecebff',
            'bubble-gum': '#ff77e9',
            bermuda: '#78dcca',
            black: '#000',

            bgcB: 'rgba(0, 0, 0, 0.7)',

            lightBlue: '#c3f3f3',
            deepBlue: '#134B70',
            midnight: '#18223e9a',
            dd: '#134B70',

            yy: '#d1a952',
            yw: '#DFD3C3',
        },
        extend: {
            backgroundImage: {
                'content-bgc': "url('/img/IMG_Bgc3.png')",
                'game-start': "url('/img/IMG_Map.jpg')",
            },
        },
    },
    plugins: [],
}
