import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LabelIcon from '@mui/icons-material/Label';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapIcon from '@mui/icons-material/Map';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    

    return (
        <Box 
            
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: `transparent !important`
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 30px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }, 
                
            }}>

            <ProSidebar collapsed={isCollapsed} position={"fixed"}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="5px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                            HELPDESK_APP
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        )}
                    </MenuItem>
                    
                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100 px"
                                    height="100px"
                                    src={`../../assets/images/avatars/avatar_4.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                                    Сергей Сергеев
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Инженер поддержки аka Исполнитель
                                </Typography>
                            </Box>

                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Дашборд"
                            to="/dashboard"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Общее
                        </Typography>
                        <Item
                            title="Обращения"
                            to="/tickets"
                            icon={<AssignmentIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                        <Item
                            title="Частые вопросы"
                            to="/faq"
                            icon={<LiveHelpIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Сотрудник
                        </Typography>
                        <Item
                            title="Рейтинг"
                            to="/rating"
                            icon={<TrendingUpIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                        <Item
                            title="Профиль"
                            to="/profile"
                            icon={<AccountBoxIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                        <Item
                            title="Площадки"
                            to="/geo"
                            icon={<MapIcon />}
                            selected={selected}
                            setSelected={setSelected} 
                        />
                       
                    </Box>

                </Menu>
            </ProSidebar>

        </Box>
    );
}

export default Sidebar;