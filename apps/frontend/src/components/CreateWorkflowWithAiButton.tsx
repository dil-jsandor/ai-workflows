import {Box, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export const CreateWorkflowWithAiButton = () => {
    return (
        <Link to="/create-workflows">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "62px",
                    borderRadius: "17px",
                    maxWidth: '98%',
                    padding: "0 23px",
                    position: "relative",
                    overflow: 'hidden',
                    zIndex: 0,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'rgba(241,239,239,0.7)',
                    },
                    "&:active": {
                        backgroundColor: "#e8e6e6",
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "17px",
                        padding: "3px",
                        background: "linear-gradient(45deg, #6254FF, #F113AB, #D733E0)",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        pointerEvents: "none",
                        zIndex: -1,
                    },
                    backgroundColor: "#fffff",
                }}
            >
                <Box
                    component="img"
                    src="/ai_stars.svg"
                    alt="Workflow"
                    sx={{width: 27, height: 27}}
                />
                <Typography
                    sx={{
                        fontFamily: "'Plus Jakarta Sans', Helvetica, Arial, sans-serif",
                        fontWeight: 500,
                        fontSize: "23px",
                        color: "#282e37",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    Create new AI powered workflow
                </Typography>
            </Box>
        </Link>
    );
};

export default CreateWorkflowWithAiButton;

