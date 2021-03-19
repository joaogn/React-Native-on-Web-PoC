/* eslint-disable react/require-default-props */
import React from 'react';
import Draggable from 'react-draggable';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Container, FormWrapper } from './styles';
import { useDevsContext } from '../../../../contexts/DevsContext';
import CloseIcon from '../../../../assets/icons/close.svg';
import PersonAddIcon from '../../../../assets/icons/person_add.svg';
import InputForm from '../../../../components/InputForm';
import ButtonForm from '../../../../components/ButtonForm';

interface AddNewDevProps {
  close(): void;
}
const AddUserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const AddNewDev = ({ close }: AddNewDevProps) => {
  const { addNewDev } = useDevsContext();
  const { t } = useTranslation();
  return (
    <Draggable bounds="parent">
      <Container data-testid="addNewDevContainerWeb">
        <section>
          <h1>{t('new')}</h1>
          <button type="button" onClick={close}>
            <CloseIcon />
          </button>
        </section>
        <section>
          <Formik
            initialValues={{ userName: '' }}
            validationSchema={AddUserSchema}
            onSubmit={({ userName }) => addNewDev(userName)}
          >
            {({ errors, touched, handleChange, submitForm, values }) => (
              <FormWrapper>
                <InputForm
                  icon={PersonAddIcon}
                  placeholder={t('add_new_placeholder')}
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                  error={
                    errors.userName && touched.userName
                      ? errors.userName
                      : undefined
                  }
                />
                <ButtonForm onPress={submitForm}>{t('add')}</ButtonForm>
              </FormWrapper>
            )}
          </Formik>
        </section>
      </Container>
    </Draggable>
  );
};

export default AddNewDev;
