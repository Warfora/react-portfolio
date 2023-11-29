import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Grid,
  Skeleton,
  AspectRatio
} from '@chakra-ui/react';
import nokia_img from "../assets/nokia.png";
import f_secure_img from "../assets/f_secure.png";
import niemi_img from "../assets/niemi.png";

function Project({ title, title2, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={`mode.${colorMode}.career.text`}>
        <Flex alignItems="center">
          <Text as="span" color={`mode.${colorMode}.career.text`}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={50}
        p={5}
        _hover={{ shadow: 'md' }}
        borderWidth="2px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={`mode.${colorMode}.cardBG`}
        position="relative"
        rounded="md"
        
        /*1.85*/
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.55 / 1} w="100%" borderBottomWidth="1px">  
            <Image
              rounded="md"
              src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="105%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="1.8"
              color={`mode.${colorMode}.subtext`}

            >
              {desc}
            </Text>

            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="3"
              color={`mode.${colorMode}.subtext`}
            >
              {title2}
            </Text>

            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="2 3px"  /*3*/
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  /*color={`mode.${colorMode}.career.subtext`}
                  bgColor={`mode.${colorMode}.career.tagBG`}*/
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
  const { colorMode } = useColorMode();
  const projects = [
    {
      title: 'Mover/Transformer',
      desc: `After a long period of sedentary work in programming, I'm taking a break to engage in physical work as a mover at Niemi's moving and logistics services`,
      title2: '',
      tech: 'Physical fitness',
      image_url: niemi_img,
    },
    {
      title: 'Nokia Trainee',
      desc: `9-month traineeship at Nokia where I mostly improved my team's Jenkins test automation jobs and added new features using DSL, Groovy and Bash scripting. Later been working on test cases and refactoring code using Python.`,
      title2: '',
      tech: 'Python, Jenkins, Groovy, Bash',
      image_url: nokia_img,
    },
    {
      title: 'F-Secure Trainee',
      desc: `OSAO's second year's internship at F-Secure where I tested vpn company's apps and sought improvement ideas from a user's point of view. In the end, discussed the changes with the Lead Graphic Designer and gained insights into the tools used in designing.`,
      title2: '',
      tech: 'Graphics Design',
      image_url: f_secure_img,
    },
  ];
  return (
    <Stack
      as="main"
      padding="0.1rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="68rem" /*48*/
      paddingTop="1rem"
    >
      <Stack spacing={50}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            title2={project.title2}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;