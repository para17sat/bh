const style = document.createElement("style");
style.textContent = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background: #f9f9f9;
    color: #1a1a1a;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .nav-left .dropdown-trigger {
    position: relative;
    cursor: pointer;
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 30px;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    z-index: 100;
  }

  .nav-left a, .nav-right a {
    text-decoration: none;
    color: #666;
  }

  .register-btn {
    border: 1px solid #ccc;
    padding: 6px 16px;
    border-radius: 10px;
  }

  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 60px 40px;
    flex-wrap: wrap;
    gap: 40px;
  }

  .hero-text {
    max-width: 500px;
  }

  .hero-text h1 {
    font-size: 52px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .hero-text p {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
  }

  .hero-text button {
    background: black;
    color: white;
    padding: 14px 28px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .hero-image img {
    width: 100%;
    max-width: 500px;
    display: block;
  }

  .clients {
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 40px;
    opacity: 0.6;
  }

  .clients img {
    height: 32px;
    object-fit: contain;
  }

  .hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 999;
  }

  @media (max-width: 768px) {
    .nav-left, .nav-right {
      display: none;
    }

    .hamburger {
      display: block;
    }

    .hero {
      flex-direction: column;
      text-align: center;
    }

    .hero-image {
      margin-top: 30px;
    }
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".dropdown-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      const id = e.currentTarget.getAttribute("data-target");
      const dropdown = document.getElementById(id);
      const isVisible = dropdown.style.display === "block";

      document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");

      if (dropdown) dropdown.style.display = isVisible ? "none" : "block";
    });
  });

  window.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-trigger")) {
      document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
  });


  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    const isVisible = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isVisible ? "none" : "flex";
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest("#hamburger") && !e.target.closest("#mobileMenu")) {
      mobileMenu.style.display = "none";
    }
  });
});