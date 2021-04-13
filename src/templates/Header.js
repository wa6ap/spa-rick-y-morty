const Header = () => {
  const view =`
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/rick-y-morty-spa" class="nav-element"> 100tifi.co</a>
                </h1>
            </div>
            <nav class="Header-nav">
                <a href="#/about/" class="nav-element">About</a>
                <button class="switch" id="switch">
                    <span><i class="fas fa-sun"></i></span>
                    <span><i class="fas fa-moon"></i></span>
                </button>
            </nav>
        </div>
    `;
  return view;
};

export default Header;


