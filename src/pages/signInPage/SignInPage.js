import { UserForm } from "../../components/userForm/UserForm";
import { AppRoutes } from "../../const";

export function SignInPage() {
    return (
        <UserForm 
            type={'Sign In'}
            linkText={`Don't have an account yet? Sign Up!`}
            link={AppRoutes.SignUp}
            button={'Log me in'}>
        </UserForm>
    )
}