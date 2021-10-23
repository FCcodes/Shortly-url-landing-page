import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({

    breakpoints: {
        values: {
            phone: 0,
            tablet: 500,
            laptop: 980,
            desktop: 1300
        }
    },

    
})

theme.typography.h1 = {
    fontSize: '10vw',
    fontWeight: 700,
    
    [theme.breakpoints.up('tablet')]: {
        fontSize: '5vw'
    },
    [theme.breakpoints.up('laptop')]: {}
}

theme.typography.h2 = {
    fontSize: '8vw',
    fontWeight: 700,
    
    [theme.breakpoints.up('tablet')]: {
        fontSize: '4vw'
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '2.5vw'
    }
}

theme.typography.h3 = {
    fontSize: '5vw',
    fontWeight: 600,
    
    [theme.breakpoints.up('tablet')]: {
        fontSize: '2.5vw'
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '1.5vw'
    }
}

theme.typography.body2 = {
    fontSize: '0.82',
    fontWeight: 600,
    color: theme.palette.grey[500],
    
    [theme.breakpoints.up('tablet')]: {},
    [theme.breakpoints.up('laptop')]: {}
}


theme = responsiveFontSizes(theme)
export default theme

