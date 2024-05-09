import egg from '../__assets__/images/Egg.jpeg';
import yoghurt from '../__assets__/images/GreekYoghurt.jpeg';
import nuts from '../__assets__/images/Nuts.jpeg';
import fruits from '../__assets__/images/Fruits.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const mealsData = [
    {
        id: 1,
        title : "Fresh Fruits :",
        description : "Enjoy a variety of fresh fruits such as apples, bananas, oranges, berries, grapes, or sliced melon. Fruits are naturally sweet, rich in vitamins, minerals, and fiber, making them a nutritious and refreshing snack choice.",
        image : fruits
    },
    {
        id: 2,
        title : "Greek Yogurt with Berries :",
        description : "Mix Greek yogurt with fresh berries such as strawberries, blueberries, or raspberries for a protein-rich and creamy snack that provides a balance of carbohydrates, protein, and vitamins.",
        image : yoghurt
    },
    {
        id: 3,
        title : "Nuts and Seeds :",
        description : "Enjoy a handful of mixed nuts and seeds such as almonds, walnuts, cashews, pumpkin seeds, or sunflower seeds for a nutrient-dense snack that's rich in healthy fats, protein, and fiber.",
        image : nuts
    },
    {
        id: 4,
        title : "Hard-Boiled Eggs :",
        description : "Enjoy hard-boiled eggs as a portable and protein-rich snack. Eggs are packed with essential nutrients and provide a feeling of fullness to help keep you satisfied between meals.",
        image : egg
    },
]

const Snack = () => {
    return(
        <section>
            <h3 className="subheading">Snack Options</h3>
            <br />
            <Container>
                {
                    mealsData.map(meals => {
                        return (
                            <section key={meals.id}>
                                <Row>
                                <Col xl={6} lg={6} xs={12} md={12} sm={12}>
                                    <h6><b>{meals.title}</b></h6>
                                    <p className='paragraph'>{meals.description}</p>
                                </Col>
                                <Col xl={6} lg={6} xs={12} md={12} sm={12}>
                                    <Image alt={meals.title} loading='lazy' width='100%' src={meals.image} rounded />
                                </Col>
                            </Row>
                            <br />
                            <hr />
                            </section>
                        )
                    })
                }
            </Container>
        </section>
    )
};

export default Snack;