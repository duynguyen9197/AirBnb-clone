export const underLine = {
    position: "relative",
    '&:after': {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "50%",
        width: "calc(100%)",
        transform: "translateX(-50%)",
        borderBottom: "1px solid rgba(238,238,238,.88)",
    }
}