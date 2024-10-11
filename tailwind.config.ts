import type {Config} from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            sans: ['Figtree', 'sans-serif'],
        },
        extend: {
            colors: {
                secondary: colors.blue,
                purple: {
                    '50': '#fbf5ff',
                    '100': '#f6e8ff',
                    '200': '#efd4ff',
                    '300': '#e0aaff',
                    '400': '#c77dff',
                    '500': '#9d4edd',
                    '600': '#7b2cbf',
                    '700': '#5a189a',
                    '800': '#3c096c',
                    '900': '#240046',
                    '950': '#10002b',
                },
            }
        }
    }
}
