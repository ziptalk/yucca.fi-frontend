import {
  STCOMBackground,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import styled from '@emotion/styled';
import { IcModalX } from '../assets/0_index';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../../common/hooks/useOutsideClick';
import {
  useChainInfo,
  useUserAccount,
} from '../../wallet/hooks/useUserWalletInfo';
import instance from '../../common/apis/instance';
import { removeTokens } from '../../common/contracts/remove';
import { useQueryClient } from '@tanstack/react-query';

const RemoveModal = ({
  isOpen,
  onClose,
  botId,
  showFailToast,
  showSuccessToast,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId?: string | null;
  totalInvest: number | null;
  showFailToast: (message: string) => void;
  showSuccessToast: (message: string) => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, onClose);
  const [isLoading, setIsLoading] = useState(false);
  const user_id = useUserAccount();
  const { decimal } = useChainInfo();
  const queryClient = useQueryClient();
  if (!isOpen) return;

  const remove = async () => {
    if (!user_id) return;
    const base_url = import.meta.env.VITE_BASE_URL;

    const postBody = {
      user_id: user_id,
      bot_id: botId,
    };
    try {
      setIsLoading(true);
      const { data } = await instance.post(
        `${base_url}/yucca/remove/calculate`,
        postBody
      );
      await removeTokens(
        data.totalStakedAmount * 0.8,
        data.totalUnstakeAmount,
        decimal
      );
      await axios.post(`${base_url}/yucca/remove/final`, postBody);
      onClose();
      showSuccessToast('The remove was successfully performed');
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    } catch (err) {
      setIsLoading(false);
      if (axios.isAxiosError(err) && err.response) {
        err.response.status === 499 &&
          alert('You can remove this bot after a month of deposing!');
        return;
      }
      showFailToast('The remove failed');
    }
  };

  return (
    <STCOMBackground>
      <StWrapper ref={wrapperRef}>
        <StTop>
          <p>Remove</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <span>Are you sure you want to stop the</span>
          <span>Cyclic Arb BOT and close your trades?</span>
        </StMiddle>
        <StBottom>
          <StRemoveBtn onClick={remove}>
            {isLoading ? 'Removing Bot..' : 'Remove'}
          </StRemoveBtn>
        </StBottom>
      </StWrapper>
    </STCOMBackground>
  );
};

export default RemoveModal;

const StWrapper = styled.div`
  width: 56rem;
  height: 25.2rem;
  border-radius: 16px;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 100%;
  }
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.body_2};
`;

const StMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.small_phrase};
`;

const StBottom = styled.div`
  display: flex;
  justify-content: end;
`;

const StRemoveBtn = styled(STCOMGreyBtn)`
  background-color: ${({ theme }) => theme.colors.spring_green};
  width: 14.7rem;
  height: 4.5rem;
`;
