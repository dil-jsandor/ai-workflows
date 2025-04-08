import {useEffect, useState} from "react";
import {FormatBold} from "@mui/icons-material";
import {FormatItalic} from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import {FormatQuote} from "@mui/icons-material";
import {FormatUnderlined} from "@mui/icons-material";
import {Fullscreen} from "@mui/icons-material";
import Link from "@mui/icons-material/Link";
import {Search} from "@mui/icons-material";
import {StrikethroughS} from "@mui/icons-material";
import {
    Box,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton, MenuItem,
    Stack,
    TextField,
    Select,
    Typography, Paper, Divider, Autocomplete, InputAdornment, DialogActions, Button, Drawer
} from "@mui/material";
import {FormatListBulleted, FormatListNumbered, Undo, Redo} from "@mui/icons-material";

export type GeneratedRiskData = {
    title: string;
    category: string;
    description: string;
};

export default function RiskManagerSidebar({ open, onClose, generatedRisk = { title: '', category: '', description: '' } }: { open: boolean, onClose: () => void, generatedRisk?: GeneratedRiskData }) {
    const [name, setName] = useState(generatedRisk.title);
    const [riskId, setRiskId] = useState(`${generatedRisk.title}_${(generatedRisk.title?.length ?? 0) + 1}`);
    const [riskCategory, setRiskCategory] = useState(generatedRisk.category);
    const [riskDescription, setRiskDescription] = useState(generatedRisk.description);

    useEffect(() => {
        setName(generatedRisk.title);
        setRiskId(`${generatedRisk.title}_${(generatedRisk.title?.length ?? 0) + 1}`);
        setRiskCategory(generatedRisk.category);
        setRiskDescription(generatedRisk.description);
    }, [generatedRisk]);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { width: 800 }
            }}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #e0e0e0',
                    p: 2,
                }}
            >
                <Typography variant='h6'>Add Risk</Typography>
                <IconButton onClick={onClose} size='small'>
                    <Close/>
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{p: 3}}>
                <Stack spacing={3}>
                    <Box>
                        <Typography variant='body2' sx={{mb: 0.5}}>
                            Name{" "}
                            <span style={{color: 'rgba(0, 0, 0, 0.6)'}}>(required)</span>
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Risk"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>

                    <Box>
                        <Typography variant='body2' sx={{mb: 1}}>
                            Risk ID
                        </Typography>
                        <TextField
                            placeholder='Risk ID'
                            fullWidth
                            value={riskId}
                            onChange={(e) => setRiskId(e.target.value)}
                        />
                    </Box>

                    <Box>
                        <Typography variant='body2' sx={{mb: 1}}>
                            Risk Category
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                displayEmpty
                                value={riskCategory}
                                onChange={(e) => setRiskCategory(e.target.value)}
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return (
                                            <Typography color='text.secondary'>Select...</Typography>
                                        );
                                    }
                                    return selected;
                                }}
                            >
                                <MenuItem value='Operational'>Operational</MenuItem>
                                <MenuItem value='IT/Infosec'>IT/Infosec</MenuItem>
                                <MenuItem value='Financial'>Financial</MenuItem>
                                <MenuItem value='Regulatory/Compliance'>Regulatory/Compliance</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <Typography variant='body2' sx={{mb: 1}}>
                            Risk Description
                        </Typography>
                        <Paper variant='outlined' sx={{mb: 1}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    p: 1,
                                    borderBottom: '1px solid #e0e0e0',
                                }}
                            >
                                <FormControl variant='standard' sx={{minWidth: 120, mr: 1}}>
                                    <Select value='Paragraph' displayEmpty>
                                        <MenuItem value='Paragraph'>Paragraph</MenuItem>
                                    </Select>
                                </FormControl>
                                <Divider orientation='vertical' flexItem sx={{mx: 1}}/>
                                <IconButton size='small'>
                                    <FormatBold/>
                                </IconButton>
                                <IconButton size='small'>
                                    <FormatItalic/>
                                </IconButton>
                                <IconButton size='small'>
                                    <FormatUnderlined/>
                                </IconButton>
                                <IconButton size='small'>
                                    <StrikethroughS/>
                                </IconButton>
                                <Divider orientation='vertical' flexItem sx={{mx: 1}}/>
                                <IconButton size='small'>
                                    <FormatListBulleted/>
                                </IconButton>
                                <IconButton size='small'>
                                    <FormatListNumbered/>
                                </IconButton>
                                <Divider orientation='vertical' flexItem sx={{mx: 1}}/>
                                <IconButton size='small'>
                                    <FormatQuote/>
                                </IconButton>
                                <IconButton size='small'>
                                    <Link/>
                                </IconButton>
                                <IconButton size='small'>
                                    <Fullscreen/>
                                </IconButton>
                                <Divider orientation='vertical' flexItem sx={{mx: 1}}/>
                                <IconButton size='small'>
                                    <Undo/>
                                </IconButton>
                                <IconButton size='small'>
                                    <Redo/>
                                </IconButton>
                            </Box>
                            <TextField
                                multiline
                                fullWidth
                                minRows={10}
                                variant='standard'
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        p: 2,
                                    },
                                }}
                                value={riskDescription}
                                onChange={(e) => setRiskDescription(e.target.value)}
                            />
                        </Paper>
                    </Box>

                    <Box>
                        <Typography variant='body2' sx={{mb: 1}}>
                            Risk Owner
                        </Typography>
                        <Autocomplete
                            options={[]}
                            value='A fantastic Risk Owner'
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder='Name or Group...'
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <Search/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Stack>
            </DialogContent>

            <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            bgcolor: '#282E37'
                        }}
                    >
                        ADD RISK
                    </Button>
                    <Button
                        sx={{
                            color: '#282E37',
                            '& hover': {bgcolor: '#282E37'},
                        }}
                        onClick={onClose}
                    >
                        CANCEL
                    </Button>
                </Box>
            </DialogActions>
        </Drawer>
    )
}
