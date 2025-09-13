import classes from "./inDevelopment.module.scss";

const InDevelopment = () => {
    return (
        <section className={classes.inDevelopment}>
            <h1 className={classes.inDevelopment__title}>Упс...</h1>
            <p className={classes.inDevelopment__text}>Эта страница находится в разработке</p>
        </section>
    );
};

export { InDevelopment };
