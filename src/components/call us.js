import { Fragment } from "react";

const callUs = () => {
  const showNav = () => {
    document.querySelector("ul").classList.add("active");
  };

  const closs = () => {
    document.querySelector("ul").classList.remove("active");
  };

  return (
    <Fragment>
      <div className="callUs">
        <i className="fas fa-phone" onClick={showNav}></i>
        <ul>
          <li>
            <a href="https://t.me/pnokew" target="blank">
              <i className="fab fa-telegram"></i> telegram
            </a>
          </li>
          <li>
            <a href="https://github.com/omarqra" target="blank">
              <i className="fab fa-github"></i> gitHub
            </a>
          </li>
          <li>
            <a href="https://mostaql.com/u/DoOmar" target="blank">
              <i className="fas fa-dot-circle"></i> mostaql
            </a>
          </li>
          <i className=" closs fas fa-times" onClick={closs}></i>
        </ul>
      </div>
    </Fragment>
  );
};
export default callUs;
