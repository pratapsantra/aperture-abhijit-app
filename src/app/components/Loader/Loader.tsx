"use client";
import * as React from "react";
import "./Loader.css";

type LoaderProps = {
    customHeight?: string;
};

export const Loader: React.FC<LoaderProps> = ({ customHeight = "100vh" }) => {
    return (
        <div className="loader-for-all"
            style={{ "--loader-height": customHeight || "100vh" } as React.CSSProperties}
        ></div>
    );
}
