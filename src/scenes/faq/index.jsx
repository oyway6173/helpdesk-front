import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Часто задаваемые вопросы" />

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Важный вопрос о работе системы
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Еще один вопрос
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Важный вопрос по составлению заявки
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Еще один вопрос по работе сайта
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Вопрос по веремени выполнения запросов
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false} sx={{ backgroundColor: colors.primary[400]}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Последний вопрос
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ;
