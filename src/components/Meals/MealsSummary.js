import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2><span style={{border:'solid 3px white',padding:'4px',backgroundColor:'#8A2B06',borderRadius:'25px'}}>Delicious Food</span>, Delivered To You</h2>
      <p>
        Nothing would be more tiresome than eating and drinking if God had not
        made them a pleasure as well as a necessity.
      </p>
      <p>
        Good bread is the most fundamentally satisfying of all foods; and good
        bread with fresh butter, the greatest of feasts.!
      </p>
    </section>
  );
};

export default MealsSummary;
