import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function NewsItem({
  id, title, image, description, date,
}) {
  const { t } = useTranslation();

  const newsDate = new Date(date);
  const shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format;

  return (
    <div className="newsItem">
      <div className="newsItem__image">
        <img src={image} alt={title} />
      </div>
      <div className="newsItem__content">
        <div>
          <div className="newsItem__title">{title}</div>
          <div className="newsItem__description">{description}</div>
        </div>
        <Link to={`/news${id}`} className="newsItem__link">
          {t('ReadMoreLabel')}
          ...
        </Link>
      </div>
      <div className="newsItem__date">
        <div>{newsDate.getDate()}</div>
        <div>{shortMonthName(newsDate)}</div>
      </div>
    </div>
  );
}

export default NewsItem;

NewsItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};

NewsItem.defaultProps = {
  title: '',
  description: '',
  image: '',
  date: '',
};
