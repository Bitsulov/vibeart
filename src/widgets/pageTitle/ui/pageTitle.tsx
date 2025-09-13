import classes from "./pageTitle.module.scss";

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
