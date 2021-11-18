import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormContainer, ButtonContainer } from "./styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useAuth } from "../../Providers/user/index";

interface FormTypes {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    preferences: string;
    aboutMe: string;
}

const Register = () => {
    const { userSignup } = useAuth();
    const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .min(8, "Mínimo de 8 caracteres").matches(passRegex, "Senha inválida - letra maiúscula e minúscula número  e  ao  menos um caracter @$!%*?&"),
        confirmPassword: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>({ resolver: yupResolver(schema) });

    const handleForm = ({
        name,
        email,
        password,
        preferences,
        aboutMe,
    }: FormTypes) => {
        const data = { name, email, password, preferences, aboutMe };
        userSignup(data);
        reset();
    };

    return (
        <>
            <Container>
                <h1>Cadastrar</h1>
                <FormContainer onSubmit={handleSubmit(handleForm)}>
                    <input placeholder="Nome" {...register("name")} />
                    {!!errors?.name && (
                        <p className="errorMsg">{errors.name?.message}</p>
                    )}

                    <input placeholder="Email" {...register("email")} />
                    {!!errors?.email && (
                        <p className="errorMsg">{errors.email?.message}</p>
                    )}

                    <input
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                    />
                    {!!errors?.password && (
                        <p className="errorMsg">{errors.password?.message}</p>
                    )}

                    <input
                        type="password"
                        placeholder="Confirmar senha"
                        {...register("confirmPassword")}
                    />
                    {!!errors?.confirmPassword && (
                        <p className="errorMsg">
                            {errors.confirmPassword?.message}
                        </p>
                    )}
                    <input
                        placeholder="Preferências geek"
                        {...register("preferences")}
                    />

                    <textarea
                        placeholder="Sobre você"
                        {...register("aboutMe")}
                    />

                    <div>
                        <span>Já possui uma conta?</span>
                        <Link style={{ color: "#fff" }} to="/login">
                            {" "}
                            Login
                        </Link>
                    </div>
                    <ButtonContainer>
                        <Button type="submit" title="cadastrar" />
                    </ButtonContainer>
                </FormContainer>
            </Container>
        </>
    );
};

export default Register;
