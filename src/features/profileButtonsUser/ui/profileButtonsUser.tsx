import React from "react";
import classes from "./profileButtonsUser.module.css";
import { toggleSubscribeHandler } from "../model/toggleSubscribeHandler.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface ProfileButtonsUserType {
    isOwnProfile: boolean;
    isSubscribe: boolean;
    setIsSubscribe: React.Dispatch<React.SetStateAction<boolean>>;
    userName: string;
}

const ProfileButtonsUser = ({
    isOwnProfile,
    isSubscribe = false,
    setIsSubscribe,
    userName,
    ...props
}: ProfileButtonsUserType) => {
    const dispatch = useDispatch();

    return (
        <>
            {isOwnProfile ? (
                <div className={classes.info__buttonsOwn} {...props}>
                    <button className={`${classes.info__buttonsItem} ${classes.info__editProfileBtn}`}>
                        Редактировать профиль
                    </button>
                    <button className={`${classes.info__buttonsItem} ${classes.info__settingsBtn}`}>Настройки</button>
                    <button className={`${classes.info__buttonsItem} ${classes.info__addPostBtn}`}>
                        Добавить пост
                    </button>
                    <button className={`${classes.info__buttonsItem} ${classes.info__manageAlbumsBtn}`}>Альбомы</button>
                </div>
            ) : (
                <div className={classes.info__buttons} {...props}>
                    <button
                        className={
                            isSubscribe
                                ? `${classes.info__buttonsItem} ${classes.info__unscribeBtn}`
                                : `${classes.info__buttonsItem} ${classes.info__subscribeBtn}`
                        }
                        id="subscribe"
                        onClick={e => toggleSubscribeHandler(e, dispatch, isSubscribe, setIsSubscribe, userName)}
                    >
                        {isSubscribe ? "Отписаться" : "Подписаться"}
                    </button>
                    <Link to="#" className={`${classes.info__buttonsItem} ${classes.info__messageBtn}`}>
                        Написать
                    </Link>
                </div>
            )}
        </>
    );
};

export { ProfileButtonsUser };
