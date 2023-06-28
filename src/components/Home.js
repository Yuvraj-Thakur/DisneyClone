import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recomended from './Recomended';
import NewDisney from './NewDisney';
import Trending from './Trending';
import Originals from './Originals';


const Home = (props) => {
    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Recomended/>
            <NewDisney/>
            <Trending/>
            <Originals/>
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;