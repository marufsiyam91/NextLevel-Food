import MealItem from './meal-item'
import styles from './meals-gird.module.css'

export default function MealsGrid ({meals}) {
    return (
        <ul className={styles.meals}>
            {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal}/>
            </li>)}
        </ul>
    )
}