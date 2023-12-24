const Navbar = () => {
  return (
    <>
      <nav
        style={{ padding: "0 10px", height: "15vh", border: '2px solid black' }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a
            style={{ fontSize: "2.2rem", fontWeight: "500" }}
            className="navbar-brand"
            href="/"
          >
            <span style={{ color: "#ffc107" }}>Shop</span>
            <span style={{ color: "#6c757d" }}>Fusion</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              style={{ fontSize: "1.4rem", fontWeight: "500" }}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <div className="nav-link active md-6" aria-current="page">
                  Products
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  AddProduct
                </div>
              </li>
            </ul>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                alt="Cart"
                width={50}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
