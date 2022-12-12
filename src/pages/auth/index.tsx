import PageContainer from "../../comp/pageContainer"
import { Formik, Field, FieldConfig, Form, FieldValidator, FormikHandlers } from "formik"
import { Button, FormControl, Input, FormLabel, Text, Heading, Checkbox, CheckboxGroup, CheckboxIcon } from "@chakra-ui/react"

function FeildConfigMK(props: FieldConfig): FieldConfig {
    return props;
}
import * as yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Page() {
    const Router = useRouter()
    const formQuery = Array.isArray(Router.query.form) ? Router.query.form[0] : Router.query.form;
    const isLogin = formQuery === "login" ? true : false;
    const initialValue = { isLogin: { email: "", password: "" }, isRegister: { email: "", password: "", checkbox: false } };

    async function Login() {}
    async function Register() {}
    return <PageContainer>
        <Formik initialValues={isLogin ? initialValue.isLogin : initialValue.isRegister} onSubmit={console.log} validationSchema={
            yup.object().shape({
                email: yup.string().email().required(),
                password: yup.string().required(),
                checkbox: yup.boolean().required().oneOf([true], "Required"),
            })
        }>
            {(props) => (
                <Form style={{ width: "100%" }}>
                    <Heading >
                        Register:
                    </Heading>
                    <FormControl width="full">
                        <FormLabel>Email Adress: </FormLabel>
                        <Field {...FeildConfigMK({
                            name: "email",
                            as: Input,
                            type: "email"
                        })} />
                        <Text color="red.700">{props.errors.email}</Text>
                    </FormControl>
                    <FormControl width="full">
                        <FormLabel>Password: </FormLabel>
                        <Field {...FeildConfigMK({
                            name: "password",
                            as: Input,
                            type: "password"
                        })} />
                        <Text color="red.700">{props.errors.password}</Text>
                    </FormControl>
                    {
                        !isLogin && <FormControl>
                            <Field {...FeildConfigMK({
                                name: "checkbox",
                                type: "checkbox"
                            })} />
                            {/* @ts-ignore next-line */}
                            <Text color="red.700">{props.errors.checkbox}</Text>
                        </FormControl>
                    }
                    <FormControl>
                        <Button type="submit">{
                            isLogin ? "Login" : "Register"
                        }</Button>
                    </FormControl>
                    {
                        !isLogin && <Link href="/auth?form=login">Login instead</Link>
                    }
                    {
                        isLogin && <Link href="/auth?form=register">Register instead</Link>
                    }
                </Form >
            )}
        </Formik>
    </PageContainer>
}