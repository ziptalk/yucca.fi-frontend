import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IChartData } from '../../types/pnlChartType';
import { formatPriceValue } from '../../../common/utils/formatPriceValue';
import useMobile from '../../../common/hooks/useMobile';

const getYRange = (data: IChartData[]) => {
  const yValues = data.map((item) => item.pnlRate);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);
  return { minY, maxY };
};

const UserPnLChart = ({
  chartData,
}: {
  chartData: IChartData[] | undefined;
}) => {
  const isMobile = useMobile();
  if (!chartData) return;
  const { minY, maxY } = getYRange(chartData);
  const series = [
    {
      name: 'User PnL Chart',
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
        shade: 'light', // 그라데이션의 밝기
        type: 'vertical', // 수직 그라데이션
        shadeIntensity: 0.5,
        gradientToColors: ['#6D9F71'], // 그라데이션의 끝 색상
        inverseColors: false,
        opacityFrom: 0.3, // 시작 색상의 투명도
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

  return chartData ? (
    <>
      {isMobile ? (
        <ApexCharts
          options={options}
          series={series}
          type='area'
          height='80%'
          width='100%'
        />
      ) : (
        <ApexCharts
          options={options}
          series={series}
          type='area'
          height='80%'
          width='100%'
        />
      )}
    </>
  ) : (
    <>loading</>
  );
};

export default UserPnLChart;
