import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./../../theme";
import { Container } from "./../../components";
import { Box, Subtitle, Title, Button } from "./styled";

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Box>
          <Title>
            Welcome to <strong>iClinic</strong>
          </Title>
          <Subtitle>Frontend Challenge</Subtitle>

          <Button to="/master">Start</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
