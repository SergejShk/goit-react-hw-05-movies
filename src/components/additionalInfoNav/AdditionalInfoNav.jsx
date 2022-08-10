import { NavLink } from 'react-router-dom';
import s from './AdditionalInfoNav.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.siteNav} ${s.activeSiteNav}` : s.siteNav;

const AdditionalInfoNav = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Additional information</h2>
      <ul>
        <li className={s.item}>
          <NavLink to="cast" className={setActiveLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={setActiveLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default AdditionalInfoNav;
