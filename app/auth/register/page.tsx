"use client"
import React from "react";
import Auth from "../component/auth";
import styles from "../auth.module.css";
const Register = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const email = data.get("email");
		const password = data.get("pass");
		const passwordConfirm = data.get("pass_confirm");
		console.log(email, password, passwordConfirm);
	};
	return (
		<Auth
			title="register"
			handleSubmit={handleSubmit}
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
			<div className={styles.form_control}>
				<label htmlFor="pass_confirm">Konfirmasi Password : </label>
				<input
					type="password"
					name="pass_confirm"
					id="pass_confirm"
					required
					onInvalid={(e: React.ChangeEvent<HTMLInputElement>) =>
						e.target.setCustomValidity("Masukkan password anda kembali")
					}
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						e.target.setCustomValidity("");
					}}
					placeholder="Masukkan password anda kembali"
				/>
			</div>
		</Auth>
	);
};

export default Register;
