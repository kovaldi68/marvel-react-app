import { Form } from "../../components/form/Form";
import { AppRoutes } from "../../const";

export function SignInPage() {
    return (
        <Form title={'Sign In'} linkText={`Don't have an account yet? Sign Up!`} link={AppRoutes.SignUp} button={'Log me in'}></Form>
    )
}