import React from 'react';
import Draggable from 'react-draggable';
import { useTranslation } from 'react-i18next';
import { Container, Scroll } from './styles';
import { useDevsContext } from '../../../../contexts/DevsContext';
import DevCard from '../../../../components/DevCard';
import CloseIcon from '../../../../assets/icons/close.svg';

interface DevListProps {
  close(): void;
}

const DevList = ({ close }: DevListProps) => {
  const { devList } = useDevsContext();
  const { t } = useTranslation();
  return (
    <Draggable bounds="parent">
      <Container data-testid="devListContainerWeb">
        <section>
          <h1>{t('developers')}</h1>
          <button type="button" onClick={close}>
            <CloseIcon />
          </button>
        </section>
        <Scroll>
          {devList.map(({ id, avatar_url, login, name }) => (
            <DevCard
              key={id}
              avatar_url={avatar_url}
              user={login}
              name={name}
            />
          ))}
        </Scroll>
      </Container>
    </Draggable>
  );
};

export default DevList;
