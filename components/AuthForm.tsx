"use client";

import Image from 'next/image';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";
import Link from 'next/link';

const formSchema = z.object({
    username: z.string().min(2).max(50),
    fullName: z.string().min(2).max(50).optional(),
});

type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            fullName: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("Form submitted with values:", values);
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className="form-title flex-center">
                        {type === "sign-in" ? "Авторизоваться" : "Зарегистрироваться"}
                    </h1>

                   
                    {type === "sign-up" && (
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="shad-form-item">
                                    <FormLabel className="shad-form-label">Полное имя</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="shad-input"
                                            placeholder="Введите полное имя"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="shad-form-message" />
                                </FormItem>
                            )}
                        />
                    )}

                    {type !== "sign-in" && (
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="shad-form-item">
                                    <FormLabel className="shad-form-label">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="shad-input"
                                            placeholder="Введите почту"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="shad-form-message" />
                                </FormItem>
                            )}
                        />
                    )}


                    {type !== "sign-up" && (
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="username-field shad-form-item">
                                    <FormLabel className="shad-form-label">Логин</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="shad-input"
                                            placeholder="Введите логин"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    <Button type="submit" className="form-submit-button" 
                    disabled={isLoading}>
                        {type === "sign-in" ? "Авторизоваться" : "Зарегистрироваться"}
                        
                        {isLoading && (
                           <Image 
                           src="/assets/icons/loading.png" 
                           alt="loading"
                            width={24}
                             height={24}
                              className="ml-2 animate-spint"
                           />
                        )}
                    </Button>

                    {errorMessage && 
                        <p className="error-message">*{errorMessage}</p>}

                        <div className="body-2 flex justify-center">
                            <p className="text-light-100">
                                {type === "sign-in" ? "Вы ещё не зарегистрированы?" : "Уже зарегистрированы?"}
                            </p>
                            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="ml-1 font-medium text-brand">
                            {" "}
                            {type === "sign-in" ? "Зарегистрироваться" : "Войти"}
                            </Link>
                        </div>
                </form>
            </Form>
            <p>OTP Verification</p>
        </>
    );
};

export default AuthForm;


