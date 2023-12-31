import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Tabela() {
  return (
    <Table striped bordered hover variant="light" style={{maxWidth:'600px', margin:'0 auto'}}>
      <thead>
        <tr className='text-center'>
          <th>Produto</th>
          <th>Preço</th>
          <th>Comprar</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>Caneca Harry Potter</td>
          <td>R$22,90</td>
          <td>
            <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Action Figure Harry Potter</td>
          <td>R$15,90</td>
          <td>
          <Button variant="primary" >Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Camiseta Harry Potter</td>
          <td>R$35,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Pulseira Harry Potter</td>
          <td>R$11,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela;