import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "@/components/Project/style";

export const About = () => {
  return (
    <ProjectWrapper>
      <ProjectTitle
        as="h2"
        type="heading3"
        css={{ marginBottom: "$3" }}
        color="grey1"
      >
        TESTE
      </ProjectTitle>
    </ProjectWrapper>
  );
};
