import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import api from "./../../services/api";
import { darkTheme, lightTheme, defaultTheme } from "./../../theme";
import { ButtonTopLeft, Box, ButtonBox, Image, Text } from "./styled";
import { Container, Back, Loading } from "../../components";

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
    try {
      const { data } = await Promise.race([
        api.get("/people/1"),
        api.get("/people/4"),
      ]);
      console.log(data);
      const skin = thema(data?.skin_color);

      setTheme(skin);
      setPersona(data);

      setLoading(false);
    } catch (error) {}
  };

  const handleClick = () => {
    setLoading(true);

    getPersona();
  };

  useEffect(() => {
    async function getPersona() {
      try {
        const { data } = await Promise.race([
          api.get("/people/1"),
          api.get("/people/4"),
        ]);

        const skin = thema(data?.skin_color);

        setTheme(skin);
        setPersona(data);

        setLoading(false);
      } catch (error) {
        setLoading(true);
        //throw new Error(error);
      }
    }

    getPersona();
  }, []);

  if (loading && !persona.length) {
    return (
      <Container display="flex" justify="center" align="center">
        <Loading
          width="100px"
          height="100px"
          bg={defaultTheme.textColor}
          spinner={defaultTheme.light}
          align="center"
        />
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <>
          <ButtonTopLeft to="/">
            <Back width={31} height={26} viewBox="0 0 31 26" />
            back
          </ButtonTopLeft>
          <Box>
            <ButtonBox onClick={handleClick} disabled={loading}>
              choose your path again, Padawan
            </ButtonBox>

            {persona.name && (
              <>
                <Image>
                  <img src={theme.img} alt={persona.name} />
                </Image>
                <Text>
                  Your master is <strong>{persona.name}</strong>
                </Text>
              </>
            )}
          </Box>
        </>
      </Container>
    </ThemeProvider>
  );
};

export default Master;
