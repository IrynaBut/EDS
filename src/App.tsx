import { Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        EDSneakers 👟
      </Typography>
      <Typography variant="body1" gutterBottom>
        Bienvenue sur ta boutique en ligne !
      </Typography>
      <Button variant="contained" color="primary">
        Découvrir les produits
      </Button>
    </Container>
  );
}
