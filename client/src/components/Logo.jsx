import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoDM from "../assets/logo/WE_FEED_LOGO_DM_20240219c.png";
import LogoLM from "../assets/logo/WE_FEED_LOGO_LM_20240219b.png";
import { Image } from "@mui/icons-material";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Logo = ({ themeColors, isDesktopScreen, isMobileMenuToggled }) => {
    // Theme Destructure
    const { headingText, textHover, buttonLight2 } = themeColors || {};

    const navigate = useNavigate();

    const mode = useSelector((state) => state.mode);

    const LogoIcon = mode === "dark" ? LogoDM : LogoLM;
    return (
        <Box
            width="8rem"
            onClick={() => {
                navigate("/home");
                // navigate(0);
            }}
            sx={{
                height: "100%",
                fontSize: "clamp(1rem, 2rem, 2.25rem)",
                objectFit: "contain",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    color: textHover,
                    cursor: "pointer",
                },
            }}
        >
            <img height="100%" width="100%" alt="WeFeed" src={LogoIcon} />
        </Box>

        // <Typography
        //     fontFamily="PrequelShadow"
        //     // fontWeight="bold"
        //     fontSize="clamp(1rem, 2rem, 2.25rem)"
        //     color={headingText}
        //     sx={{
        // "&:hover": {
        //     color: textHover,
        //     cursor: "pointer",
        // },
        //     }}
        // >
        //     WeFeed
        // </Typography>
    );
};

export default Logo;
