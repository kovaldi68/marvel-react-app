import { UserForm } from "../../components/userForm/UserForm";
import { AppRoutes } from "../../const";

export function SignUpPage() {
    return (
        <UserForm
            type={'Sign Up'}
            linkText={`Already have an account? Sign In!`}
            link={AppRoutes.SignIn}
            button={'Sign me up'}></UserForm>
    )
}