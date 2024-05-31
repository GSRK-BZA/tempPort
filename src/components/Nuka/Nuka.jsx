import { Carousel } from "nuka-carousel";
import './Nuka.css';

function Nuka() {
  return (
    <div className='nuka'>
      <Carousel 
        cellAlign="center" 
        slidesToShow={1} 
        slidesToScroll={1}
        defaultControlsConfig={{
          nextButtonText: 'Next',
          prevButtonText: 'Prev',
          pagingDotsStyle: {
            fill: 'white'
          }
        }}
      >
        <img src="https://source.unsplash.com/random/800x800?dog" alt="dog" />
        <img src="https://source.unsplash.com/random/800x800?cat" alt="cat" />
        <img src="https://source.unsplash.com/random/800x800?goose" alt="goose" />
        <img src="https://source.unsplash.com/random/800x800?rabbit" alt="rabbit" />
        <img src="https://source.unsplash.com/random/800x800?hedgehog" alt="hedgehog" />
      </Carousel>
    </div>
  );
}

export default Nuka;