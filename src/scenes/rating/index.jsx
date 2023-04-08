import { Box, useTheme, Typography, Grid } from "@mui/material";
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

const Rating = () => {
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

    const columns = [
        { field: "id", headerName: "ID", flex: 0.1 },
        { 
            field: "number", 
            headerName: "Номер обращения",
            cellClassName: "ticket-column--cell",
            renderCell: (params) => (
                <Link to={`/ticket/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
              ) 
        },
        {
          field: "customer",
          headerName: "Инициатор",
          flex: 1,
          cellClassName: "name-column--cell",
          renderCell: (params) => (
            <Link to={`/user/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
          )
        },
        {
          field: "summary",
          headerName: "Заголовок",
          type: "text",
          headerAlign: "left",
          align: "left",
          flex: 1,
        },
        {
          field: "status",
          headerName: "Статус",
          flex: 1,
        },
        {
          field: "priority",
          headerName: "Приоритет",
          flex: 1,
        },
        {
          field: "asignee",
          headerName: "Исполнитель",
          flex: 1,
          renderCell: (params) => (
            <Link to={`/user/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
          ) 
        },
        {
          field: "dep",
          headerName: "Департамент",
          flex: 1,
          renderCell: (params) => (
            <Link to={`/dep/${params.value}`} style={{ color: `${colors.greenAccent[400]}` }}>{params.value}</Link>
          ) 
        },
        
      ];

    return <Box m="20px">
        <Header title="Рейтинг" subtitle="Распределение сотрудников в системе мотивации" />
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="500px"
            gap="20px"
        >
            {/*  Ряд 1, столбец 1 */}
            <Box
                gridColumn="span 3" 
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p='15px'>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
                        Рейтинг за текущий месяц
                    </Typography>
                </Box>
                {mockRatingThisMounth.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[600]}`}
                        p='15px'
                    >
                        <Box>
                            <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                {transaction.uID}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} p="5px 10px">{transaction.koef}</Box>
                        <Box backgroundColor={handleColorType(transaction.zone)}
                            p="5px 10px" 
                            borderRadius="4px"
                            >
                            {transaction.zone}
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Ряд 1, столбец 2 */}
            <Box
                gridColumn="span 3" 
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p='15px'>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
                        Рейтинг за предыдущий месяц
                    </Typography>
                </Box>
                {mockRatingThisMounth.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[600]}`}
                        p='15px'
                    >
                        <Box>
                            <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                {transaction.uID}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} p="5px 10px" >{transaction.koef}</Box>
                        <Box backgroundColor={handleColorType(transaction.zone)}
                            p="5px 10px" 
                            borderRadius="4px"
                            >
                            {transaction.zone}
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Ряд 1, столбец 3 */}
            <Box
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                // p="30px"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p='15px'>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
                        Статистика по закрытым заявкам прошлого месяца
                    </Typography>
                </Box>
                <Box height="60vh">
                    <PieChart />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        По итогам прошлого месяца
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight="600"
                    >
                        Ваша позиция в рейтинге - 17
                    </Typography>
                </Box>
            </Box>

            
            
                    


        </Box>
        
                    
    </Box>
}

export default Rating;
