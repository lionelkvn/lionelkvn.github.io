import './Navbar.css';
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const checkbox = document.getElementById("checkbox_toggle");
      checkbox.checked = false;
    });
  });
});


const Navbar = () => {
  return (
      <div id="Navbar" className="navbar-container">
            <div class="logo">
            <a href='/'><img src={process.env.PUBLIC_URL + '/images/Web-icon2.png'} alt='lionel-icon' /></a>
            <h2 className='logo-text'>Lionel Natividad</h2>
            </div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="/"><h4>Home</h4></a></li>
                <li><a href="#about"><h4>About</h4></a></li>
                <li><a href="#projects"><h4>Projects</h4></a></li>
                <li><a href="/contact"><h4>Contact</h4></a></li>
                </div>
              </ul>
      </div>
  );
}
export default Navbar;