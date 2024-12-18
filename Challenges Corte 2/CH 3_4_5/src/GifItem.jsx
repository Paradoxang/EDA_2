export const GifItem = ({ title, url }) => {
    return (
      <div className="gif-item">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </div>
    );
  };
  
  export default GifItem;
  