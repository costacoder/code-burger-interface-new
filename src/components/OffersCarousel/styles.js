import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #424242;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  color: #efefef;

  border: none;
  height: 50px;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
