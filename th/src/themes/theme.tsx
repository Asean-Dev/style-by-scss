"use client";

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themePalette = {
    // primary
    primary: {
        light: '#404db4', // --color-primary-light
        main: '#1052B5', // --color-primary
        dark: '#121D77', // --color-primary-dark
    },
    // secondary
    secondary: {
        light: '#FFE70C', // --color-secondary-light
        main: '#BE9936', // --color-secondary
        dark: '#B18F30', // --color-secondary-dark
    },
    // error
    error: {
        light: '#ff2626', // --color-error-light
        main: '#f00', // --color-error
        dark: '#da0000', // --color-error-dark
    },
    // warning
    warning: {
        light: '#ff6c6d', // --color-warning-light
        main: '#ec4546', // --color-warning
        dark: '#c43839', // --color-warning-dark
    },
    // success
    success: {
        light: '#50ffa0', // --color-success-light
        main: '#14AE5C', // --color-success
        dark: '#00b552', // --color-success-dark
    },
    // info
    info: {
        light: '#566676', // --color-gray
        main: '#666', // --color-default
        dark: '#333', // --color-dark
    },
    // common
    common: {
        black: '#000', // --color-black
        white: '#fff', // --color-light
    },
};

const theme = createTheme({
    palette: themePalette,
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'var(--family-default)',
            fontWeight: 'var(--fw-normal)',
        },
        h1: { fontSize: 'var(--typo-xxl)', },
        h2: { fontSize: 'var(--typo-xl)', },
        h3: { fontSize: 'var(--typo-lg)', },
        h4: { fontSize: 'var(--typo-md)',},
        h5: { fontSize: 'var(--typo-sm)', },
        h6: { fontSize: 'var(--typo-default)', },
        subtitle1: { fontSize: 'var(--typo-md)', fontWeight: 'var(--fw-bold)', },
        subtitle2: { fontSize: 'var(--typo-sm)', fontWeight: 'var(--fw-bold)', },
        body1: { fontSize: 'var(--typo-default)', margin: '0 0 1rem',},
        body2: { fontSize: 'var(--typo-default)', },
        caption: { fontSize: 'var(--typo-xs)', },
    },
    components: {
        // typography
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    subtitle1: 'strong',
                    subtitle2: 'strong',
                    body1: 'p',
                    body2: 'span',
                    caption: 'small',
                },
            },
            styleOverrides: {
                root: {
                    transition: 'var(--transition)',
                    color: 'var(--color-default)',
                },
            },
        },
        // button
        MuiButton: {
            styleOverrides: {
                // default
                root: {
                    fontFamily: 'var(--family-default)',
                    fontSize: 'var(--typo-xs)',
                    fontWeight: 'var(--fw-bold)',
                    borderRadius: 'var(--btn-radius)',
                    transition: 'var(--transition)',
                    minWidth: 'var(--btn-width-default)',
                    height: 'var(--btn-height-default)',
                    border: '1px solid var(--color-default)',
                    color: 'var(--color-default)',
                    padding: '0 20px',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                    boxShadow: 'none',
                    lineHeight: '1.2em',
                    backgroundColor: 'transparent',
                    gap: '15px',
                    '&:hover': {
                        backgroundColor: 'var(--color-dark)',
                        borderColor: 'var(--color-dark)',
                        color: 'var(--color-light)', 
                        boxShadow: 'none',
                    }
                },
                // text link
                textPrimary: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    opacity: '1',
                    color: 'var(--color-primary)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-primary)', 
                    }
                },
                textSecondary: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    color: 'var(--color-secondary)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-secondary)', 
                    }
                },
                textError: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    color: 'var(--color-error)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-error)', 
                    }
                },
                textWarning: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    color: 'var(--color-warning)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-warning)', 
                    }
                },
                textSuccess: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    color: 'var(--color-success)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-success)', 
                    }
                },
                textInfo: {
                    border: 'none',
                    padding: '0',
                    minWidth: 'inherit !important',
                    height: 'inherit !important',
                    borderRadius: '0',
                    color: 'var(--color-dark)',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                        color: 'var(--color-black)', 
                    }
                },
                // btn size
                sizeSmall: {
                    minWidth: 'var(--btn-width-sm)',
                    height: 'var(--btn-height-sm)',
                    fontSize: 'var(--typo-xs)',
                },
                sizeMedium: {
                    minWidth: 'var(--btn-width-default)',
                    height: 'var(--btn-height-default)',
                    fontSize: 'var(--typo-xs)',
                },
                sizeLarge: {
                    minWidth: 'var(--btn-width-lg)',
                    height: 'var(--btn-height-lg)',
                    fontSize: 'var(--typo-default)',
                },
                // inherit
                containedInherit: {
                    borderColor: 'var(--color-default)',
                    backgroundColor: 'var(--color-default)',
                    color: 'var(--color-light)', 
                },
                outlinedInherit: {
                    borderColor: 'var(--color-default)',
                    backgroundColor: 'transparent',
                    color: 'var(--color-default)', 
                },
                // primary
                containedPrimary: {
                    backgroundColor: 'var(--color-primary)',
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary-dark)',
                        borderColor: 'var(--color-primary-dark)',
                        color: 'var(--color-light)',
                    }
                },
                outlinedPrimary: {
                    backgroundColor: 'var(--color-light)',
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary)',
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-light)',
                    }
                },
                // secondary
                containedSecondary: {
                    backgroundColor: 'var(--color-secondary)',
                    borderColor: 'var(--color-secondary)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: '#FFC300',
                        borderColor: '#FFC300',
                        color: 'var(--color-light)',
                    }
                },
                outlinedSecondary: {
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-secondary)',
                    color: 'var(--color-secondary)',
                    '&:hover': {
                        backgroundColor: 'var(--color-secondary-light)',
                        borderColor: 'var(--color-secondary-light)',
                        color: 'var(--color-dark)',
                    }
                },
                // error
                containedError: {
                    backgroundColor: 'var(--color-error)',
                    borderColor: 'var(--color-error)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-error-dark)',
                        borderColor: 'var(--color-error-dark)',
                        color: 'var(--color-light)',
                    }
                },
                outlinedError: {
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-error)',
                    color: 'var(--color-error)',
                    '&:hover': {
                        backgroundColor: 'var(--color-error-light)',
                        borderColor: 'var(--color-error-light)',
                        color: 'var(--color-error)',
                    }
                },
                // warning
                containedWarning: {
                    backgroundColor: 'var(--color-warning)',
                    borderColor: 'var(--color-warning)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-warning-dark)',
                        borderColor: 'var(--color-warning-dark)',
                        color: 'var(--color-light)',
                    }
                },
                outlinedWarning: {
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-warning)',
                    color: 'var(--color-warning)',
                    '&:hover': {
                        backgroundColor: 'var(--color-warning-light)',
                        borderColor: 'var(--color-warning-light)',
                        color: 'var(--color-light)',
                    }
                },
                // success
                containedSuccess: {
                    backgroundColor: 'var(--color-success)',
                    borderColor: 'var(--color-success)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-success-dark)',
                        borderColor: 'var(--color-success-dark)',
                        color: 'var(--color-light)',
                    }
                },
                outlinedSuccess: {
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-success)',
                    color: 'var(--color-success)',
                    '&:hover': {
                        backgroundColor: 'var(--color-success-light)',
                        borderColor: 'var(--color-success-light)',
                        color: 'var(--color-light)',
                    }
                },
                // info
                containedInfo: {
                    backgroundColor: 'var(--color-default)',
                    borderColor: 'var(--color-default)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-dark)',
                        borderColor: 'var(--color-dark)',
                        color: 'var(--color-light)',
                    }
                },
                outlinedInfo: {
                    backgroundColor: 'transparent',
                    borderColor: ' rgba(255,255,255,0.3)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-light)',
                        borderColor: 'var(--color-light)',
                        color: 'var(--color-primary-dark)',
                    }
                },
            },
        },
        // button icon
        MuiIconButton: {
            styleOverrides: {
                // default
                root: {
                    fontFamily: 'var(--family-default)',
                    fontSize: 'var(--typo-default)',
                    fontWeight: 'var(--fw-semibold)',
                    borderRadius: 'var(--btn-radius-icon)',
                    transition: 'var(--transition)',
                    minWidth: 'var(--btn-width-default)',
                    height: 'var(--btn-height-default)',
                    border: '1px solid var(--color-default)',
                    color: 'var(--color-default)',
                    padding: '0 10px',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                    boxShadow: 'none',
                    lineHeight: '1.2em',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'var(--color-dark)',
                        borderColor: 'var(--color-dark)',
                        color: 'var(--color-light)', 
                        boxShadow: 'none',
                    }
                },
                // size
                sizeSmall: {
                    minWidth: 'var(--btn-width-sm)',
                    height: 'var(--btn-height-sm)',
                    fontSize: 'var(--typo-xs)',
                },
                sizeMedium: {
                    minWidth: 'var(--btn-width-default)',
                    height: 'var(--btn-height-default)',
                    fontSize: 'var(--typo-default)',
                },
                sizeLarge: {
                    minWidth: 'var(--btn-width-lg)',
                    height: 'var(--btn-height-lg)',
                    fontSize: 'var(--typo-sm)',
                },
                // primary
                colorPrimary: {
                    backgroundColor: 'var(--color-primary)',
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-primary-light)',
                        borderColor: 'var(--color-primary-light)',
                        color: 'var(--color-light)',
                    }
                },
                // secondary
                colorSecondary: {
                    backgroundColor: 'var(--color-secondary)',
                    borderColor: 'var(--color-secondary)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-secondary-dark)',
                        borderColor: 'var(--color-secondary-dark)',
                        color: 'var(--color-light)',
                    }
                },
                // error
                colorError: {
                    backgroundColor: 'var(--color-error)',
                    borderColor: 'var(--color-error)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-error-dark)',
                        borderColor: 'var(--color-error-dark)',
                        color: 'var(--color-light)',
                    }
                },
                // warning
                colorWarning: {
                    backgroundColor: 'var(--color-warning)',
                    borderColor: 'var(--color-warning)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-warning-dark)',
                        borderColor: 'var(--color-warning-dark)',
                        color: 'var(--color-light)',
                    }
                },
                // success
                colorSuccess: {
                    backgroundColor: 'var(--color-success)',
                    borderColor: 'var(--color-success)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-success-dark)',
                        borderColor: 'var(--color-success-dark)',
                        color: 'var(--color-light)',
                    }
                },
                // info
                colorInfo: {
                    backgroundColor: 'var(--color-default)',
                    borderColor: 'var(--color-default)',
                    color: 'var(--color-light)',
                    '&:hover': {
                        backgroundColor: 'var(--color-dark)',
                        borderColor: 'var(--color-dark)',
                        color: 'var(--color-light)',
                    }
                },
            },
        },
        // form
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: 'var(--color-default)',
                    },
                    '& label.Mui-focused': {
                        color: 'var(--color-secondary)',
                    },
                    '& label.MuiInputLabel-shrink': {
                        color: 'var(--color-gray)',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& input': {
                            fontSize: 'var(--typo-default)',
                            color: 'var(--color-gray)',
                            padding: 'var(--form-padding)',
                            '&:hover': {
                                borderColor: 'var(--color-primary)',
                            }
                        },
                        '& fieldset': {
                            borderRadius:'4px',
                            borderColor: 'var(--color-default)',
                            transition: 'var(--transition)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--color-default)',
                            boxShadow: '0 0 10px var(--color-default)',
                        },
                        '& .Mui-focused fieldset': {
                            borderColor: 'var(--color-primary)',
                        },
                        '& .MuiIconButton-root ': {
                            color: 'var(--color-gray)',
                        },
                    },
                },
            },
        },
        // checkbox
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '0 9px',
                    transition: 'var(--transition)',
                    color: 'var(--color-default)',
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.5rem',
                    },
                },
                colorPrimary: {
                    '&.Mui-checked': {
                        color: 'var(--color-gray)',
                    },
                    '&.Mui-checked + span': {
                        color: 'var(--color-gray)',
                    },
                },
            },
        },
        // container
        MuiContainer: {
            styleOverrides: {
                root: {
                    "&.MuiContainer-maxWidthXs": {
                      maxWidth: "var(--container-xs)",
                    },
                    "&.MuiContainer-maxWidthSm": {
                      maxWidth: "var(--container-sm)",
                    },
                    "&.MuiContainer-maxWidthMd": {
                      maxWidth: "var(--container-md)",
                    },
                    "&.MuiContainer-maxWidthLg": {
                      maxWidth: "var(--container-lg)",
                    },
                    "&.MuiContainer-maxWidthXl": {
                      maxWidth: "var(--container-xl)",
                    },
                },
            },
        },
        // MuiAvatar
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--family-default)',
                },
            },
        },
        // MuiPaper
        MuiPaper: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--family-default)',
                    borderRadius: '0 0 10px 10px',
                    boxShadow: 'var(--box-shadow3)',
                },
            },
        },
        // MuiMenu
        MuiList: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--family-default)',
                    marginBottom: '0',
                    padding: '0',
                },
            },
        },
        // MuiMenuItem
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--family-default)',
                    marginBottom: '0',
                },
            },
        },
    },
});

export default function ConfigLayoutProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}