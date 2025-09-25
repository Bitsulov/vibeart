import classes from "./contactSection.module.scss";
import { ContactForm } from "features/contactForm/index.js";

const ContactSection = () => {
       return (
        <section className={classes.contactSection}>
            <h1 className={classes.contactTitle}>Контакты</h1>
            <h2 className={classes.contactSubtitle}>Свяжитесь с нами</h2>
            <ContactForm />
        </section>
    );
};

export { ContactSection };
