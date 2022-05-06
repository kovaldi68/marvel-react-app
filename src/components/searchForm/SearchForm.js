import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoutes } from '../../const';
import { addQuery, updateUser } from '../../store/userActionsSlice';

import './searchForm.scss';
import '../../style/button.scss';

function SearchForm() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userActions.user);
    const isLogin = useSelector(state => state.userActions.isLogin);
    
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ characterName: ''}}
            validationSchema = {Yup.object({
                characterName: Yup.string().required('This field is required')
            })}
            onSubmit={(values) => {
                if (isLogin) {
                    dispatch(addQuery(values.characterName));
                    dispatch(updateUser({...user, searchHistory: [...user.searchHistory, values.characterName]}));
                };

                const query = values.characterName;
                navigate(`${AppRoutes.SearchResult}?nameStartsWith=${query}`)
            }}

        >
            {({ isSubmitting }) => (
            <Form className="page-content__search-form search-form">
                <div className="search-form__search-wrapper">
                    <label className="search-form__search-label" htmlFor="characterName">Find your favourite character by its name:</label>
                    <Field className="search-form__search-input" id="characterName" name='characterName' type='search' placeholder="Enter name of the best character in the world"/>
                    <FormikErrorMessage className='form__error' name='characterName' component='span'/>
                    <button
                        type="submit"
                        className="search-form__button button button--find"
                    >find</button>
                </div>
            </Form>
            )}
        </Formik>
    )
}

export default SearchForm;