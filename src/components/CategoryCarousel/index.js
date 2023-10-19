import Carousel from '@itseasy21/react-elastic-carousel'
import React, { useEffect, useState } from 'react'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              {category.url ? (
                <Image
                  src={category.url}
                  alt={`foto da categoria ${category.name}`}
                  onLoad={() =>
                    console.log(`Imagem carregada: ${category.url}`)
                  }
                  onError={() =>
                    console.error(`Erro ao carregar a imagem: ${category.url}`)
                  }
                />
              ) : (
                <span>Imagem não disponível</span>
              )}
              <Button>{category.name}</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
