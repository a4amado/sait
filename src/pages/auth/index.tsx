import PageContainer from '../../comp/pageContainer'
import {
    Formik,
    Field,
    FieldConfig,
    Form,
    FieldValidator,
    FormikHandlers,
} from 'formik'
import {
    Button,
    FormControl,
    Input,
    FormLabel,
    Text,
    Heading,
    Checkbox,
    CheckboxGroup,
    CheckboxIcon,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    Tabs,
    Toast,
    useToast,
} from '@chakra-ui/react'
import { addDoc, getDoc, collection } from 'firebase/firestore'

function FeildConfigMK(props: FieldConfig): FieldConfig {
    return props
}

import * as yup from 'yup'
import { auth, db, storage } from '../../firebase/init'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { doc } from 'firebase/firestore'

export default function Page() {
    return (
        <PageContainer>
            <Tabs width="full">
                <TabList
                    width="full"
                    display="flex"
                    flexDirection="row"
                    justifyContent="stretch"
                >
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <Register />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </PageContainer>
    )
}

function Register() {
    const toast = useToast()
    const initialValue = { email: '', password: '', checkbox: false }

    async function Login(e: typeof initialValue) {
        console.log(e)
        try {
            setTimeout(() => {
                toast({
                    status: 'success',
                    title: 'تم التسجيل بنجاح.',
                })
            }, 5000)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={yup.object().shape({
                email: yup.string().email().required(),
                password: yup.string().required(),
                checkbox: yup.boolean().required().oneOf([true], 'Required'),
            })}
            enableReinitialize
            onSubmit={Login}
        >
            {(props) => (
                <Form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
                    <Heading>Register:</Heading>
                    <FormControl width="full">
                        <FormLabel>Email Adress: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'email',
                                as: Input,
                                type: 'email',
                            })}
                        />
                        <Text color="red.700">{props.errors.email}</Text>
                    </FormControl>
                    <FormControl width="full">
                        <FormLabel>Password: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'password',
                                as: Input,
                                type: 'password',
                            })}
                        />
                        <Text color="red.700">{props.errors.password}</Text>
                    </FormControl>
                    <FormControl>
                        <Field
                            {...FeildConfigMK({
                                name: 'checkbox',
                                type: 'checkbox',
                                value: 'Accept',
                            })}
                        />
                        <Text color="red.700">{props.errors.checkbox}</Text>
                    </FormControl>
                    <FormControl>
                        <Button type="submit">Register</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    )
}

function Login() {
    const toast = useToast()
    const initialValue = { email: '', password: '' }
    async function Login(e: typeof initialValue) {
        try {
            setTimeout(() => {
                toast({
                    status: 'success',
                    title: 'تم التسجيل بنجاح.',
                })
            }, 5000)
        } catch (error) {}
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={yup.object().shape({
                email: yup.string().email().required(),
                password: yup.string().required(),
            })}
            enableReinitialize
            onSubmit={Login}
        >
            {(props) => (
                <Form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
                    <Heading>Login:</Heading>
                    <FormControl width="full">
                        <FormLabel>Email Adress: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'email',
                                as: Input,
                                type: 'email',
                            })}
                        />
                        <Text color="red.700">{props.errors.email}</Text>
                    </FormControl>
                    <FormControl width="full">
                        <FormLabel>Password: </FormLabel>
                        <Field
                            {...FeildConfigMK({
                                name: 'password',
                                as: Input,
                                type: 'password',
                            })}
                        />
                        <Text color="red.700">{props.errors.password}</Text>
                    </FormControl>

                    <FormControl>
                        <Button type="submit">Login</Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    )
}
