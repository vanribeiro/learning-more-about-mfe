import { CircularProgress, Grid, Typography } from "@mui/material";

interface Props {
    horizontalAlign?: "center" | "flex-start" | "flex-end" ;
    verticalAlign?: "center" | "flex-start" | "flex-end" ;
    iconSize?: number;
    iconColor?: "primary" | "secondary" | "default";
    showIcon?: boolean;
}

const Loader = ({
    horizontalAlign = "center",
    verticalAlign = "center",
    iconSize = 32,
    showIcon = true,
    iconColor = "primary"
}: Props) => {

	return (
        <Typography variant="h6" align="center" sx={{ marginTop: "24px" }}>
            <Grid container alignItems={verticalAlign} justifyContent={horizontalAlign} spacing={1}>
                {showIcon && 
                    <Grid item>
                        <CircularProgress size={iconSize} color={iconColor as any} />
                    </Grid>
                }
                <Grid item>
                    <Typography>Carregando...</Typography>
                </Grid>
            </Grid>
        </Typography>
    );
}

export default Loader;