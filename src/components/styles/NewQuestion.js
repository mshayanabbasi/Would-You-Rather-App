const styles = theme => ({
    centerScreen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'inherit',
    },
    textField: {
        flex: 2,
        display: 'flex',
        marginTop: 2,
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#008080",
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: "#008080",
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
            borderColor: "#008080",
        }
    },
    disabled: {},
    focused: {},
    error: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: "#008080",
        },
    },
    notchedOutline: {},
    cssLabel: {
        '&$cssFocused': {
            color: "#008080",
        },
    },
    cssFocused: {},
    margin: {
        marginLeft: 15,
        marginBottom: 25,
    },
    button: {
        border: "0.1em solid #008080",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: '#008080',
        },
        marginTop: 18,
    },
    header: {
        flex: 2,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        margin: 20,
    },
    subHead: {
        flex: 2,
        textAlign: 'left',
        margin: 10,
        marginLeft: 20
    }
})

export default styles