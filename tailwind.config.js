/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        preflight: false,
    },

    theme: {
        extend: {
            backgroundImage: {
                folderVariant: "url('/src/assets/icons/folder.svg')",
                folder: "url('/src/assets/icons/folderWhite.svg')",
                setting: "url('/src/assets/icons/setting.svg')",
                settingVariant: "url('/src/assets/icons/settingBlue.svg')",
            },
            colors: {
                primary: {
                    DEFAULT: '#344afb',
                    foreground: '#6F40FF',
                },
                // secondary: {
                //     DEFAULT: 'hsl(var(--secondary))',
                //     foreground: 'hsl(var(--secondary-foreground))',
                // },
                // destructive: {
                //     DEFAULT: 'hsl(var(--destructive))',
                //     foreground: 'hsl(var(--destructive-foreground))',
                // },
                // muted: {
                //     DEFAULT: 'hsl(var(--muted))',
                //     foreground: 'hsl(var(--muted-foreground))',
                // },
                // accent: {
                //     DEFAULT: 'hsl(var(--accent))',
                //     foreground: 'hsl(var(--accent-foreground))',
                // },
            },
        },
    },
    plugins: [],
};
