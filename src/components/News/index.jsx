import { getLastNews } from '../../api/news';
import NewsItem from './components/NewsItem';
import './styles.scss';

function News() {
  const news = getLastNews();

  return (
    <div className="news">
      <div className="container">
        <div className="news__content">
          {news.map((elem) => (
            <div className="news__item" key={elem.id}>
              <NewsItem
                id={elem.id}
                title={elem.title}
                description={elem.text}
                image={elem.image}
                date={elem.date}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default News;
