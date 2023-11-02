import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
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
  const { logout, userData } = useUser()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
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
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerLRight>
    </Container>
  )
}
