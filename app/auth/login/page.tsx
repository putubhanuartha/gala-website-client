"use client";
import React from "react";
import Auth from "../component/auth";
import styles from "../auth.module.css";
const Login = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const email = data.get("email");
		const password = data.get("pass");
		console.log(email, password);
	};
	return (
		<Auth
			handleSubmit={handleSubmit}
			title="login"
		>
			<div className={styles.form_control}>
				<label htmlFor="email">Email : </label>
				<input
					type="email"
					name="email"
					id="email"
					required
					onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
						e.target.setCustomValidity("Masukkan alamat email valid")
					}
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						e.target.setCustomValidity("");
					}}
					placeholder="Masukkan alamat email anda"
				/>
			</div>
			<div className={styles.form_control}>
				<label htmlFor="pass">Password : </label>
				<input
					type="password"
					name="pass"
					id="pass"
					required
					onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
						e.target.setCustomValidity("Masukkan password akun anda")
					}
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						e.target.setCustomValidity("");
					}}
					placeholder="Masukkan password anda"
				/>
			</div>
		</Auth>
	);
};

export default Login;
