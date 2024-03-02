export const Progress = ({ currentTime, duration }) => {
  const formatTime = (time) => {
    // Format time in minutes:seconds
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="progress my-8">
      <div className="flex justify-between text-lightGray text-xs font-semibold ">
        <p>{formatTime(currentTime)}</p>
        <p>{formatTime(duration)}</p>
      </div>
      <div className="h-1 w-full mt-1">
        <div
          className="h-1 bg-pink rounded-2xl"
          id="progress-timer"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
