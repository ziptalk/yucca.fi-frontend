import styled from '@emotion/styled';
import { VIEW } from '../components/SelectView';
import SelectView from '../components/SelectView';
import BotBoard from '../components/BotBoard';
import { IcSearch, IcSort } from '../assets/0_index';
import { DUMMY_BOT } from '../constants/mainPage_MOCK';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TRADE_BOTS_ORDER, TRADE_BOTS_SORT } from '../constants/TRADE_BOTS_API';
import { ITRADEBOTS } from '../types/dashboardType';
import useMobile from '../../common/hooks/useMobile';
import instance from '../../common/apis/instance';

const TradeBots = () => {
  // const data = MOCK_TRADEBOTS;
  const { openBotModal, openUnConnectModal, showToast, refreshTrigger } =
    useOutletContext<{
      openBotModal: (id: string) => void;
      openUnConnectModal: () => void;
      showToast: (message: string) => void;
      refreshTrigger: boolean;
    }>();
  const base_url = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState<ITRADEBOTS[]>();
  // const data = MOCK_TRADEBOTS;
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    getData('Profit');
  }, [refreshTrigger]);

  const getData = async (_sortKey: string) => {
    try {
      const sortKey = TRADE_BOTS_SORT[_sortKey];
      const { data } = await instance.get(
        `${base_url}/api/trade-bots?sort=${sortKey}&order=${TRADE_BOTS_ORDER[1]}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 검색 중
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  // 검색 완료
  const handleKeyDown = async (
    key_e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (key_e.key === 'Enter') {
      if (searchValue === '') {
        getData('Profit');
        return;
      }
      try {
        const { data } = await instance.get(
          `${base_url}/api/trade-bots?search=${searchValue}`
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <StContainer>
      <SelectView view={VIEW.TRADE_BOTS} />

      <StTopContainer>
        <StSearchInput>
          <IcSearch />
          <input
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={handleSearchValue}
            onKeyDown={handleKeyDown}
          />
        </StSearchInput>
        <StSortContainer>
          <SortBtn title='TVL' getData={getData} />
          <SortBtn title='Profit' getData={getData} />
          <SortBtn title='Runtime' getData={getData} />
        </StSortContainer>
      </StTopContainer>
      {data ? (
        <StBotsContainer>
          {data?.map((bot) => (
            <BotBoard
              key={bot.bot_id}
              data={bot}
              active={bot.bot_id}
              openModal={openBotModal}
              openUnConnectModal={openUnConnectModal}
              showToast={showToast}
            />
          ))}
          {!searchValue && (
            <BotBoard
              key={DUMMY_BOT.bot_id}
              data={DUMMY_BOT}
              active={DUMMY_BOT.bot_id}
              openModal={openBotModal}
              openUnConnectModal={openUnConnectModal}
              showToast={showToast}
            />
          )}
        </StBotsContainer>
      ) : (
        <>loading..</>
      )}
    </StContainer>
  );
};

const SortBtn = ({
  title,
  getData,
}: {
  title: string;
  getData: (sorting: string) => void;
}) => {
  const isMobile = useMobile();
  return (
    <StSortBtn onClick={() => getData(title)}>
      {title}
      {!isMobile && <IcSort />}
    </StSortBtn>
  );
};

export default TradeBots;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StTopContainer = styled.div`
  width: 100%;
  margin: 2.4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    row-gap: 1.5rem;
  }
`;
const StSearchInput = styled.div`
  width: 100%;
  max-width: 45rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  border-radius: 100px;
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    height: 100%;
    color: ${({ theme }) => theme.colors.sub_white};
    ${({ theme }) => theme.fonts.body_3};

    & ::-webkit-input-placeholder {
      color: #aeaeae;
      ${({ theme }) => theme.fonts.body_3};
    }
  }
`;

const StSortContainer = styled.div`
  height: 5rem;
  display: flex;
  height: 100%;
  gap: 1rem;
`;

const StSortBtn = styled.button`
  width: fit-content;
  height: 5rem;
  border-radius: 100px;
  padding: 0 1.6rem 0;
  ${({ theme }) => theme.fonts.body_3m};
  background-color: ${({ theme }) => theme.colors.white_opacity};
  color: ${({ theme }) => theme.colors.spring_green};
  gap: 0.7rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBotsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;
