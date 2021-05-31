import axios from "axios";
import { Component, Fragment } from "react";
import { Image } from "cloudinary-react";

class Portfolio extends Component {
  state = {
    data: [],
    somedata: [],
    project: {},
  };

  componentDidMount() {
    const url = "https://km-site.herokuapp.com/sitesData";
    axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({ data });
        const somedata = this.state.data.slice(0, 3);
        this.setState({ somedata });
      });
  }

  clickedProjrct = (clickedPro) => {
    const project = clickedPro;
    this.setState({ project });
  };

  closs = () => {
    this.setState({ project: {} });
  };

  getall = (e) => {
    let somedata = this.state.somedata;
    console.log(somedata.length);
    if (somedata.length <= 3) {
      e.target.innerHTML = "عرض أقل";
      somedata = this.state.data;
      this.setState({ somedata });
    } else {
      e.target.innerHTML = "عرض المزيد";
      somedata = this.state.data.slice(0, 3);
      this.setState({ somedata });
    }
  };

  render() {
    const myProjects = this.state.somedata.map((item, index) => {
      return (
        <div className="project-card" key={index}>
          <Image
            cloudName="dc361yf1s"
            publicId={item.imageId}
            width="400"
            crop="fill"
          />
          <div className="layout">
            <h3>{item.name}</h3>
            <div className="nav">
              <i
                className="far fa-eye"
                onClick={() => {
                  this.clickedProjrct(item);
                }}
              ></i>
              <a href={item.githubURL} target="blank">
                <i className="fab fa-github"></i>
              </a>
              <a href={item.siteURL} target="blank">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });
    let project;
    const viewProject = () => {
      const clickedProjrct = this.state.project;
      if (clickedProjrct._id) {
        project = (
          <div className="view">
            <i className=" closs fas fa-times" onClick={this.closs}></i>
            <div className="contant">
              <Image
                cloudName="dc361yf1s"
                publicId={clickedProjrct.imageId}
                width={window.innerWidth}
                crop="fill"
              />
              <div>{clickedProjrct.name}</div>
            </div>
          </div>
        );
      } else {
        project = "";
      }
    };
    viewProject();
    return (
      <Fragment>
        <section className="portfolio section3">
          {project}
          <div className="layout"></div>
          <div className="layout background"></div>
          <h2>الأعمال السابقة</h2>
          <div className="container">{myProjects}</div>
          <button onClick={this.getall}>عرض المزيد</button>
        </section>
      </Fragment>
    );
  }
}

export default Portfolio;
