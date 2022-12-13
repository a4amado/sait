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
function FeildConfigMK(props: FieldConfig): FieldConfig {
    return props
}

import * as yup from 'yup'

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
                <Form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
                    <Heading>التسجيل: </Heading>
                    <FormControl width="full" m="10px 0">
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
                    <FormControl width="full" m="10px 0">
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
                    <FormControl m="10px 0">
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
                    <FormControl width="full" m="10px 0">
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
                    <FormControl width="full" m="10px 0">
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
