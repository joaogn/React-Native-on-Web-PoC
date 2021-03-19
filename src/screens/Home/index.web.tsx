/* eslint-disable camelcase */
import React, { useState, useRef } from 'react';
import { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { Header, ContentWrapper, MapWrapper } from './styles.web';
import AddNewDev from './components/AddNewDevWeb';
import DevList from './components/DevListWeb';
import { useAuthContext } from '../../contexts/AuthContext';
import { useDevsContext } from '../../contexts/DevsContext';
import { useSizeContext } from '../../contexts/SizeContext';
import LayoutWeb from '../../layouts/LayoutWeb';
import Maps from './components/Maps';
import MobileScreen from './MobileScreen';
import AddPersonIcon from '../../assets/icons/person_add.svg';
import ShowListIcon from '../../assets/icons/view_list.svg';

const Main = () => {
  const { devList } = useDevsContext();
  const { isSmallScreen } = useSizeContext();
  const { user } = useAuthContext();
  const theme = useTheme();
  const { t } = useTranslation();

  const sectionMapElement = useRef<HTMLDivElement>(null);
  const [isAddNewUserOpen, setIsAddNewUserOpen] = useState(false);
  const [isDeveloperListOpen, setisDeveloperListOpen] = useState(false);

  if (isSmallScreen) {
    return <MobileScreen />;
  }
  return (
    <LayoutWeb>
      <ContentWrapper data-testid="homeContainerWeb">
        <Header>
          <section>
            <h1>{t('app_name')}</h1>
          </section>
          <section>
            <button
              data-testid="openAddNewDevButton"
              type="button"
              onClick={() => setIsAddNewUserOpen(oldState => !oldState)}
            >
              <AddPersonIcon fill={theme.white} />
            </button>
            <button
              data-testid="openDeveloperButton"
              type="button"
              onClick={() => setisDeveloperListOpen(oldState => !oldState)}
            >
              <ShowListIcon fill={theme.white} />
            </button>
          </section>
        </Header>

        <MapWrapper ref={sectionMapElement}>
          <Maps devList={devList} user={user} />
          {isDeveloperListOpen && sectionMapElement.current && (
            <DevList close={() => setisDeveloperListOpen(false)} />
          )}
          {isAddNewUserOpen && sectionMapElement.current && (
            <AddNewDev close={() => setIsAddNewUserOpen(false)} />
          )}
        </MapWrapper>
      </ContentWrapper>
    </LayoutWeb>
  );
};

export default Main;
