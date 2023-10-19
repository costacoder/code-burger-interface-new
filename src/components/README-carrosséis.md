Para poder utilizar os carrosseis, 
precisei dar um downgrade no styled components,

pra isso, primeiramente desinstalei o atual:
    npm uninstall styled-components

depois intalei a versão que precisava:
    npm install styled-components@^5.3.0

depois instalei o elastic carrossel do itseasy21:
    npm install @itseasy21/react-elastic-carousel

não esquecer de importar nos index que for usar:
    import Carousel from '@itseasy21/react-elastic-carousel'