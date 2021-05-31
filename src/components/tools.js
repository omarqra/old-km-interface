import { Fragment } from "react";
import mongodblogo from "../image/logos/mongodblogo.png";
import nodejslogo from "../image/logos/nodejslogo.png";
import reduxlogo from "../image/logos/reduxlogo.png";
import photoshoplogo from "../image/logos/photoshoplogo.png";
import sasslogo from "../image/logos/sasslogo.png";
import htmllogo from "../image/logos/htmllogo.png";
import jslogo from "../image/logos/jslogo.png";
import csslogo from "../image/logos/csslogo.png";
import reactlogo from "../image/logos/reactlogo.png";

const tools = (props) => {
  return (
    <Fragment>
      <section className="tools section2">
        <div className="background layout"></div>
        <h2>الخبرات المكتسبة</h2>
        <div className="container">
          <div>
            <img src={mongodblogo} alt="mongodb logo" />
            <span> 11 ساعة خبرة</span>
          </div>
          <div>
            <img src={nodejslogo} alt="node js logo" />
            <span> 22 ساعة خبرة</span>
          </div>
          <div>
            <img src={reduxlogo} alt="redux logo" />
            <span> 15 ساعة خبرة</span>
          </div>
          <div>
            <img src={photoshoplogo} alt="photoshop logo" />
            <span> 50 ساعة خبرة</span>
          </div>
          <div>
            <img src={sasslogo} alt="sass logo" />
            <span> 20 ساعة خبرة</span>
          </div>
          <div>
            <img src={htmllogo} alt="html logo" />
            <span> 35 ساعة خبرة</span>
          </div>
          <div>
            <img src={jslogo} alt="js logo" />
            <span> 30 ساعة خبرة</span>
          </div>
          <div>
            <img src={csslogo} alt="css logo" />
            <span> 35 ساعة خبرة</span>
          </div>
          <div>
            <img src={reactlogo} alt="react logo" />
            <span> 25 ساعة خبرة</span>
          </div>
        </div>
        <button
          onClick={() => {
            props.animation(2);
          }}
        >
          شاهد أعمالي
        </button>
      </section>
    </Fragment>
  );
};
export default tools;
