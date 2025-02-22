import * as St from './MainPage.style';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';
import { announceIMG, noticeIMGMobile } from './assets/0_index';
import { Outlet } from 'react-router-dom';
import useModal from '../common/hooks/useModal';
import BotModal from './components/botModal/BotModal';
import RemoveModal from './components/RemoveModal';
import { STCOMBackdrop } from '../common/styles/commonStyleComs';
import UnConnectModal from './components/UnConnectModal';
import DepositToast from '../common/components/DepositToast';
import useToast from '../common/hooks/useToast';
import { useState } from 'react';
import useMobile from '../common/hooks/useMobile';
import styled from '@emotion/styled';
import FailToast from '../common/components/FailToast';

const MainPage = () => {
  const { toast: depositToast, showToast: showDepositToast } = useToast();
  const { toast: removeToast, showToast: showRemoveToast } = useToast();
  const { toast: failToast, showToast: showFailToast } = useToast();
  const [dataRefreshTrigger, setDataRefreshTrigger] = useState<boolean>(false);

  const handleDataRefreshRequest = () => {
    setDataRefreshTrigger((prev) => !prev); // 상태를 토글하여 MainContent에 데이터 새로 고침을 트리거
  };

  //Bot Modal
  const {
    isModalOpen: isBotModalOpen,
    openModal: openBotMoal,
    closeModal: closeBotModal,
    botId: modalBotId,
  } = useModal();
  //remove Modal
  const {
    isModalOpen: isRemoveMoalOpen,
    openModal: openRemoveModal,
    closeModal: closeRemoveModal,
    botId: removeBotId,
    totalInvest,
  } = useModal();

  //unconnect Modal
  const {
    isModalOpen: isUnConnectMoalOpen,
    openModal: openUnConnectModal,
    closeModal: closeUnConnectModal,
  } = useModal();
  return (
    <StContainer>
      <Header />
      <St.MainContainer>
        <Announcement />
        <MainContent
          openBotModal={openBotMoal}
          openRemoveModal={openRemoveModal}
          openUnConnectModal={openUnConnectModal}
          refreshTrigger={dataRefreshTrigger}
        />
      </St.MainContainer>
      <Footer />
      {(isBotModalOpen || isRemoveMoalOpen || isUnConnectMoalOpen) && (
        <STCOMBackdrop />
      )}
      {isBotModalOpen && (
        <BotModal
          isOpen={isBotModalOpen}
          onClose={closeBotModal}
          botId={modalBotId}
          showToast={showDepositToast}
          onDataRefreshRequest={handleDataRefreshRequest}
        />
      )}
      {isRemoveMoalOpen && (
        <RemoveModal
          isOpen={isRemoveMoalOpen}
          onClose={closeRemoveModal}
          botId={removeBotId}
          totalInvest={totalInvest}
          showFailToast={showFailToast}
          showSuccessToast={showRemoveToast}
        />
      )}

      {isUnConnectMoalOpen && (
        <UnConnectModal
          isOpen={isUnConnectMoalOpen}
          onClose={closeUnConnectModal}
        />
      )}
      {depositToast && <DepositToast message={depositToast.message} />}
      {removeToast && <DepositToast message={removeToast.message} />}
      {failToast && <FailToast message={failToast.message} />}
    </StContainer>
  );
};

const Announcement = () => {
  const isMobile = useMobile();
  return (
    <St.Announcement.GlassWrapper>
      <St.Announcement.Container>
        <St.Announcement.Label>Notice</St.Announcement.Label>
        <St.Announcement.Text>
          Unlock the Full Potential of Your
        </St.Announcement.Text>
        <St.Announcement.Text>Investments with Yucca!</St.Announcement.Text>
        <St.Announcement.Background
          src={isMobile ? noticeIMGMobile : announceIMG}
        />
      </St.Announcement.Container>
    </St.Announcement.GlassWrapper>
  );
};

// MainContent 컴포넌트

const MainContent = ({
  openBotModal,
  openRemoveModal,
  openUnConnectModal,
  refreshTrigger,
}: {
  openBotModal: (id: string) => void;
  openRemoveModal: (id: string) => void;
  openUnConnectModal: () => void;
  refreshTrigger: boolean;
}) => {
  return (
    <St.MainContent.Container>
      <Outlet
        context={{
          openBotModal,
          openRemoveModal,
          openUnConnectModal,
          refreshTrigger,
        }}
      />
    </St.MainContent.Container>
  );
};

export default MainPage;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
