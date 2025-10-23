import { Globe, Image, MessageSquare, SearchIcon, User } from "lucide-react";
import c from "./aboutInner.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AboutInner = () => {
	const { t } = useTranslation();

	return (
		<>
			<section className={c.intro}>
				<div className={c.container}>
					<h1 className={c.introTitle}>{t("introTitle")}</h1>
					<p className={c.introDescription}>
						{t("introDescription")}
					</p>
				</div>
			</section>
			<section className={c.steps}>
				<div className={c.container}>
					<h2 className={c.stepsTitle}>{t("stepsTitle")}</h2>
					<div className={c.stepsList}>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>1</span>
							<h3 className={c.stepsSubTitle}>{t("steps1Title")}</h3>
							<p className={c.stepsDescription}>
								{t("steps1Description")}
							</p>
						</div>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>2</span>
							<h3 className={c.stepsSubTitle}>{t("steps2Title")}</h3>
							<p className={c.stepsDescription}>
								{t("steps2Description")}
							</p>
						</div>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>3</span>
							<h3 className={c.stepsSubTitle}>{t("steps3Title")}</h3>
							<p className={c.stepsDescription}>
								{t("steps3Description")}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={c.users}>
				<div className={c.container}>
					<h2 className={c.usersTitle}>{t("usersTitle")}</h2>
					<div className={c.usersBlocks}>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>{t("user1Title")}</h3>
							<p className={c.usersDescription}>{t("user1Description")}</p>
						</div>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>{t("user2Title")}</h3>
							<p className={c.usersDescription}>
								{t("user2Description")}
							</p>
						</div>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>{t("user3Title")}</h3>
							<p className={c.usersDescription}>{t("user3Description")}</p>
						</div>
					</div>
				</div>
			</section>
			<section className={c.advantages}>
				<div className={c.container}>
					<h2 className={c.advantagesTitle}>{t("advantagesTitle")}</h2>
					<ul className={c.advantagesList}>
						<li className={c.advantagesItem}>
							<SearchIcon className={c.advantagesIcon} /> {t("advantage1")}
						</li>
						<li className={c.advantagesItem}>
							<Image className={c.advantagesIcon} /> {t("advantage2")}
						</li>
						<li className={c.advantagesItem}>
							<User className={c.advantagesIcon} /> {t("advantage3")}
						</li>
						<li className={c.advantagesItem}>
							<MessageSquare className={c.advantagesIcon} /> {t("advantage4")}
						</li>
						<li className={c.advantagesItem}>
							<Globe className={c.advantagesIcon} /> {t("advantage5")}
						</li>
					</ul>
				</div>
			</section>
			<section className={c.join}>
				<div className={c.container}>
					<Link to="/gallery" className={c.galleryLink}>{t("OpenGallery")}</Link>	
				</div>
			</section>
		</>
	)
}
