import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />
        <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />
        <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
      </main>
    </Container>
  )
}