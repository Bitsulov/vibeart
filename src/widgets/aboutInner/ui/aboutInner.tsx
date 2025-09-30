import { Globe, Image, MessageSquare, SearchIcon, User } from "lucide-react";
import c from "./aboutInner.module.scss";
import { Link } from "react-router-dom";

export const AboutInner = () => {
	return (
		<>
			<section className={c.intro}>
				<div className={c.container}>
					<h1 className={c.introTitle}>О платформе Vibe Art</h1>
					<p className={c.introDescription}>
						Vibe Art — это онлайн-пространство для творческих людей, где каждый может находить вдохновение,
						делиться своими работами и открывать новые идеи. Наша цель — создать сообщество художников,
						дизайнеров и зрителей, объединённых любовью к искусству.
					</p>
				</div>
			</section>
			<section className={c.steps}>
				<div className={c.container}>
					<h2 className={c.stepsTitle}>Как работает Vibe Art</h2>
					<div className={c.stepsList}>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>1</span>
							<h3 className={c.stepsSubTitle}>Ищите</h3>
							<p className={c.stepsDescription}>
								Откройте для себя галерею работ художников со всего мира. Используйте фильтры по стилю,
								настроению и жанру, чтобы найти именно то, что откликается в вашей душе.
							</p>
						</div>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>2</span>
							<h3 className={c.stepsSubTitle}>Создавайте</h3>
							<p className={c.stepsDescription}>
								Создавайте собственные альбомы. Формируйте личный поток вдохновения и возвращайтесь к нему в
								любой момент.
							</p>
						</div>
						<div className={c.stepsBlock}>
							<span className={c.stepsNumber}>3</span>
							<h3 className={c.stepsSubTitle}>Делитесь</h3>
							<p className={c.stepsDescription}>
								Делитесь своими и чужими работами, вдохновляйтесь и находите единомышленников.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={c.users}>
				<div className={c.container}>
					<h2 className={c.usersTitle}>Для кого</h2>
					<div className={c.usersBlocks}>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>Художники</h3>
							<p className={c.usersDescription}>Делиться своими работами и находить новых зрителей.</p>
						</div>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>Зрители</h3>
							<p className={c.usersDescription}>
								Открывать новые имена, вдохновляться и поддерживать авторов.
							</p>
						</div>
						<div className={c.usersBlock}>
							<h3 className={c.usersSubTitle}>Cообщества</h3>
							<p className={c.usersDescription}>Налаживать сотрудничество и проекты.</p>
						</div>
					</div>
				</div>
			</section>
			<section className={c.advantages}>
				<div className={c.container}>
					<h2 className={c.advantagesTitle}>Возможности</h2>
					<ul className={c.advantagesList}>
						<li className={c.advantagesItem}>
							<SearchIcon className={c.advantagesIcon} /> Искать вдохновение — находите художников и работы по стилям, жанрам и настроению.
						</li>
						<li className={c.advantagesItem}>
							<Image className={c.advantagesIcon} /> Создавать коллекции — сохраняйте понравившиеся работы и формируйте собственные подборки.
						</li>
						<li className={c.advantagesItem}>
							<User className={c.advantagesIcon} /> Делиться творчеством — загружайте свои работы и демонстрируйте их мировой аудитории.
						</li>
						<li className={c.advantagesItem}>
							<MessageSquare className={c.advantagesIcon} /> Общаться и обсуждать — оставляйте комментарии, получайте отзывы и заводите знакомства.
						</li>
						<li className={c.advantagesItem}>
							<Globe className={c.advantagesIcon} /> Создать сообщество — присоединяйтесь к событиям, челленджам и совместным проектам.
						</li>
					</ul>
				</div>
			</section>
			<section className={c.join}>
				<div className={c.container}>
					<Link to={"/gallery"} className={c.galleryLink}>Открыть галерею</Link>	
				</div>
			</section>
		</>
	)
}
