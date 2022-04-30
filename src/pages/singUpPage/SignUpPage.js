import { Form } from "../../components/form/Form";
import { AppRoutes } from "../../const";

export function SignUpPage() {
    return (
        <Form title={'Sign Up'} linkText={`Already have an account? Sign In!`} link={AppRoutes.SignIn} button={'Sign me up'}></Form>
    )
}