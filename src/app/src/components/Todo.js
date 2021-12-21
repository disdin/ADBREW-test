
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        marginTop: 30,
        background: '#efecec',
        padding: 10,
        borderRadius:10,
        width:"50%",
    },
    typo:{
        fontSize:20,
        fontWeight:600

    }
})

const Todo = ({ todo }) => {
    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <Typography className={classes.typo}>{todo.todo}</Typography>
        </Box>
    )
}

export default Todo;