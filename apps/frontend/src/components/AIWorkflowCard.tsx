import CalendarToday from "@mui/icons-material/CalendarToday";
import Info from "@mui/icons-material/Info";
import Person from "@mui/icons-material/Person";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import {Workflow} from "../types/workflow.ts";
import {Link} from 'react-router-dom';

export type AIWorkflowCardProps = {
    workflow: Workflow
}

const AIWorkflowCard = (props: AIWorkflowCardProps) => {
    return (
        <Card
            sx={{
                width: "630px",
                height: "283px",
                borderRadius: 4,
                border: "2px solid rgba(40, 46, 55, 0.05)",
                position: "relative",
                p: 3,
                boxShadow: 'none'
            }}
        >
            <Box sx={{
                display: 'flex'
            }}>
                <Box
                    component="img"
                    src="/workflow.svg"
                    alt="Workflow"
                    sx={{width: 27, height: 27}}
                />
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: "'Plus Jakarta Sans', Helvetica",
                        fontWeight: 600,
                        color: "#282e37",
                        fontSize: "21px",
                        mb: 2,
                        ml: 1,
                    }}
                >
                    {props.workflow.title}
                </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarToday
                        sx={{ fontSize: 15, color: "rgba(40, 46, 55, 0.6)", mr: 1 }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', Helvetica",
                            fontWeight: 500,
                            color: "rgba(40, 46, 55, 0.6)",
                            fontSize: "12px",
                        }}
                    >
                        {props.workflow.createdAt.toDateString()}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Person
                        sx={{ fontSize: 15, color: "rgba(40, 46, 55, 0.6)", mr: 1 }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', Helvetica",
                            fontWeight: 500,
                            color: "rgba(40, 46, 55, 0.6)",
                            fontSize: "12px",
                        }}
                    >
                        Owned by Platformer
                    </Typography>
                </Box>
            </Stack>

            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                <Info
                    sx={{
                        fontSize: 15,
                        color: "rgba(40, 46, 55)",
                        mr: 1,
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: "'Plus Jakarta Sans', Helvetica",
                        fontWeight: 550,
                        color: "#282e37",
                        fontSize: "12px",
                        textAlign: "justify",
                        lineHeight: "13.9px",
                        width: "585px",
                    }}
                >
                    {props.workflow.description}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button
                    variant="outlined"
                    sx={{
                        fontFamily: "'Plus Jakarta Sans', Helvetica",
                        fontWeight: 800,
                        fontSize: "10px",
                        borderRadius: "8px",
                        height: "32px",
                        width: "78px",
                        border: "2px solid #282e37",
                        color: '#282E37'
                    }}
                >
                    EDIT
                </Button>
                <Link to={`/workflows/${props.workflow.workflowId}`}>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: "'Plus Jakarta Sans', Helvetica",
                            fontWeight: 800,
                            fontSize: "10px",
                            borderRadius: "8px",
                            height: "32px",
                            width: "122px",
                            backgroundColor: "#282e37",
                            border: "2px solid #282e37",
                            textWrap: "nowrap"
                        }}
                    >
                        USE WORKFLOW
                    </Button>
                </Link>
            </Box>
        </Card>
    );
};

export default AIWorkflowCard;