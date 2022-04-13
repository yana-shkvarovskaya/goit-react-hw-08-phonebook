import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import s from './UserMenu.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
}));

export default function UserMenu() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, {name}</span>
      <Button
        variant="outlined"
        color="error"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={styles.root}
      >
        Log Out
      </Button>
    </div>
  );
}
