import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import {
  Container,
  ContainerLRight,
  ContainerLeft,
  ContainerText,
  PageLink,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  console.log('funcionou')

  return (
    <Container>
      <Header />
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerLRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="logo-carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, @</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerLRight>
    </Container>
  )
}
