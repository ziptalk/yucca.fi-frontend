//지갑 연결 커스텀 버튼의 스타일파일

import styled from '@emotion/styled';

export const WalletBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(125deg, #f45dd3 1%, #fc954b 99%);
  min-width: 16.7rem;
  width: fit-content;
  height: 4.6rem;
  border-radius: 20px;
  padding: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2m};

  &:hover {
    background: linear-gradient(125deg, #fc954b 1%, #f45dd3 99%);
  }
`;

export const IconBtn = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: center;
  background-color: transparent;
`;
