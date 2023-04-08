import { Box, IconButton, useTheme, Typography } from "@mui/material";
// import { useContext } from "react";
import { tokens } from "../../theme";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const BottomBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);

  return (
    <Box 
      // padding= "20px 700px 0px 700px"
    >
      {/* COPYRIGHT */}
      <Box
        borderTop={2}
        borderColor = {colors.grey[500]}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        // backgroundColor={colors.primary[400]}
        // borderRadius="3px"
      >
        <Typography mt={3} color={colors.grey[100]}>
             © 2022 HELPDESK_APP. Created by Borozdin Nikita
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex" justifyContent={"center"}  alignItems="center">
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TelegramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BottomBar;