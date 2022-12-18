import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import type { FieldConfig } from 'formik'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import React from 'react'
import * as yup from 'yup'

import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react'


import PageContainer from '../../comp/pageContainer'
import { auth } from '../../firebase/init'

function FeildConfigMK(props: FieldConfig): FieldConfig {
    return props
}

const GoogleAuth = new GoogleAuthProvider()

export default function Page() {
    return (
        <PageContainer>
            <Head>
                <title>تسجيل الدخول</title>
            </Head>

            <Tabs width="full">
                <TabList
                    width="full"
                    display="flex"
                    flexDirection="row"
                    justifyContent="stretch"
                >
                    <Tab>الدَخول</Tab>
                    <Tab>التسجيل</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <Register />
                    </TabPanel>
                    <Button onClick={() => signInWithPopup(auth, GoogleAuth)}>
                        signInWithPopup
                    </Button>
                </TabPanels>
            </Tabs>
        </PageContainer>
    )
}

function Register() {
    const initialValue = { email: '', password: '', checkbox: false }

    function Login() {
        console.log("ss");
        
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email('هذا البريد الاكتروني غير صالح')
                    .required('هذا الحقل مطلوب'),
                password: yup.string().required('هذا الحقل مطلوب'),
                checkbox: yup
                    .boolean()
                    .required()
                    .oneOf([true], 'هذا الحقل مطلوب'),
            })}
            enableReinitialize
            onSubmit={Login}
        >
            {(props) => (
                <Form className="w-full" onSubmit={props.handleSubmit}>
                    <Heading>التسجيل: </Heading>
                    <FormControl className="w-full mx-0 my-2">
                        <FormLabel>البريد الالكتروني:</FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'email',
                                as: Input,
                                type: 'email',
                            })}
                        />
                        <Text color="red">{props.errors.email}</Text>
                    </FormControl>
                    <FormControl className="w-full mx-0 my-2">
                        <FormLabel>كلمة المرور: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'password',
                                as: Input,
                                type: 'password',
                            })}
                        />
                        <Text color="red.700">{props.errors.password}</Text>
                    </FormControl>
                    <FormControl className="w-full mx-0 my-2">
                        <Field
                            {...FeildConfigMK({
                                name: 'checkbox',
                                type: 'checkbox',
                            })}
                        />
                        <Text display="inline">أُوافق علي الشروط</Text>
                        <Text color="red.700">{props.errors.checkbox}</Text>
                    </FormControl>
                    <FormControl>
                        <Button type="submit">سَجل</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    )
}

function Login() {
    const initialValue = { email: '', password: '' }
    function Login() {
        console.log("");
        
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email('هذا البريد الاكتروني غير صالح')
                    .required('هذا الحقل مطلوب'),
                password: yup.string().required('هذا الحقل مطلوب'),
            })}
            enableReinitialize
            onSubmit={Login}
        >
            {(props) => (
                <Form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
                    <Heading>تسجيل الدُخول</Heading>
                    <FormControl className="w-full mx-0 my-2">
                        <FormLabel>البريد الالكتروني: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'email',
                                as: Input,
                                type: 'email',
                            })}
                        />
                        <Text color="red">{props.errors.email}</Text>
                    </FormControl>
                    <FormControl className="w-full mx-0 my-2">
                        <FormLabel>كَلمة المرور: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'password',
                                as: Input,
                                type: 'password',
                            })}
                        />
                        <Text color="red">{props.errors.password}</Text>
                    </FormControl>

                    <FormControl>
                        <Button m="10px 0" type="submit">
                            دخول
                        </Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    )
}
