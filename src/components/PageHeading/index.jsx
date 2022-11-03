import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { IoChevronForwardOutline } from 'react-icons/io5';
import './styles.scss';

function PageHeading({ title }) {
  const { t } = useTranslation();

  const routes = [
    {
      path: '/',
      breadcrumb: t('HomeLabel'),
      children: [
        {
          path: '/products',
          breadcrumb: t('AllProductsLabel'),
        },
      ],
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="pageHeading">
      <h2 className="pageHeading__title">{title}</h2>
      <div className="pageHeading__breadcrumbs">
        <p className="pageHeading__breadcrumbsLabel">
          {t('YouAreHereLabel')}
          :
        </p>

        {breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink
            key={match.pathname}
            to={match.pathname}
            className={({ isActive }) => `pageHeading__crumb ${isActive ? 'active' : ''}`.trim()}
            end
          >
            <IoChevronForwardOutline />
            {breadcrumb}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default PageHeading;

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
