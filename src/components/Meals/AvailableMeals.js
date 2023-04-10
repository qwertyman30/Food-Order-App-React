import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Hyderabadi Biryani",
        description:
            "A Hyderabadi speciality! Rice cooked with chicken and spices",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Mutton Paya",
        description: "A Hyderabadi speciality! Mutton soup cooked with spices",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Dal Chawal",
        description: "Lenthil soup with rice",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Shahi Tukda",
        description: "A Hyderabadi speciality! Sweet dish. Fried bread dipped in sweet syrup",
        price: 10.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
