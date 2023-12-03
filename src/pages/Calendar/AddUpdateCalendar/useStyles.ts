import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
        height: 300,
        width: 600,
        marginTop: 40,
        borderRadius: 50,
        marginBottom: 25,
        // [theme.breakpoints.down('md')]: {
        //   width: '100%'
        // }
      },
      imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      intorduction: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontSize: 14,
        fontWeight: 800,
        color: 'black',
        textTransform: 'uppercase',
        backgroundColor: 'green',
        padding: theme.spacing(2),
      },
      sectionContainer: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(2)
      },
      sectionTitle: {
        color: '#800000',
        fontSize: 18,
        fontWeight: 600,
        paddingTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
      },
      listItemTextStyle: {
        textTransform: 'capitalize',
        fontSize: 8,
        opacity: 0.8
      },
      tourTitle: {
        textTransform: 'uppercase', 
        fontSize: 16, 
        fontWeight: 800,
        paddingTop: theme.spacing(2),
      },
      ListImagesContainer: {
        width: 600,
        margin: '1em 0 2em 0',
        [theme.breakpoints.down('md')]: {
          width: 350
        }
      },
      singleImg: {
        width: 600,
        [theme.breakpoints.down('md')]: {
          width: 300
        }
      },
      settingPricesBox: {
        backgroundColor: 'red',
        marginTop: theme.spacing(3), 
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      updateBtn: {
        backgroundColor: 'green',
        marginTop: theme.spacing(1)
      },
      inputs: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: theme.spacing(2),
        marginBottom: '2em',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:cfous': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
    },
    inputLabelStyle: {
      marginBottom: theme.spacing(1),
      fontWeight: 800
    },
    form: {
      width: '100%',
      backgroundColor: '#E0E0E0',
      '& .MuiFormControl-root': {
          marginTop: theme.spacing(1),
      },
      padding: theme.spacing(2),
      overflow: 'hidden',
      position: 'relative'
    },
    itemContainer: {
      margin: '1em 0 1em 0',
      justifyContent: 'center',
      alignItems: 'center'
    },
    select: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: theme.spacing(2),
      marginTop: '0.5em',
      width: '100%',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    fieldInputLabel:  {
      fontSize: 12,
      fontWeight: 800,
      textTransform: 'uppercase',
      color: theme.palette.common.black,
      marginTop: '0.5em',
      padding: theme.spacing(1)
    },
    mainTitle: {
      fontSize: 20,
      fontWeight: 800,
      textAlign: 'center',
      textTransform: 'uppercase',
      paddingTop: theme.spacing(3)
    },
    iconStyle: {
      padding: theme.spacing(1)
    },
    submit: {
      textTransform: 'uppercase',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(6, 2, 2),
      padding: theme.spacing(1),
      width: 160,
      height: 56,
      fontSize: 12,
      fontWeight: 600,
  },
  boxGridItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  progressStyle: {
    color: 'black'
  }
}));

export default useStyles;