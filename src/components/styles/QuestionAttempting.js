const styles = theme => ({
    answerLabels: {
        fontSize: 18,
    },
    radio: {
        color: '#008080',
        padding: 30,
        '&&checked': {
            color: '#008080',
        }
    },
    checked: {},
    button: {
        border: '0.1em solid #008080',
        backgroundColor: 'white',
        width: '100%',
        '&:hover': {
            backgroundColor: '#008080'
        },
        marginTop: 18,
    },
    root: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    
    heading: {
        textAlign: 'left',
        padding: 20
    }
})

export default styles