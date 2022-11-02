import './styles.scss';
import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';

function Footer() {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
