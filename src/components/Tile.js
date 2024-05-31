import './Tile.css';


function Tile({heading, subheading, img, text, link}){
    return (
        <div className="tile">
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
            <div className='img-parent'>
                <img src={img} alt='image' />
            </div>
            <div className='text'>
                <p>{text}</p>
                <a href={link}>Read More</a>
            </div>
        </div>
    );
}
export default Tile;