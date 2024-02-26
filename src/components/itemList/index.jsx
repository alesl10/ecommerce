import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../item';

function ItemList({ products }) {
    return (
        <Container>
            <Row className='flex flex-wrap  justify-center items-center gap-4 p-2 '>
                {products.map((product, index) => (
                <Item product={product} key={product.id}/>
                ))}
            </Row>
        </Container>
    )
}

export default ItemList;