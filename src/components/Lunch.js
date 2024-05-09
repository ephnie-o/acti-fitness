import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

export const mealsData = [
    {
        id: 1,
        title : "Grilled Tilapia with Banku and Shito :",
        description : " Enjoy grilled tilapia fish served with banku, a fermented corn and cassava dough, and shito, a spicy pepper sauce. This dish is high in protein, fiber, and essential nutrients and provides a balance of carbohydrates and healthy fats.",
        src : 'TQ81w5TejAU'
    },
    {
        id: 2,
        title : "Red Red with Plantains and Avocado :",
        description : "Red Red is a hearty Ghanaian bean stew made with black-eyed peas, tomatoes, onions, and palm oil. Serve it with fried plantains and sliced avocado for a delicious and nutrient-rich lunch that's packed with fiber, vitamins, and minerals.",
        src : 'A37haNU2LGM'
    },
    {
        id: 3,
        title : "Light Soup with Fufu with meat :",
        description : "Light soup is a flavorful Ghanaian soup made with tomatoes, onions, and spices, and often includes a variety of vegetables such as okra, and eggplant. Serve it with fufu, a starchy dough made from boiled and mashed cassava, plantains, or yams, and add any protein of your choice for a satisfying and nutritious lunch option.",
        src : 'bNXSdanpyyE'
    },
    {
        id: 4,
        title : "Waakye with Vegetables :",
        description : " Waakye is a traditional Ghanaian dish made with rice and beans cooked together in a flavorful broth made from dried millet leaves and sorghum leaves. Serve it with vegetables such as spinach, carrots, and cabbage for a nutritious and filling lunch option.",
        src : 'pIuAG2eUlTM'
    },
    {
        id: 5,
        title : "Grilled Chicken with Jollof Rice and Vegetables :",
        description : "Grilled chicken is a lean source of protein that can be paired with jollof rice, a flavorful one-pot rice dish cooked with tomatoes, onions, peppers, and spices. Serve with vegetables such as broccoli, cauliflower, and carrots for added nutrients and fiber.",
        src : 'zlYtwoDsGsI'
    },
    {
        id: 6,
        title : "Okro Soup with Banku and Fish :",
        description : " Okro soup is a traditional Ghanaian soup made with okra, tomatoes, onions, and spices, and often includes meat or fish. Serve it with banku, a fermented corn and cassava dough, and fish for a satisfying and nutritious lunch option that's rich in protein and fiber.",
        src : '3Xt58Sujaw0'
    },
    {
        id: 7,
        title : "Grilled Fish with Kenkey and Pepper Sauce :",
        description : "Grilled fish is a healthy and delicious protein option that pairs well with kenkey, a fermented cornmeal dough wrapped in banana leaves. Serve with pepper sauce made from chili peppers, onions, tomatoes, and spices for added flavor and heat.",
        src : 'lhSJ4FGDagI'
    },
    {
        id: 8,
        title : "Garden Egg Stew with Yam and Eggs :",
        description : "Garden egg stew is a savory Ghanaian stew made with garden eggs (a type of eggplant), tomatoes, onions, and spices. Serve it with boiled yam and eggs for a hearty and nutritious lunch option that's rich in fiber, vitamins, and protein.",
        src : '-II-Q6baNH4'
    },
    {
        id: 9,
        title : "Kontomire Stew with Plantains and Eggs :",
        description : "Kontomire stew, also known as palava sauce, is a Ghanaian dish made with cooked cocoyam leaves (kontomire), tomatoes, onions, and spices. Serve it with boiled plantains and eggs for a wholesome and filling lunch that's packed with nutrients and flavor.",
        src : '-TgYw7ILaak'
    },
    {
        id: 10,
        title : "Fried Rice with Grilled Chicken :",
        description : "Grilled chicken is a lean source of protein that can be paired with fried rice, a flavorful one-pot rice dish cooked with carrot, bell peppers, spring onions, soy sauce, onions, peppers, and spices.",
        src : 'pKLFqH3OGFY'
    },
    {
        id: 11,
        title : "Rice with Beans Stew or Tomato Stew or Kontonmire :",
        description : "Any of these stews are healthy Ghanaian stews made with a variety of vegetables. Serve it with plain rice for a comforting and nourishing lunch option that's easy to prepare and full of flavor. Add any protein of your choice.",
        src : 'bzO60iuw7Xk'
    },
    {
        id: 12,
        title : "Groundnut Soup with Rice Balls and Meat or Fish :",
        description : "Groundnut soup, also known as peanut soup, is a creamy and flavorful Ghanaian dish made with groundnuts, tomatoes, onions, and spices. Serve it with rice balls (boiled rice rolled into balls) and meat or fish for a satisfying and protein-rich lunch option.",
        src : 'npfiY62oaf4'
    },
    {
        id: 13,
        title : "Yam and Egg Stew with Fish :",
        description : "Cook diced yam in a spicy tomato-based stew with onions, peppers, and eggs for a delicious and filling lunch option. Serve with fish for added flavor and texture, creating a satisfying and balanced meal.",
        src : 'SKxN3IFaHuA'
    },
    {
        id: 14,
        title : "Grilled Chicken Salad :",
        description : "Toss grilled chicken breast with mixed greens, cherry tomatoes, cucumber slices, avocado chunks, and a light vinaigrette dressing for a nutritious and satisfying salad that's high in protein and fiber.",
        src : 'QUY_IUq5BzU'
    },
    {
        id: 15,
        title : "Vegetable Stir-Fry :",
        description : "Stir-fry a mix of colorful vegetables such as bell peppers, broccoli, snap peas, and mushrooms with tofu, chicken, or shrimp in a light sauce made from soy sauce, ginger, and garlic. Serve over brown rice or quinoa for a healthy and balanced meal.",
        src : 'lNdFgQ4fBCI'
    },
    {
        id: 16,
        title : "Quinoa Salad :",
        description : "Mix cooked quinoa with chopped vegetables such as bell peppers, carrots, and broccoli, along with chickpeas or black beans for added protein. Dress with a lemon-tahini dressing for a flavorful and filling lunch option.",
        src : 'OQ9mU_zAtEs'
    },
    {
        id: 17,
        title : "Whole Grain Wrap :",
        description : "Fill a whole grain wrap with lean protein such as turkey or grilled chicken, along with hummus, avocado, lettuce, and sliced vegetables for a quick and portable lunch option that's packed with nutrients and flavor.",
        src : '0aIBCAReBoE'
    },
    {
        id: 18,
        title : "Salmon and Sweet Potato :",
        description : "Bake or grill salmon fillets and serve with roasted sweet potatoes and steamed broccoli for a nutritious and satisfying lunch option that's high in omega-3 fatty acids, vitamins, and minerals.",
        src : 'wE0qTuxZoTM'
    },
    {
        id: 19,
        title : "Mediterranean Plate :",
        description : "Create a Mediterranean-inspired plate with hummus, tabbouleh, falafel, olives, whole grain pita bread, and sliced vegetables such as cucumbers, tomatoes, and bell peppers. This meal is rich in fiber, healthy fats, and antioxidants.",
        src : 'QoxP2X-iWrs'
    },
    {
        id: 20,
        title : "Tuna Salad Lettuce Wraps :",
        description : "Mix canned tuna with Greek yogurt, diced celery, red onion, and a squeeze of lemon juice. Serve scoops of tuna salad in lettuce leaves for a light and refreshing lunch option that's low in carbs and calories.",
        src : 'e2PXQvY-RR4'
    },
]

const Lunch = () => {
    return(
        <section>
            <h3 className="subheading">Lunch / Dinner Options</h3>
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
                                        {(() => {
                                            try {
                                                return <iframe aria-label='YouTube Video' loading='lazy' src={`https://www.youtube-nocookie.com/embed/${meals.src}`} title={`Youtube Video ${meals.id}`} allowFullScreen></iframe>;
                                            } catch (error) {
                                                console.error('Error loading YouTube video:', error);
                                                return <div aria-live='polite' className='subheading'>Error loading video. Please try again later.</div>;
                                            }
                                        })()}
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

export default Lunch;