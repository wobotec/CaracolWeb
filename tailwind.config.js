//TOKEN DE CORES 22/01/2026
export default{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#007BFF', //ASIDE(SIDE BAR)
                primaryDark: '#0056B3',
                secondary: '#00A3CC', //LOGO

                background: '#F8F9FA', //FUNDO CLARO
                surface: '#FFFFFF', //CARDS
                border: '#E5E7EB',

                textPrimary: '#1F2937',
                textSecondary: '#6B7280',

                darkBg: '#0F172A',
                darkSurface: '#020617',
                darkText: '#E5E7EB',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif' /*Caso nenhuma dessa for carregadas para carregar uma sem serif*/], 
            },
            fontSize: {
                xs: '12px',
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '24px',
            },
            spacing: {
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            }
        }
    }
}
