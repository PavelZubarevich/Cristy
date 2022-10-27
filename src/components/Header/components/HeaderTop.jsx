import '../styles.scss';
import { useTranslation } from 'react-i18next';
import HeaderDropDown from './HeaderDropDown';
import Button from '../../common/Button';

function HeaderTop() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header__top">
      <div className="container">
        <div className="header__topContent">
          <p className="header__topLabel">{t('FreeShippingOverText', { value: 111 })}</p>
          <ul className="header__topMenu">
            {i18n.options.supportedLngs && i18n.options.supportedLngs.length > 1 && (
            <li>
              <HeaderDropDown title={i18n.language}>
                <ul className="header__langList">
                  {i18n.options.supportedLngs.map((elem) => {
                    if (elem !== 'cimode' && elem !== i18n.language) {
                      return (
                        <li key={elem}>
                          <Button text={elem} variant="text" color="primaryText" size="sm" onClick={() => changeLang(elem)} />
                        </li>
                      );
                    }
                    return false;
                  })}
                </ul>
              </HeaderDropDown>
            </li>
            )}
            <li>
              <HeaderDropDown title="USD">
                <div />
              </HeaderDropDown>
            </li>
            <li>
              <HeaderDropDown title={t('LoginLabel')}>
                <>
                  <Button text={t('LoginLabel')} variant="contained" className="header__login" />
                  <a href="/" className="header__createAccount">{t('CreateAccountText')}</a>
                </>
              </HeaderDropDown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
