import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  
  return (
    <div className="layout">
      <Header />
      <Outlet />

      <footer>
      <div class="footer-up">
        <div class="footer-left">
          <span class="footer-text">GHOST</span>
          <i class="fa-solid fa-ghost fa-2x logo"></i>
          <p class="p-footer1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span class="footer-cr">@ghost</span>
        </div>
        <div class="footer-contact">
          <div class="footer-contactus">
            <i class="fa-brands fa-facebook fa-3x"></i>
            <i class="fa-brands fa-instagram fa-3x"></i>
            <a href="https://twitter.com/home"
              ><i class="fa-brands fa-twitter fa-3x"></i
            ></a>
            <a href="https://www.linkedin.com/feed/"
              ><i class="fa-brands fa-linkedin fa-3x"></i
            ></a>
          </div>
        </div>
      </div>
      <hr />
      <span class="footer-down">Copyright ® 2021 Lorem All rights Rcerved</span>
    </footer>
    </div>
  );
};
