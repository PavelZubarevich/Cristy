import { useTranslation } from 'react-i18next';
import { FaLongArrowAltRight } from 'react-icons/fa';

function FooterBottom() {
  const { t } = useTranslation();
  return (
    <div className="footer__bottom">
      <div className="container">
        <div className="footer__bottomContent">
          <p className="footer__copyright">
            {t('CopyrightText')}
          </p>
          <form action="#" className="footer__subscribe">
            <input type="text" name="" placeholder={t('SubscribeToNewsText')} />
            <button type="submit">
              <FaLongArrowAltRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
