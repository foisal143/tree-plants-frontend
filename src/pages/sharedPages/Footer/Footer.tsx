const Footer = () => {
  return (
    <footer className="footer bg-green-100 text-black  p-10">
      <aside>
        <img
          className="w-12 h-12 rounded-full"
          src="https://i.ibb.co.com/3RDW9H7/tree-plants-logo.png"
          alt=""
        />
        <p>
          Tree Plants Ltd.
          <br />
          1234 Oak Tree Lane Springfield, IL 62704 United States
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
