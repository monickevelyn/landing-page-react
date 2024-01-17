import Button from '../Button';
import './Header.css'

export default function Header() {
  return (
    <>
      <header className="header">
        <span>
          <h1 className="logo">Eclipse</h1>
        </span>
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#social">Social</a>
        </nav>
        <Button classe="header-btn" conteudo="Start now" />
      </header>
    </>
  );
}
