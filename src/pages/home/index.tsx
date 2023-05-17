// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { About } from "@/components/About";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio-olivio`;

  return (
    <main id="home">
      <FloatingWhatsApp
        accountName="Olívio Freitas"
        phoneNumber={userData.whatsappNumber}
        allowClickAway={true}
        placeholder="Vi seu portfolio e tenho interesse..."
        chatMessage="Obrigado pela visita. Em que posso ajudar você?"
        statusMessage="Responde em até 2h"
        avatar={`https://github.com/${userData.githubUser}.png`}
        darkMode={true}
      />
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, eu me chamo {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Desenvolvedor{" "}
              <Text as="span" type="heading1" color="brand1">
                Full Stack
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey3">
              Obrigado pela visita. Navegue nesta página e descubra os projetos
              que desenvolvi e as tecnologias que eu uso.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Meus Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código fonte deste portfolio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns projetos{" "}
                <Text as="span" color="brand5">
                  realizados
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
      <About />
    </main>
  );
};
