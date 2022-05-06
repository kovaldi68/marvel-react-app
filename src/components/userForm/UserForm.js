import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink as Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../store/userActionsSlice';

import './userForm.scss';
import { AppRoutes } from '../../const';

export function UserForm({ type, button, linkText, link }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || AppRoutes.Main;

    return (
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema = {Yup.object({
                email: Yup.string()
                          .email()
                          .required('This field is required'),
                password: Yup.string()
                          .min(5, 'Введите не менее 5 символов')
                          .required('This field is required')
            })}
            onSubmit={(values) => {
                const userData = {
                    email: values.email,
                    password: values.password,
                    searchHistory: [],
                    favs: []
                };

                const userMail = values.email;
                const userPassw = values.password;

                if (type === 'Sign In') {
                    try {
                        dispatch(signin({userMail, userPassw}));
                        navigate(fromPage);
                    }
                    catch {
                        setError('User with this email does not exist or password is incorrect! Check the password or Sign Up!');
                    }
                } else {
                    try {
                        dispatch(signup(userData));
                        navigate(fromPage);
                    }
                    catch {
                        setError('User already exists! Try to sign in!')
                    }
                }
            }}
        >
            <Form className="page-content__form form">
                <h2 className="form__title">{type}</h2>
                <div className="form__input-wrapper form__input-wrapper--email">
                    <label className="form__label" htmlFor="email">Your email:</label>
                    <Field
                        type="text"
                        className="form__input form__input--email"
                        name="email"
                        placeholder='Enter your email address'>
                    </Field>
                    <FormikErrorMessage className='form__error' name='email' component='div'/>
                </div>
                <div className="form__input-wrapper form__input-wrapper--password">
                    <label className="form__label" htmlFor="email">Your password:</label>
                    <Field
                        autoComplete='off'
                        type="password"
                        className="form__input form__input--password"
                        name="password"
                        placeholder='Enter your email password'>
                    </Field>
                    <FormikErrorMessage className='form__error' name='password' component='div'/>
                    
                </div>
                {error && <div className='form__error'>{error}</div>}
                <Link  className="form__link" to={link}>{linkText}</Link>
                <button type='submit' className="form__button button button-submit">{button}</button>
            </Form>
        </Formik>
    )
}