import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

function FooterTop() {
  const { t } = useTranslation();
  return (
    <div className="footer__top">
      <div className="container">
        <div className="footer__topContent">
          <div className="footer__topColumn">
            <p className="footer__navCategory">{t('CompanyLabel')}</p>
            <ul className="footer__links">
              <li className="footer__link"><a href="/about">{t('AboutLabel')}</a></li>
              <li className="footer__link"><a href="/shops">{t('OurShopsLabel')}</a></li>
              <li className="footer__link"><a href="/news">{t('NewsLabel')}</a></li>
              <li className="footer__link"><a href="/devivery">{t('DeliveryLabel')}</a></li>
            </ul>
          </div>
          <div className="footer__topColumn">
            <p className="footer__navCategory">{t('HelpLabel')}</p>
            <ul className="footer__links">
              <li className="footer__link"><a href="/contacts">{t('ContactUsLabel')}</a></li>
              <li className="footer__link"><a href="/faq">{t('FAQLabel')}</a></li>
              <li className="footer__link"><a href="/help">{t('HelpLabel')}</a></li>
              <li className="footer__link"><a href="/terms">{t('TermsLabel')}</a></li>
            </ul>
          </div>
          <div className="footer__topColumn">
            <p className="footer__navCategory">{t('GetSocialLabel')}</p>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="/about">
                  <FaFacebookF />
                  Facebook
                </a>
              </li>
              <li className="footer__link">
                <a href="/about">
                  <IoLogoTwitter />
                  Twitter
                </a>
              </li>
              <li className="footer__link">
                <a href="/about">
                  <IoLogoInstagram />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__topColumn">
            <p className="footer__navCategory">{t('ContactLabel')}</p>
            <ul className="footer__links">
              <li className="footer__link">
                7/4 Fire Briagde Road
                Khulna, 9100, Bangladesh
              </li>
              <li className="footer__link">
                <strong>
                  {t('PhoneLabel')}
                  :
                </strong>
                <a href="tel:123456789">123-456-789</a>
              </li>
              <li className="footer__link">
                <strong>
                  {t('EmailLabel')}
                  :
                </strong>
                <a href="mailto:support@domain.com">support@domain.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FooterTop;
