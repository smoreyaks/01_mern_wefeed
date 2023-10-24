import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const main = palette.default.neutral.main;
    const medium = palette.default.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:3006/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosmetics</Typography>
                <Typography color={medium}>MikaCosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning, immaculate beauty & made sure to make
                your skin is shining like light.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;
