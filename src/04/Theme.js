export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

const breakpoints = {
    [BREAKPOINT_NAMES.LARGE]: 1128,
    [BREAKPOINT_NAMES.MEDIUM]: 744,
    [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
    [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
    [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
    print: '@media print',
};

export default {

    // 색상

    color : {
        primary : '#03a9f4',
        secondary : '#795548',
        white : '#fff',
        gray : '#ccc',
        default : '#999',
        error: '#FF0000', // 오류 색상

    },
    // 폰트 사이즈
    size: {
        xg: 24,
        lg: 18,
        md: 14,
        sm: 12,
        xs: 10,
    },
    lineHeight: {
        xg: '60px',
        lg: '54px',
        md: '36px',
        sm: '24px',
        xs: '18px',
    },
    // 길이 단위
    unit: 4,

    responsive,

}