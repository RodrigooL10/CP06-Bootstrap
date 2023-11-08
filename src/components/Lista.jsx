import Accordion from 'react-bootstrap/Accordion';
import Tabela from './Tabela';

function Lista() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>FUTURAS PROMOÇÕES</Accordion.Header>
        <Accordion.Body>
          Planejamos fazer uma grande promoção de terror em breve, fiquem atentos nas próximas semanas!!!!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>ANIME AWARDS EDITION!</Accordion.Header>
        <Accordion.Body>
          Fiquem também atentos á proxima premiação do anime awards, o vencedor ira receber uma grande promoção
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>ADQUIRA AGORA ITENS DE HARRY POTTER!</Accordion.Header>
        <Accordion.Body>
          <Tabela/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Lista;