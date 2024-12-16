/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {

        /* Tilføj din egen farvepalette nedenfor */
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'Burgundy': {
                50: '#FFD6D7',     
                100: '#FEAEAF',
                200: '#FD6265',
                300: '#FD1215',
                400: '#FD1215',
                500: '#6D0102',
                600: '#560102',
                700: '#560102',
                800: '#2D0101',
                900: '#140101',
                950: '#140101',
            },

            'Navy': {
                50: '#D6E0FA',     
                100: '#AEC2F4',
                200: '#6188EA',
                300: '#1D50D4',
                400: '#123387',
                500: '#071436',
                600: '#06112D',
                700: '#030C20',
                800: '#030817',
                900: '#010309',
                950: '#010205',
            },

            'Bubblegum': {
                50: '#FFFAFD',     
                100: '#FFF5FA',
                200: '#FFEBF4',
                300: '#FFE0F0',
                400: '#FFCAE5',
                500: '#FFCAE5',
                600: '#FF70BA',
                700: '#FF138E',
                800: '#B9005F',
                900: '#5C002F',
                950: '#2E0018',
            },

            'SkyBlue': {
                50: '#F0FAFF',     
                100: '#E0F5FF',
                200: '#BDE9FF',
                300: '#9EDFFF',
                400: '#7AD3FF',
                500: '#5AC8FF',
                600: '#16B1FF',
                700: '#008BD1',
                800: '#015C8A',
                900: '#003047',
                950: '#001824',
            },

            'Beige': {
                50: '#001824',     
                100: '#FDFDFC',
                200: '#AEC2F4',
                300: '#F8F6F2',
                400: '#F3F1EB',
                500: '#F2EFE8',
                600: '#CFC4AA',
                700: '#AD9B70',
                800: '#786944',
                900: '#3E3623',
                950: '#1C1A11',
            },

            'BW': {
                50: '#FFFFFF',     
                100: '#F2F2F2',
                200: '#E6E7E7',
                300: '#CCCBCC',
                400: '#B3B3B3',
                500: '#999999',
                600: '#808080',
                700: '#666666',
                800: '#4D4D4D',
                900: '#333333',
                950: '#000000',
            },
        
        },

		extend: {

         /* Tilføj din egen spacing nedenfor */
        spacing: {
            '1': '4px',
            '1.5': '6px',
            '2': '8px',
            '3': '12px',
            '4': '16px',
            '5': '20px',
            '6': '24px',
            '12': '48px',
            '24': '96px',
            '48': '192px',
            '96': '384px',
        },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        fontFamily: {
            'IvyOra': ['ivyora-display', 'serif'],
            'Brandon': ["brandon-grotesque", 'sans-serif'],
        },

        /* Tilføj dit typografiske hierarki herunder */
        fontSize: {
            base: ['0.75rem', { lineHeight: '1.25rem' }],

               /* Desktop */
            "display01-desktop": ['10.75rem', { lineHeight: '5.5rem' }],
            "display02-desktop": ['6.375rem', { lineHeight: '5rem' }],
            "qutoe-desktop": ['3.5rem', { lineHeight: '4rem' }],
            "h1-desktop": ['3rem', { lineHeight: '3.75rem' }],
            "h2-desktop": ['1.5rem', { lineHeight: '3rem' }],
            "h3-desktop": ['1.5rem', { lineHeight: '3rem' }],
            "h4-desktop": ['1.5rem', { lineHeight: '3rem' }],
            "p-L-desktop": ['1.25rem', { lineHeight: '2.5rem' }],
            "p-M-desktop": ['1.125rem', { lineHeight: '2.25rem' }],
            "p-S-desktop": ['1rem', { lineHeight: '2rem' }],
            "p-XS-desktop": ['0.875rem', { lineHeight: '1.75rem' }],


              /* Mobile */
              "display01-mobile": ['2.25rem', { lineHeight: '3.25rem' }],
              "qutoe-mobile": ['3rem', { lineHeight: '3.75rem' }],
              "h1-mobile": ['2rem', { lineHeight: '3rem' }],
              "h2-mobile": ['1.375rem', { lineHeight: '1.5rem' }],
              "h3-mobile": ['1.125rem', { lineHeight: '1rem' }],
              "p-L-mobile": ['1rem', { lineHeight: '2rem' }],
              "p-M-mobile": ['0.875rem', { lineHeight: '1.5rem' }],
              "p-S-mobile": ['0.75rem', { lineHeight: '1.25rem' }],
          },

        /* Tilføj dit fontvægt-hierarki nedenfor */
          fontWeight: {
            light: '300',
            regular: '400',
            medium: '500',
            bold: '600',
          },

          fontStyle: {
            fontstyle: 'normal',
            fontstyle: 'italic',
          },


        /* Borders - borderstørrelser herunder */
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            3: '3px',
            4: '4px',
        },


        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}