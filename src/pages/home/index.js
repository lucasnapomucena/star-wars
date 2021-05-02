import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../theme';
import { Container, Loading } from '../../components';
import { Box, Subtitle, Title, Button } from './styled';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container justify="center">
        <Box>
          <Title>
            Welcome to <strong>iClinic</strong>
          </Title>
          <Subtitle>Frontend Challenge</Subtitle>

          <Button to="/master" onClick={handleSubmit}>
            Start
            {loading && (
              <Loading
                width="25px"
                height="25px"
                bg={defaultTheme.backgroundColor}
                spinner={defaultTheme.primary}
                ml="16px"
              />
            )}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
