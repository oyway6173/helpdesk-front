import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authService";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

         <Box m="20px">
            <Header title="Главная" subtitle="Добро пожаловать в HelpdeskApp!" />

            
        </Box>
        
    );
};

export default Home;
