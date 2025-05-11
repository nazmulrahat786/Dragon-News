import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    details,
    total_view,
    rating,
  } = news;

  // Format the date from author.published_date
  const formattedDate = new Date(author?.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center bg-base-200 justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Title and Image */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <img
          src={thumbnail_url}
          alt="News"
          className="w-full h-52 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <span className="text-primary font-medium ml-1 cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar /> <span className="font-semibold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
