import cls from './Footer.module.scss';
import { AppLink } from 'shared/UI/AppLink/AppLink';



const Footer = () => {
	return (
		<footer className={cls.Footer}>
			<section className={cls.Section}>
				<AppLink to='/' >Home</AppLink>
				<AppLink to='/about' >About Us</AppLink>
				<AppLink to='/memoization'>Memo</AppLink>
				<AppLink to='/counter' >Counter</AppLink>
			</section>
			<section className={cls.Section}>
				<AppLink to='/' >Home</AppLink>
				<AppLink to='/about' >About Us</AppLink>
				<AppLink to='/memoization'>Memo</AppLink>
				<AppLink to='/counter' >Counter</AppLink>
			</section>
			<section className={cls.Section}>
				<AppLink to='/' >Home</AppLink>
				<AppLink to='/about' >About Us</AppLink>
				<AppLink to='/memoization'>Memo</AppLink>
				<AppLink to='/counter' >Counter</AppLink>
			</section>
		</footer>
	);
};

export default Footer;
