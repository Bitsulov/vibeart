import { Layout } from "widgets/layout/index.js";
import "./main.scss";
import img from "shared/icons/pivo.jpg";
import { useLoadPageStatus } from "entities/pageStats/index.js";

export const Main = () => {
	const isPageLoaded = useLoadPageStatus();

	return (
		<Layout pageStatus={isPageLoaded}>
			<main className="main">
				<section className="hero">
					<div className="hero-content">
						<h1>Едва ли есть высшее из наслаждений, как наслаждение творить</h1>
						<p>Vibe Art — пространство, где рождается вдохновение.</p>
						<div className="hero-buttons">
							<a href="/auth" className="btn primary">Присоединиться</a>
						</div>
					</div>
				</section>
				<section className="steps">
					<h2>Как это работает?</h2>
					<div className="steps-container">
					<div className="step">
						<div className="icon">🎨</div>
						<h3>Найдите свой vibe</h3>
						<p>Ищите художников по стилю и настроению.</p>
					</div>
					<div className="step">
						<div className="icon">💡</div>
						<h3>Вдохновляйтесь</h3>
						<p>Сохраняйте понравившиеся работы в свои коллекции.</p>
					</div>
					<div className="step">
						<div className="icon">🌍</div>
						<h3>Делитесь</h3>
						<p>Покажите миру свое творчество.</p>
					</div>
					</div>
				</section>
				<section className="gallery">
					<h2>Плывите по течению</h2>
					<div className="gallery-grid">
					<div className="gallery-item">
						<img src={img} alt="art1"></img>
						<div className="info">Автор 1 — Работа 1</div>
					</div>
					<div className="gallery-item">
						<img src={img} alt="art2"></img>
						<div className="info">Автор 2 — Работа 2</div>
					</div>
					<div className="gallery-item">
						<img src={img} alt="art3"></img>
						<div className="info">Автор 3 — Работа 3</div>
					</div>
					<div className="gallery-item">
						<img src={img} alt="art4"></img>
						<div className="info">Автор 4 — Работа 4</div>
					</div>
					<div className="gallery-item">
						<img src={img} alt="art5"></img>
						<div className="info">Автор 5 — Работа 5</div>
					</div>
					</div>
				</section>
				<section className="artists">
					<h2>Популярные художники</h2>
					<div className="artists-container">
					<div className="artist-card">
						<img src={img} alt="artist"></img>
						<h3>Анна Иванова</h3>
						<a href="/profile/1" className="btn small primary">Смотреть работы</a>
					</div>
					<div className="artist-card">
						<img src={img} alt="artist"></img>
						<h3>Илья Петров</h3>
						<a href="/profile/2" className="btn small primary">Смотреть работы</a>
					</div>
					<div className="artist-card">
						<img src={img} alt="artist"></img>
						<h3>Мария Смирнова</h3>
						<a href="/profile/3" className="btn small primary">Смотреть работы</a>
					</div>
					</div>
				</section>
				<section className="testimonials">
					<h2>Отзывы художников</h2>
					<div className="testimonials-container">
					<div className="testimonial">
						<p>«Vibe Art помог мне найти новых поклонников и вдохновиться работами других мастеров.»</p>
						<div className="author">— Анна Иванова</div>
					</div>
					<div className="testimonial">
						<p>«Отличное сообщество для художников. Здесь я чувствую поддержку и обмен энергией.»</p>
						<div className="author">— Илья Петров</div>
					</div>
					<div className="testimonial">
						<p>«Очень нравится современный стиль галереи и возможность делиться работами легко и быстро.»</p>
						<div className="author">— Мария Смирнова</div>
					</div>
					</div>
				</section>
				<section className="cta">
					<h2>Прекратите искать vibe. Станьте его источником.</h2>
					<div className="cta-buttons">
						<a href="/about" className="btn primary">Узнать больше</a>
					</div>
				</section>
			</main>
		</Layout>
	)
}
