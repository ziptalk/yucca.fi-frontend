//지갑 연결 커스텀 버튼의 스타일파일

import styled from '@emotion/styled';

export const WalletBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark_spring_green};
  min-width: 16.7rem;
  width: fit-content;
  height: 4.6rem;
  border-radius: 20px;
  padding: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2m};

  &:hover {
    background: ${({ theme }) => theme.colors.dark_pink};
  }
`;

export const IconBtn = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: center;
  background-color: transparent;
`;
