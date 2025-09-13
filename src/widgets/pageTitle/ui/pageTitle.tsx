import classes from "./pageTitle.module.css";

interface PageTitlePropsType {
    title: string;
}

const PageTitle = ({ title, ...props }: PageTitlePropsType) => {
    return (
        <h1 className={classes.messages__title} {...props}>
            {title}
        </h1>
    );
};

export { PageTitle };
