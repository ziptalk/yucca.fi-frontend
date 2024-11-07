import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IChartData } from '../../types/pnlChartType';
import useMobile from '../../../common/hooks/useMobile';
import { formatPriceValue } from '../../../common/utils/formatPriceValue';

const getYRange = (data: IChartData[]) => {
  const yValues = data.map((item) => item.pnlRate);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);
  return { minY, maxY };
};

const AreaChart = ({ chartData }: { chartData: IChartData[] }) => {
  const isMobile = useMobile();
  // const data = [
  //   { createdAt: '2024-08-16T10:05:16.000Z', pnlRate: 10 },
  //   { createdAt: '2024-08-17T10:05:16.000Z', pnlRate: 15 },
  //   { createdAt: '2024-08-18T10:05:16.000Z', pnlRate: 30 },
  //   { createdAt: '2024-08-19T10:05:16.000Z', pnlRate: 40 },
  //   { createdAt: '2024-08-20T10:05:16.000Z', pnlRate: 20 },
  // ];
  const { minY, maxY } = getYRange(chartData);
  const series = [
    {
      name: '이번 연도',
      data: chartData?.map((item) => [
        new Date(item.createdAt).getTime(),
        item.pnlRate,
      ]),

      type: 'area',
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#6D9F71'],
      width: 2,
    },
    fill: {
      type: 'gradient', // 그라데이션으로 채우기
      gradient: {
        type: 'vertical', // 수직 그라데이션
        shadeIntensity: 0.3,
        gradientToColors: ['#6D9F71', '#273929', '#000'], // 그라데이션의 끝 색상
        inverseColors: true,
        opacityFrom: 0.5, // 시작 색상의 투명도
        opacityTo: 0, // 끝 색상의 투명도
        stops: [0, 100], // 그라데이션의 위치
      },
    },
    xaxis: {
      type: 'category',
      tickAmount: 3,
      tickPlacement: 'on',
      labels: {
        formatter: (value) => {
          const date = new Date(value);
          const month = date.getMonth() + 1; // getMonth() returns 0-based index
          const day = date.getDate();
          return `${month.toString().padStart(2, '0')}/${day
            .toString()
            .padStart(2, '0')}`;
        },
        style: {
          colors: '#AEAEAE',
        },

        offsetX: 0,
      },
      axisBorder: {
        show: true,
        color: '#AEAEAE', // x축 경계선 색상 하얀색으로 설정
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        // show: false,
        formatter: (value) => {
          if (value === 0) {
            return '';
          }
          return formatPriceValue(value) + '%'; // y축의 값을 %로 포맷팅합니다.
        },
        style: {
          colors: ['#AEAEAE'],
        },
      },
      tickAmount: 5,
      min: minY > 0 ? 0 : minY - 10,
      max: maxY + 10,
      // min: -10,
      // max: 100,
    },
    grid: {
      borderColor: '#AEAEAE', // 그리드 선 색상 하얀색으로 설정
      strokeDashArray: 3, // 점선 스타일
    },
    tooltip: {
      enabled: false,
    },
  };

  return isMobile ? (
    <ApexCharts
      options={options}
      series={series}
      type='area'
      height={240}
      width={450}
    />
  ) : (
    <ApexCharts
      options={options}
      series={series}
      type='area'
      height={240}
      width={500}
    />
  );
};

export default AreaChart;
