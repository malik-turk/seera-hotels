import type { NextPage } from 'next';
import Image from 'next/image';

import { Container, FullScreenImage } from '../styled-components/Shared';
import { HomeWrapper, Heading, Paragraph } from '../styled-components/Home';

import DateRange from '../components/Home/DateRange';

import bgImage from '../assets/images/bg-image.jpeg';

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <HomeWrapper>
          <FullScreenImage bgColor="#000">
            <Image
              src={bgImage}
              alt="background image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </FullScreenImage>
          <Heading>Find your next stay</Heading>
          <Paragraph>Search deals on hotels, homes, and much more...</Paragraph>
          <DateRange />
        </HomeWrapper>
      </Container>
    </main>
  )
}

export default Home
