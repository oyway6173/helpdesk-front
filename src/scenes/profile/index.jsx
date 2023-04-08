import { Button, Box, useTheme, Typography, Grid } from "@mui/material";
import React from 'react';
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { mockDataTickets } from "../../data/mockData";
import { Link } from 'react-router-dom';
import { mockTransactions } from "../../data/mockData"
import { mockRatingThisMounth } from "../../data/mockData"
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddressForm from '../adduser/AddressForm';
import { spacing } from "@mui/system";


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
  { name: 'Роль', detail: 'Администратор' },
  { name: 'Департамент', detail: 'SD' },
  { name: 'Статус', detail: 'Активирован' },
];
const Profile = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleColorType = col => {
      switch (col) {
        case "Золотой уровень":
          return colors.golden[700];
        case "Высший уровень":
          return colors.greenAccent[700];
        case "Средний уровень":
          return colors.grey[300];
        case "Низкий уровень":
          return colors.redAccent[300];
        default:
          return "#fff";
      }
    };
   

    return (
      <Box alignItems="center" m="20px">
        <Header title="Профиль" subtitle="Информация о сотруднике" />
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="auto"
            gap="20px"
        >
            <Box
                gridColumn="span 3" 
                gridRow="span 2"
                // backgroundColor={colors.primary[400]}
                overflow="auto"
            >
            </Box>
            {/*  Ряд 1, столбец 1 */}
            <Box
                gridColumn="span 2" 
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box display="flex" justifyContent="center" alignItems="center" colors={colors.grey[100]} p='15px'>
                    
                    <Box mb="25px">
                          <Box display="flex" justifyContent="center" alignItems="center"  sx={{ m: "30px 0 0 0" }}>
                              <img
                                  alt="profile-user"
                                  width="100 px"
                                  height="100px"
                                  src={`../../assets/user.png`}
                                  style={{ cursor: "pointer", borderRadius: "50%" }}
                              />
                          </Box>

                          <Box textAlign="center" mb="15px">
                              <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                                  Иван Иванов
                              </Typography>
                              <Typography variant="h5" color={colors.greenAccent[500]}>
                                  Администратор HD
                              </Typography>
                          </Box>
          
                          <Box mb="25px" textAlign="center">
                            <Grid container>
                              {payments.map((payment) => (
                                <React.Fragment key={payment.name}>
                                  <Grid item xs={6}>
                                    <Typography gutterBottom color={colors.grey[300]}>{payment.name}</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography gutterBottom color={colors.grey[100]}>{payment.detail}</Typography>
                                  </Grid>
                                </React.Fragment>
                              ))}
                             </Grid>
                          </Box>

                          <Box textAlign="center">
                              <Button
                                  sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}
                              >
                                  <FileUploadIcon sx={{ mr: "10px"}} />
                                  Загрузить фото
                              </Button>
                          </Box>

                      </Box>
                  </Box>
                  
            
            </Box>
            {/* Ряд 1, столбец 3 */}
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                // p="30px"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p='15px'>
                    <Typography color={colors.grey[100]} variant="h4" fontWeight="bold">
                        Изменение контактных данных
                    </Typography>
                </Box>

                <Box borderBottom={`4px solid ${colors.primary[500]}`} sx={{ m: "20px 10px 10px 10px" }} >
                  <AddressForm />
                </Box>

                <Box sx={{ m: "10px 10px 10px 10px" }} textAlign="right">
                    <Button
                        sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}
                    >
                        Сохранить
                    </Button>
                </Box>
               
            </Box>
            <Box
                gridColumn="span 3" 
                gridRow="span 2"
                // backgroundColor={colors.primary[400]}
                overflow="auto"
            >
            </Box>

            
            
                    


        </Box>
        
                    
    </Box>
      );
        
    
   
};



export default Profile;

