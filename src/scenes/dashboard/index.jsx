import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData"

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle";
import { useEffect } from "react";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
            <Header title="Главная" subtitle="Здесь представлена статистика за текущий месяц" />
            <Box>
                <Button
                    sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px"}} />
                    Скачать статистику
                </Button>
            </Box>  
        </Box>

        

        {/* GRID & CHARTS */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >
            {/* ROW 1 */}
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="512"
                subtitle="Заявок открыто"
                progress="0.75"
                increase="+14%"
                icon={
                <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="12"
                subtitle="В работе"
                progress="0.50"
                increase="+21%"
                icon={
                <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="51"
                subtitle="Закрыто"
                progress="0.30"
                increase="+5%"
                icon={
                <MarkEmailReadIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>
            <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="449"
                subtitle="Ожидают назначения"
                progress="0.80"
                increase="+43%"
                icon={
                <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            </Box>

            {/* ROW 2 */}
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            > 
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Динамика запросов
                        </Typography>
                        <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                            2136 обращений за год
                        </Typography>
                    </Box>
                
                
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon 
                                sx={{fontSize: "26px", color: colors.greenAccent[500]}}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                    <LineChart isDashboard={true} />
                </Box>
            </Box>

            {/* Последние обращения */}
            <Box
                gridColumn="span 4" 
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p='15px'>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
                        Последние обращения
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
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
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                            {transaction.priority}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* ROW 3 */}
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                >
                    Рейтинг
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                    <ProgressCircle color1={"red"} size="125" />
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

            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ p: "30px 30px 0 30px" }}
                >
                    Нагрузка на департаменты
                </Typography>
                <Box height="250px" mt="-20px">
                    <BarChart isDashboard={true} />
                </Box>
            </Box>

            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ mb: "15px" }}
                >
                    Расположение кампусов *in progress*
                </Typography>
                <Box height="200px">
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>



        </Box>
    </Box>;
}

export default Dashboard; 