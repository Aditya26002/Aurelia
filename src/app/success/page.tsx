"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Confettti from "react-confetti";
const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push(`/order/${orderId}`);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-{calc(100vh-180px)}">
      <Confettti width={2000} height={1000} />
      <h1 className="text-6xl text-gray-700">Succesfull</h1>
      <h2 className="text-xl font-medium">
        We sent the invcoive to your email
      </h2>
      <h3>You are being redirected to order page...</h3>
    </div>
  );
};

export default SuccessPage;
