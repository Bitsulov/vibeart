import React from 'react';
import { Link } from 'react-router-dom';
import { toggleLinksHandler } from '../model/toggleLinksHandler';
import { useSelector, useDispatch } from "react-redux";
import { selectFooterLinksHeight, selectIsFooterLinksOpen, selectOPENFOOTERLINKSHEIGHT } from '../model/selectors';
import { setOpenFooterLinksHeight, setFooterLinksHeight } from '../model/footerLinksSlice';
import { footerLinksWrapperHandler } from '../model/footerLinksWrapperHandler';
import { footerLinksConfig as links } from '../config/footerLinksConfig';

const FooterLinksList = () => {
	const footerLinksHeight = useSelector(selectFooterLinksHeight);
	const OPENFOOTERLINKSHEIGHT = useSelector(selectOPENFOOTERLINKSHEIGHT);
	const isFooterLinksOpen = useSelector(selectIsFooterLinksOpen);
	const linksRef = useRef(null);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setOpenFooterLinksHeight(linksRef.current.scrollHeight));
		dispatch(setFooterLinksHeight(0));
	}, [])

	return (
		<div className={classes.footer__links}>
			{links.slice(0, 2).map(link => (
				<Link to={link.href} className={classes.footer__linksLink}>{link.text}</Link>
			))}
			{links.length > 2 ? 
				<button
					className={classes.footer__linksMore}
					onClick={toggleLinksHandler}
				>
					<div className={classes.moreWrapper}>
						<p className={classes.moreText}>Ещё</p>
						<div id="arrow" className={isFooterLinksOpen ? `${classes.arrow} ${classes.arrowRotated}` : classes.arrow}></div>
					</div>
					<div
						className={isFooterLinksOpen ? `${classes.footer__hiddenLinks} ${classes.hiddenLinksShow} ${classes.show}` : `${classes.footer__hiddenLinks}`}
						style={OPENFOOTERLINKSHEIGHT === null ? {} : {height: footerLinksHeight + "px"}}
						ref={linksRef}
						onClick={footerLinksWrapperHandler}
					>
						{links.slice(2).map(link => (
							<Link to={link.href} className={classes.hiddenLinksLink}>{link.text}</Link>
						))}
					</div>
				</button>
			: ""
			}
		</div>
	)
}

export default FooterLinksList;