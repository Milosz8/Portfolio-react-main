import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import myPortfolioImg from '../images/myPortfolio.png';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: "Miłosz's portfolio",
    desc: 'My portfolio',
    img: myPortfolioImg,
  },
  {
    id: uuidv4(),
    name: 'SNOW Website',
    desc: 'Official website of band called SNOW',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'BS blog',
    desc:
      'Portfolio & gallery of antiques and coin collection of Bogusz Siemek',
    img: CoinTrackerImg,
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
