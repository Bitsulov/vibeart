import { useState } from "react";
import { formatSubscribersRu } from "shared/lib/formatSubscribersRu.js";
import classes from "./communityTopSection.module.scss";
import { formatWorksRu } from "shared/lib/formatWorksRu.js";
import { parseNumber } from "shared/lib/parseNumber.js";
import { Users, Image } from "lucide-react";
import { subscribeHandler } from "../model/subscribeHandler.js";
import { useDispatch } from "react-redux";

interface CommunityTopSectionPropsType {
    title: string;
    userName: string;
    subscribers: number;
    works: number;
    srcImg: string;
}

const CommunityTopSection = ({
    title,
    userName,
    subscribers,
    works,
    srcImg,
    ...props
}: CommunityTopSectionPropsType) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const dispatch = useDispatch();

    return (
        <section className={classes.communityTop} {...props}>
            <img src={srcImg} alt={title} className={classes.img} />
            <div className={classes.communityTopInfo}>
                <h1 className={classes.communityTopTitle}>{title}</h1>
                <p className={classes.communityTopTag}>@{userName}</p>
                <div className={classes.communityTopStats}>
                    <div className={classes.statsItem}>
                        <Users className={`${classes.statsImg} ${classes.subscribersImg}`} />
                        <p className={classes.statsText}>
                            {parseNumber(subscribers)} {formatSubscribersRu(subscribers)}
                        </p>
                    </div>
                    <div className={classes.statsItem}>
                        <Image className={`${classes.statsImg} ${classes.subscribersImg}`} />
                        <p className={classes.statsText}>
                            {parseNumber(works)} {formatWorksRu(works)}
                        </p>
                    </div>
                </div>
            </div>
            <button
                onClick={e => subscribeHandler(e, isSubscribed, setIsSubscribed, userName, dispatch)}
                className={isSubscribed ? `${classes.subscribeButton} ${classes.unscribe}` : classes.subscribeButton}
            >
                {isSubscribed ? "Отписаться" : "Подписаться"}
            </button>
        </section>
    );
};

export { CommunityTopSection };
