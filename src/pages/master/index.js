import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import api from "./../../services/api";
import { darkTheme, lightTheme, defaultTheme } from "./../../theme";
import { ButtonTopLeft, Box, ButtonBox, Image, Text } from "./styled";
import { Container, Back } from "../../components";

const Master = () => {
  const [loading, setLoading] = useState(true);
  const [persona, setPersona] = useState([]);
  const [theme, setTheme] = useState(defaultTheme);

  const thema = (skin) => {
    switch (skin) {
      case "white":
        return darkTheme;
      case "fair":
        return lightTheme;
      default:
        return defaultTheme;
    }
  };
  const getPersona = async () => {
    setLoading(true);
    try {
      const { data } = await Promise.race([
        api.get("/people/1"),
        api.get("/people/4"),
      ]);

      const value = thema(data.skin_color);

      setTheme(value);
      setPersona(data);

      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getPersona();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ButtonTopLeft to="/">
          <Back width={31} height={26} viewBox="0 0 31 26" />
          back
        </ButtonTopLeft>

        <Box>
          <ButtonBox onClick={getPersona} disabled={loading}>
            choose your path again, Padawan
          </ButtonBox>

          <Image>
            <img src={theme.img} alt={persona.name} />
          </Image>

          {persona.name && (
            <Text>
              Your master is <strong>{persona.name}</strong>
            </Text>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Master;
