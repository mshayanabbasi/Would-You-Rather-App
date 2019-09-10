const styles = theme => ({
    bar: {
        background: '#008080'
    },
    badge: {
        borderRadius: 200,
        width: 40,
        height: 40,
        right: 5,
        wordWrap: 'break-word',
        backgroundColor: 'red'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#00cccc',
        border: '0.05em soild #008080',
        margin: 15,
        borderRadius: 3
    },
    subHeadDiv: {
        marginTop: 8,
        marginBottom: 20,
        marginLeft: 8
    },
    optionText: {
        textAlign: 'left',
        display: 'flex'
    },
    barDiv: {
        borderRadius: 5,
        margin: "0 20px 10px 20px",
        padding: 2,
        border: '0.05em solid #008080'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles