import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.ListOrders,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.ListProducts,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }
  // {
  //   id: 4,
  //   label: 'Editar Produtos',
  //   link: paths.EditProduct,
  //   icon: AddShoppingCartIcon
  // }
]

export default listLinks
