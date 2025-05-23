import images from "../assets/data/images.json";

const chunkArray = (arr, numColumns) => {
  const columns = Array.from({ length: numColumns }, () => []);
  arr.forEach((item, i) => {
    columns[i % numColumns].push(item); // distribuye en columnas
  });
  return columns;
};

const ImagesGallery = () => {
  const columns = chunkArray(images, 4); // 4 columnas

  return (
    <div className="row-images">
      {columns.map((column, colIndex) => (
        <div className="column-images" key={colIndex}>
          {column.map((img, i) => (
            <img key={i} src={img.url} alt={img.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImagesGallery;
