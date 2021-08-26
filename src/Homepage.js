import styles from "./homepage.module.scss";
import "./App.scss";
const Data = [
  {
    id: 1,
    icon: "edit",
    Title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    id: 2,
    icon: "code",
    Title: "Front End",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    id: 3,
    icon: "storage",
    Title: "Back End",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
];

const Images = [
  {
    key: 1,
    img: "smarthome.jpg",
    intro: "Full stack application",
    name: "Smart home dashboard",
  },
  {
    key: 2,
    img: "onboard.png",
    intro: "UX/UI design",
    name: "Onboard application",
  },
  {
    key: 3,
    img: "booking.png",
    intro: "Mobile application",
    name: "Booking system",
  },
  {
    key: 4,
    img: "juice-product.png",
    intro: "Front End application",
    name: "Juice product homepage",
  },
];
const Homepage = (props) => {
  return (
    <div>
      <section id="home"className={styles.sectionHome}>
        <div className={styles.marginLeft}>
          <div className={styles.blueTitle}>Unhappy with your website?</div>
          <p className={styles.intro1}>
            We create beautiful and fast web services
          </p>
        </div>
        <div className={styles.heroDiv}>
          <img
            className={styles.heroImg}
            src="./hero.png"
            alt="heroImage"
          />
        </div>
        <div className={styles.marginLeft}>
          <p className={styles.storyTitle}>Story, emotion and purpose</p>
          <p className={styles.storyDesc}>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>

          <div className={styles.inputEmailOverview}>
            <label className={styles.labelContact}>
              Want us to contact you?
            </label>
            <div className={styles.inputPosition}>
              <input
                type="text"
                placeholder="Email"
                className={styles.inputEmail}
              />
              <button className={styles.buttonJoin}>Join</button>
            </div>
          </div>
        </div>
      </section>   
      <section id="service" className={styles.sectionServices}>
        <h1 className={styles.serviceTitle}>We offer high demand services </h1>
        <div className={styles.serviceOverview}>
          {Data.map((data) => (
            <div className={styles.serviceIntro} key={data.id}>
              <div className={styles.serviceMargin}>
                <span className={`material-icons all ${data.icon}`}>
                  {data.icon}
                </span>
                <div className={styles.serviceJob}>{data.Title}</div>
                <div className={styles.serviceDesc}>{data.desc}</div>
                <button className={styles.buttonStart}>Get started</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="work"className={styles.sectionWorks}>
        <h1 className={styles.workTitle}>Good design means good business</h1>

        <div className={styles.gridImage}>
          {Images.map((image) => (
            <div className={styles.gridCard} key={image.key}>
              <img src={image.img} alt={image.img} className={styles.img} />
              <div className={styles.gridIntro}>{image.intro}</div>
              <div className={styles.gridName}>{image.name}</div>
            </div>
          ))}
          <div className={styles.moreContainer}>
            <button className={styles.moreButton}>
              see more
              <span className="material-icons flat">trending_flat</span>
            </button>
          </div>
        </div>
      </section>
      <section id="team"className={styles.sectionTeams}>
        <div className={styles.teamOverview}>
          <div className={styles.smallHeader}>Meet the team</div>
          <h1 className={styles.teamHeader}>
            We are chilled and a laidback team
          </h1>
          <p className={styles.teamDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles.gridTeam}>
          <img src="person3.png" alt="person3" className={styles.person3Img} />
          <img src="person1.png" alt="person1" className={styles.person1Img} />
          <img src="person2.png" alt="person2" className={styles.person2Img} />
        </div>
      </section>
      <section id="client"className={styles.sectionClients}>
        <h1 className={styles.clientHeader}>
          “Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team.”
        </h1>
        <div className={styles.clientProfile}>
          <img
            src="person4.png"
            alt="person4.png"
            className={styles.person4Img}
          />
          <div className={styles.clientDetail}>
            <div className={styles.clientName}>Carlos Tran</div>
            <div className={styles.clientJob}>The Decorate Gatsby</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
