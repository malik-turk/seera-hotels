import { HotelsWrapper, HotelsContainer } from '../styled-components/Hotels';
import { Container } from '../styled-components/Shared';

import SideNavComponent from '../components/Hotels/SideNav';
import MainContent from '../components/Hotels/MainContent';

export default function Hotels() {
  return (
    <HotelsWrapper>
      <Container>
        <HotelsContainer>
          <SideNavComponent />
          <MainContent />
        </HotelsContainer>
      </Container>
    </HotelsWrapper>
  );
}
