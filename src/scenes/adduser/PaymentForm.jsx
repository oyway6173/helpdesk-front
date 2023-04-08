import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PaymentForm() {
  const [role, setRole] = React.useState('');
  const [dep, setDep] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setDep(event.target.value);
    
  };

  const handleChange1 = (event) => {
    
    setRole(event.target.value);
  };

  const handleChange2 = (event) => {
    
    setStatus(event.target.value);
  };



  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sx={{ maxWidth: "100% !important" }}>
          <InputLabel id="demo-simple-select-helper-label">Роль</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            sx={{ width: "100%" }}
            id="demo-simple-select-helper"
            value={role}
            label="Роль"
            onChange={handleChange1}
          >
            <MenuItem value={10}>Администратор</MenuItem>
            <MenuItem value={20}>Исполнитель</MenuItem>
            <MenuItem value={30}>Инициатор</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={12} sx={{ maxWidth: "100% !important" }}>
          <InputLabel id="demo-simple-select-helper-label1">Департамент</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label1"
            sx={{ width: "100%" }}
            id="demo-simple-select-helper1"
            value={dep}
            label="Dep"
            onChange={handleChange}
          >
            <MenuItem value={10}>HD</MenuItem>
            <MenuItem value={20}>1-я линия СД</MenuItem>
            <MenuItem value={30}>2-я линия сопровождения</MenuItem>
            <MenuItem value={40}>Департамент DevOps</MenuItem>
            <MenuItem value={50}>Департамент по сопровождению инфраструктурных решений</MenuItem>
            <MenuItem value={60}>Департамент по сопровождению АРМ Локаций Восток</MenuItem>
            <MenuItem value={70}>Департамент по сопровождению АРМ Локаций Запад</MenuItem>
            <MenuItem value={80}>Сопровождение РБО</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={12} sx={{ maxWidth: "100% !important" }}>
        <InputLabel id="demo-simple-select-helper-label1">Статус профиля</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label1"
            sx={{ width: "100%" }}
            id="demo-simple-select-helper1"
            value={status}
            label="Status"
            onChange={handleChange2}
          >
            <MenuItem value={10}>Заблокирован</MenuItem>
            <MenuItem value={20}>Ожидает активации</MenuItem>
            <MenuItem value={30}>Активирован</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}