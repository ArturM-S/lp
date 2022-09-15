import Typical from 'react-typical';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiHtml5, SiCss3, SiNextdotjs } from 'react-icons/si';
import {
  BarHoverButton,
  Card,
  CardBox,
  CardContent,
  CardIcon,
  CenterContainer,
  Companies,
  ContactLinks,
  Container,
  Content,
  Duration,
  Image,
  ImageBackLine,
  ImageBox,
  ImageContainer,
  Line,
  Main,
  Roles,
  RolesAndDuration,
  SocialMediaButton,
  SocialMediaIcon,
  SocialMediaLinks,
  Subtitle,
  TagName,
  Text,
  TextDiv,
  TextImageBox,
  TextSide,
  Title,
  Works,
} from '../../../shared/pages/Sobre/styles';
import { Button } from '../../components/Global/Button';

export default function Home() {
  const push = () => {
    window.open('https://api.whatsapp.com/send?phone=5527995192645');
  };
  // const [animation, setAnimation] = useState(false)

  return (
    <Container>
      <Content>
        <Main>
          <Title>
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                'System Developer creating thoughtful, intuitive and modern solutions.',
                1000,
              ]}
            />
          </Title>
          <Text>
            I’m <span style={{ color: '#00613c' }}>Artur Marques</span>, a
            brazilian based Full-stack developer. I specialize in applications
            from web, desktop and mobile with a focus on solve your digital
            demands.
          </Text>
          <ContactLinks>
            <SocialMediaLinks>
              <SocialMediaButton
                href="https://www.linkedin.com/in/felipelages/"
                target="_blank"
              >
                <SocialMediaIcon src="/assets/iconLinkedin.svg" />
              </SocialMediaButton>
              <SocialMediaButton
                href="https://github.com/Lipping"
                target="_blank"
              >
                <SocialMediaIcon src="/assets/iconGithub.svg" />
              </SocialMediaButton>
            </SocialMediaLinks>
            <Button onClick={push}>Contate-nos!</Button>
          </ContactLinks>
        </Main>
        <Line />
        <Main>
          <TextImageBox>
            <TextDiv>
              <Subtitle>About me</Subtitle>
              <TextSide>
                Hello! My name is Artur, I graduated in system information in
                2019 at the Federal institute of Espírito Santo. I’m passionate
                about the technology solutions, that’s why I decided to
                specialize in this area.{' '}
              </TextSide>
            </TextDiv>
            <ImageBox>
              <ImageContainer>
                <Image src="assets/profile.jpg" />
              </ImageContainer>
              <ImageBackLine />
            </ImageBox>
          </TextImageBox>
          <Text>
            Outside of work my hobbies include League of legends, exploring new
            places with my friends, discovering new technologies and learn new
            things about this infinite possibilities area.
          </Text>
          <a href="/assets/resume.pdf" target="_blank">
            <Button>Resume</Button>
          </a>
        </Main>
        <Line />
        <Main>
          <Subtitle>Technologies</Subtitle>
          <Text>
            Here are a few technologies I’ve been working with recently:
          </Text>
          <CardBox>
            <Card>
              <CardContent>
                <FaReact size={32} />
                <Text>React</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <IoLogoJavascript size={32} />
                <Text>JavaScript</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <SiTypescript size={32} />
                <Text>TypeScript</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <SiHtml5 size={32} />
                <Text>HTML</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <SiCss3 size={32} />
                <Text>CSS</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <SiNextdotjs size={32} />
                <Text>NextJS</Text>
              </CardContent>
            </Card>
          </CardBox>
        </Main>
        <Line />
        <Main>
          <Subtitle>Work</Subtitle>
          <Works>
            <Companies>
              <Text>ATW Delivery Brands</Text>
              <Text>Freelancer</Text>
            </Companies>
            <RolesAndDuration>
              <Roles>
                <Text>Web developer</Text>
                <Text>Web developer</Text>
              </Roles>
              <Duration>
                <Text>2021 - now</Text>
                <Text>2020 - now</Text>
              </Duration>
            </RolesAndDuration>
          </Works>
        </Main>
        <Line />
        <Main>
          <Subtitle>Projects</Subtitle>
          <Text>Recently projects that I have worked on:</Text>
          <TextImageBox>
            <TextDiv>
              <TagName>Application</TagName>
              <Subtitle>Space Application</Subtitle>

              <TextSide>
                A franchising application with all the functionalities that the
                biggest Dark Kitchen worldwide needed with both franchisee and
                franchisor interfaces in web, mobile and desktop. Click to read
                more!
              </TextSide>
            </TextDiv>
            <a
              href="https://www.behance.net/gallery/147268559/Space-SaaS-UX-Study-Case"
              target="_blank"
              rel="noreferrer"
            >
              <ImageBox>
                <ImageContainer>
                  <Image src="assets/space.png" />
                </ImageContainer>
                <ImageBackLine />
              </ImageBox>
            </a>
          </TextImageBox>
        </Main>
        <Main />
        <Main />
        <Line />
        <Main>
          <CenterContainer>
            <TagName>What`s next?</TagName>
            <Subtitle>Get in touch</Subtitle>
            <Text>
              If you have any questions, please don’t hesitate to contact me.
            </Text>
            <a
              href="mailto:silvamarquesartur@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                Say Hello<BarHoverButton>Say Hello</BarHoverButton>
              </Button>
            </a>
            <Text>
              Designed with Figma & Built using React by Artur Marques Silva
            </Text>
          </CenterContainer>
        </Main>
      </Content>
    </Container>
  );
}
