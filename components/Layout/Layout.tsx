import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container } from '../../styled-components/Shared';
import { Title, LogoContainer, Header } from '../../styled-components/Navbar';

import Logo from '../../assets/images/logo.png';

import { LayoutProps } from '../../type/LayoutProps';

export default function Layout(props: LayoutProps) {
    const { pathname } = useRouter();

    return (
        <>
            <Header darkTheme={pathname === '/'}>
                <Container>
                    <LogoContainer>
                        <Image
                            src={Logo}
                            alt="logo image"
                            quality={100}
                            width={40}
                            height={40}
                        />
                        <Title>Hotels</Title>
                    </LogoContainer>
                </Container>
            </Header>
            {props.children}
        </>
    );
}
