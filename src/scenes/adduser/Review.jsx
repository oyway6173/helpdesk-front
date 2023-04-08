import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useTheme } from "@mui/material";
import { themeSettings, tokens } from "../../theme";

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['Москва, Проспект Андропова 81, к.1, эт. 7, рм 71'];
const payments = [
  { name: 'Email', detail: 'ex@ex.com' },
  { name: 'Телефон', detail: '+7(901)720-81-26' },
  { name: 'Роль', detail: 'Исполнитель' },
  { name: 'Департамент', detail: 'SD' },
  { name: 'Статус', detail: 'Активирован' },
];

const useStyles = makeStyles((theme = useTheme(), colors = tokens(theme.palette.mode)) => ({
  listItem: {
    color: colors.primary[900],
    padding: theme.spacing(1, 0),
  },
  total: {
    color: colors.primary[900],
    fontWeight: 700,
  },
  title: {
    color: colors.greenAccent[500],
    marginTop: theme.spacing(2),
  },
  descr: {
    color: colors.primary[900],
  }
}));

export default function Review() {
  const classes = useStyles();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
          <Typography variant="h6" gutterBottom className={classes.title}>
            Контакт
          </Typography>
          <Typography gutterBottom className={classes.descr}>Иванов Иван</Typography>
          <Typography gutterBottom className={classes.descr}>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Информация
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom className={classes.descr}>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom className={classes.descr}>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}