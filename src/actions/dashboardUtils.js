function getDateList({ startDate, endDate }) {
  const startdate = new Date(`${startDate} 00:00:00`);
  const enddate = new Date(`${endDate} 00:00:00`);
  const dateList = [];

  while (enddate >= startdate) {
    dateList.push(`${startdate.getFullYear()}-${startdate.getMonth() + 1 < 10 ? `0${startdate.getMonth() + 1}` : startdate.getMonth() + 1}-${startdate.getDate() < 10 ? `0${startdate.getDate()}` : startdate.getDate()}`);
    startdate.setDate(startdate.getDate() + 1);
  }

  return dateList;
}

function makeDatapoint({
  data, startDate, endDate, dateType, orderPlaceName, column,
}) {
  const dateList = getDateList({ startDate, endDate });
  const dataMap = data
    .filter((row) => row.order_place_name === orderPlaceName)
    .reduce((map, row) => {
      const date = row[dateType].substring(0, 10);

      if (map.has(date)) {
        map.set(date, map.get(date) + (column ? row[column] : 1));
      } else {
        map.set(date, (column ? row[column] : 1));
      }

      return map;
    }, new Map());

  const dataPoints = [...dateList]
    .sort()
    .map((key) => ({
      label: key,
      y: dataMap.has(key) ? dataMap.get(key) : 0,
    }));

  return dataPoints;
}

const platformMapper = new Map([
  ['PC쇼핑몰', { name: '카페24 PC', color: '#d49d58' }],
  ['모바일웹', { name: '카페24 Mobile', color: '#838c94' }],
  ['네이버 페이', { name: '네이버 페이', color: '#008000' }],
  ['스마트스토어', { name: '스마트스토어', color: '#000080' }],
]);

export function makeChartOrderSumData({
  data, startDate, endDate, dateType, platforms, column,
}) {
  const result = [];

  platforms.forEach((platform) => {
    if (!platformMapper.has(platform)) {
      return;
    }

    const { name, color } = platformMapper.get(platform);
    result.push({
      name,
      color,
      dataPoints: makeDatapoint({
        data, startDate, endDate, dateType, orderPlaceName: platform, column,
      }),
    });
  });

  return result;
}

export function xxx() {

}
