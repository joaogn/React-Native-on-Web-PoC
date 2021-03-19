import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Container, FormWrapper } from './styles';
import { useDevsContext } from '../../contexts/DevsContext';
import PersonAddIcon from '../../assets/icons/person_add.svg';
import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';

const AddUserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const AddNewUserScreen = () => {
  const { addNewDev } = useDevsContext();
  const { t } = useTranslation();
  return (
    <Container testID="addNewUserContainerMobile">
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
            <ButtonForm onPress={submitForm}>Add</ButtonForm>
          </FormWrapper>
        )}
      </Formik>
    </Container>
  );
};

export default AddNewUserScreen;
