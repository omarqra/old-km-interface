import { Fragment } from "react";

const Home = (props) => {
  return (
    <Fragment>
      <section className="home">
        <div className="layout"></div>
        <div className="darklayout">
          <div className="Welcome">
            <span className="right">مرحباً بك</span>
            <span className="left">في موقع</span>
          </div>
          <h1>عمر قره محمد</h1>
          <button
            onClick={() => {
              props.animation(1);
            }}
          >
            انظر عن كثب
          </button>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
