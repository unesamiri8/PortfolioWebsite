import Nav from "../assets/components/navbar/nav";
import "../assets/style/landing.css";
import Shape from "../assets/components/shape";
import user from "../assets/pics/user.png";
import p2Image from "../assets/pics/p2Image.jpg";
import p3Image from "../assets/pics/p3Image2.png";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p4Image from "../assets/pics/astronautP4.png";
let Landing = () => {
  return (
    <>
      <div id="p1">
        <Nav
          logo="UA"
          logoTitle="AMIRI CODE GYM"
          n1="projects &nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;"
          n2="about &nbsp;&nbsp;&nbsp;&nbsp;    / &nbsp;&nbsp;&nbsp;&nbsp; "
          n3="contact &nbsp;&nbsp;&nbsp;&nbsp; "
          n4="hire me"
        />
        <div className="p1Middle">
          <Shape
            height="800"
            width="800"
            class="circleTop"
            cx="0"
            cy="0"
            r="400"
            stroke="black"
            fill="#D9DCDF"
          />
          <Shape
            height="800"
            width="800"
            class="circleBottom"
            cx="900"
            cy="500"
            r="300"
            stroke="black"
            fill="#D9DCDF"
          />
          <h1 className="p1Header">
            UNES<br></br>Amiri
          </h1>
          <img className="p1Image" src={user}></img>
        </div>
      </div>
      <div id="p2">
        <Shape
          height="800"
          width="800"
          class="p2Shape"
          cx="0"
          cy="100%"
          r="300"
          stroke="white"
          fill="#141414"
        />
        <div className="p2Header">
          <span className="p2HItem1">BLUEPRINT</span>
          <span className="p2HItem2">TEAMWORK</span>
          <span className="p2HItem3">PROJECT</span>
        </div>
        <div className="p2Para">
          Non aliqua ea sit aliqua est pariatur nostrud exercitation<br></br> ad
          qui quis exercitation. Nisi sint commodo occaecat dolor <br></br>
          cupidatat id ut anim velit ut consectetur adipisicing. Et nisi{" "}
          <br></br> dolor commodo sit Lorem duis ut commodo est adipisicing.
        </div>
        <img className="p2Image" src={p2Image}></img>
      </div>
      <div id="p3">
        <p className="p3Para">
          Occaecat eiusmod nulla aute culpa commodo enim do Lorem id ad.
          Pariatur commodo elit adipisicing cillum commodo dolor eu veniam duis
          ex. Aute sunt mollit mollit officia minim ullamco voluptate cillum
          dolore. Ullamco pariatur consectetur excepteur ipsum qui. In qui in
          veniam amet fugiat. Occaecat do consectetur ipsum cillum labore amet
          irure qui pariatur. Reprehenderit officia eiusmod esse in ut deserunt
          excepteur proident nostrud ut nostrud do laboris. Ut sint quis irure
          consequat nulla exercitation qui duis eu. Eu aliqua adipisicing dolor
          veniam cupidatat tempor ut nostrud dolor ullamco.
        </p>
        <a className="p3Circle" href='mailto:unesblgr@gmail.com'>Get in Touch</a>
        <img className="p3Image" src={p3Image}></img>
        <div className="p3Code p3Down">
          <h5>Code Projects</h5>
          <a>
            see full projects{" "}
            <span className="forwardIcon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>{" "}
          </a>
        </div>
        <div className="p3Design p3Down">
          <h5>Designed Items</h5>
          <a>
            see full list{" "}
            <span className="forwardIcon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>{" "}
          </a>
        </div>
      </div>
      <div id="p4">
        <h1 className="p4Header">/ABOUT</h1>
        <img className="p4Image" src={p4Image}></img>
        <span className="p4Icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <p className="p4Para">
          Do est qui nostrud sint et exercitation commodo voluptate mollit.
          Exercitation do exercitation ea consequat adipisicing ad culpa
          deserunt dolor est culpa dolore consequat sit. Incididunt deserunt
          proident irure magna fugiat sunt est deserunt labore deserunt
          consectetur. Voluptate incididunt pariatur velit occaecat magna
          nostrud nulla aliquip cupidatat id officia ea. Laborum consequat sunt
          Lorem sint ipsum pariatur magna proident consequat anim do proident
          non fugiat. Fugiat mollit veniam culpa sunt deserunt.
        </p>
      </div>
    </>
  );
};

export default Landing;
