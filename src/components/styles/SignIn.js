const styles = theme => ({
    centerScreen: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#00cccc'
    },
    media: {
    	width: 300,
    	height: 300
    },
    actions: {
    	display: 'flex',
    	minWidth: 200,
    	justifyContent: 'center'
    },
    card: {
    	maxWidth: 400,
    	display: 'flex',
    	justifyContent: 'center',
    	flexWrap: 'wrap',
    	backgroundColor: '#008080' 
    },
    header: {
    	fontSize: 40,
    	fontweight: 'bold'
    },
    cssLabel: {
    	'&$cssFocused': {
            color: 'black',
        },
    },
    cssFocused: {},
    underLine: {
    	'&:after': {
            borderBottom: '2px solid black',
        },
    },
    detailTitle: {
    	textDecoration: 'underline'
    }
})

export default styles