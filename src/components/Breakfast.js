import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const mealsData = [
    {
        id: 1,
        title : "Scrambled Eggs :",
        description : "Incorporate carrots, bell peppers, onions and tomatoes into the eggs. Butter or olive oil may be used to scramble the egg as it is a healthier option. It can be eaten with any of the beverages below or fresh fruit juice.",
        src : '2rxI0gNAjAc'
    },
    {
        id: 2,
        title : "Tom Brown :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the tom brown instead of regular sugar and milk. Pay attention to portion sizes to avoid consuming excessive calories. Eat with scrambled eggs or wheat bread.",
        src : 'Or5R7Su11Hs'
    },
    {
        id: 3,
        title : "Semolina :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the semolina instead of regular sugar and milk. Pay attention to portion sizes to avoid consuming excessive calories. Eat with scrambled eggs or wheat bread.",
        src : '-3ri_gNwELk'
    },
    {
        id: 4,
        title : "Tea Bag with Wheat Bread and Egg :",
        description : "Prepare a herbal tea bag or green tea with honey. Incorporate carrots, bell peppers, onions and tomatoes into the eggs. Butter or olive oil may be used to fry the egg as it is a healthier option. Wheat bread is a healthier option to sugar and butter bread. Pay attention to portion sizes to avoid consuming excessive calories. ",
        src : '4C5yajQkXYY'
    },
    {
        id: 5,
        title : "Oats :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the oats instead of regular sugar and milk. Pay attention to portion sizes to avoid consuming excessive calories. Eat with scrambled eggs or wheat bread.",
        src : 'ywkEGKXk2cQ'
    },
    {
        id: 6,
        title : "Rice Porridge :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the rice porridge instead of regular sugar and milk. Pay attention to portion sizes to avoid consuming excessive calories. Eat with scrambled eggs or wheat bread.",
        src : 'EFcF3aJFmc0'
    },
    {
        id: 7,
        title : "Hausa Koko with Wheat Bread :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the oats instead of regular sugar and milk.",
        src : 'qoay33pXX6c'
    },
    {
        id: 8,
        title : "White Porridge :",
        description : "Add an artificial sweetener and milk alternatives such as almond milk and soy milk to the white porridge instead of regular sugar and milk. Pay attention to portion sizes to avoid consuming excessive calories. Eat with scrambled eggs or wheat bread.",
        src : 'pjRkQ3TITJc'
    },
    {
        id: 9,
        title : "Whole Grain Toast with Avocado :",
        description : " Top whole grain toast with mashed avocado, a sprinkle of salt and pepper, and optional toppings like sliced tomatoes, a drizzle of olive oil, or a sprinkle of red pepper flakes. Avocado provides heart-healthy fats and fiber, while whole grain toast offers complex carbohydrates.",
        src : 'm4kojFKhsg8'
    },
    {
        id: 10,
        title : "Smoothie Bowl :",
        description : "Blend together frozen fruits like berries, banana, and spinach with Greek yogurt or almond milk until smooth. Pour into a bowl and top with granola, sliced fruit, nuts, seeds, and a drizzle of nut butter or honey for added texture and flavor.",
        src : 'fXLYqqxB2wc'
    },
    {
        id: 11,
        title : "Whole Grain Pancakes :",
        description : "Make pancakes using whole grain flour or oats, eggs, milk, and a touch of baking powder. Serve with fresh fruit and a dollop of Greek yogurt or a drizzle of pure maple syrup for sweetness.",
        src : 'fM_ELMrEmNc'
    },
    {
        id: 12,
        title : "Breakfast Burrito :",
        description : "Fill a whole grain tortilla with scrambled eggs, black beans, diced vegetables, avocado slices, and salsa. Roll it up and enjoy as a hearty and portable breakfast option.",
        src : 'hiIFwrpm2YA'
    },
]

const Breakfast = () => {
    return(
        <section>
            <h3 className="subheading">Breakfast Options</h3>
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
                                <Ratio aspectRatio="16x9">
                                    <iframe loading='lazy' src={`https://www.youtube-nocookie.com/embed/${meals.src}`} title='Youtube Video' allowFullScreen></iframe>
                                </Ratio>
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

export default Breakfast;




