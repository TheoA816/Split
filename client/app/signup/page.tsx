"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn } from "@/auth";

import signUpGoogle from "../assets/signup-google.svg";
import signUpArtwork from "../assets/signup-artwork.svg";
import signUpKey from "../assets/signup-key.svg";

export default function SignUpPage() {
	const router = useRouter();

	const [email, setEmail] = useState<String>("");
	const [password, setPassword] = useState<String>("");
	const [error, setError] = useState<String>("");
	const [loading, setLoading] = useState<boolean>(false);

	const readyToSubmit = useMemo(() => email && password, [email, password]);

	const handleOnSubmit = async () => {
		setLoading(true);
		try {
			const res = await signIn("credentials", {
				redirect: false,
				email: email,
				password: password,
				callbackUrl: "/dashboard",
			});

			setLoading(false);

			if (!res?.error) {
				router.push("/signup");
			} else {
				setError("Invalid username or password");
			}
		} catch (err: any) {
			setLoading(false);
			setError(err.message);
		}
	};

	return (
		// <form action={dispatch} className="space-y-3">
		<div className="flex col w-screen h-screen flex-wrap">
			<div className="bg-splitBlue h-full w-3/5">
				<Image
					className="w-full h-full object-contain"
					alt="sign up artwork"
					src={signUpArtwork}
				/>
			</div>
			<div className="h-full flex flex-col items-center justify-center p-20 w-2/5">
				<div className="bg-splitBlue25 rounded-full w-14 h-14 ">
					<Image alt="sign up key icon" src={signUpKey} />
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="font-bold text-3xl font-balsamiq-sans text-splitDarkBlue">
						Welcome back!
					</h1>
					<p className="flex-grow h-14 text-splitDarkBlue text-opacity-50 outline-none">
						Please enter your details
					</p>
				</div>
				<div className="flex flex-col gap-3 w-full">
					<input
						type="email"
						placeholder="Email"
						className="rounded-2xl w-full pl-4 bg-splitBlue bg-opacity-10 h-14 text-black text-opacity-50 outline-none"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						className="rounded-2xl flex-grow pl-4 bg-splitBlue bg-opacity-10 h-14 text-black text-opacity-50 outline-none"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						className={clsx(
							"bg-splitBlue text-white opacity-50",
							"hover:bg-splitDarkBlue hover:bg-opacity-25 hover:opacity-100 hover:text-splitDarkBlue",
							"rounded-2xl flex-grow pl-4 h-14"
						)}
						onClick={handleOnSubmit}
						aria-disabled={!readyToSubmit || loading}
					>
						Sign up
					</Button>
					<Button
						className="bg-white text-splitBlue opacity-50 border-solid rounded-2xl flex-grow pl-4 h-14 hover:bg-opacity-25 hover:text-white border-splitBlue border"
						onClick={() => {
							console.log("clicked");
						}}
					>
						<Image
							className="mr-2"
							alt="sign up with google"
							src={signUpGoogle}
						/>
						Sign up with Google
					</Button>
				</div>
			</div>
		</div>
	);
}
