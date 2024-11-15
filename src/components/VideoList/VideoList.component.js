const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map((video) => {
        return (
          <li key={video.id} onClick={() => onSelect(video.link)}>
            {video.link}
          </li>
        );
      })}
    </ul>
  );
};

export default VideoList;
