export const calculateAlarmTime = (selectedStation, type) => {
  const time = new Date(selectedStation.time);
  if (type === "5minutes") {
    time.setMinutes(time.getMinutes() - 5);
  } else if (type === "oneBefore") {
    // 駅リストから前の駅を探す
    // 必要に応じて実装
  }
  return time;
};
