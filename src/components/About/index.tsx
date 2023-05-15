import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import {
  ContactSection2,
  ContactSectionText2,
} from "@/components/Contacts/style";


export const About = () => {
  return (
    <ContactSection2>
      <Container>
        <ContactSectionText2>
          <Text type="heading2" color="brand1">
            Sobre Mim
          </Text>
          <Text type="body1" color="grey4">
            Atuação no desenvolvimento de páginas e aplicações web em
            TypeScript, usando ReactJS como biblioteca para criar as interfaces
            para o usuário.
          </Text>
          <Text type="body1" color="grey4">
            Além de diversas bibliotecas React para aprimorar e agilizar o
            trabalho, como React Hook Form, Yup, React-Router-DOM, Toastify,
            Styled-Components, dentre outros.
          </Text>
          <Text type="body1" color="grey4">
            Familiaridade com a utilização de Metodologias ágeis, como SCRUM e
            Kanban, onde tive oportunidade de ser SCRUM Master em um projeto que
            participei, tendo bastante facilidade em realizar trabalhos em
            equipe.
          </Text>
          <Text type="body1" color="grey4">
            Experiência com fluxo de trabalho Gitflow, além da preocupação com
            boas práticas nos códigos em desenvolvimento.
          </Text>
          <Text type="body1" color="grey4">
            Boa experiência em desenvolvimento de wireframes com o uso do Figma.
          </Text>
          <Text type="body1" color="grey4">
            Realização de alguns projetos em grupo durante a formação como
            desenvolvedor.
          </Text>
        </ContactSectionText2>
      </Container>
    </ContactSection2>
  );
};
