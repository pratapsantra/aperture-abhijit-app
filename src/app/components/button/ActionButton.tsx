"use client";
import * as React from "react";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export function ActionButton({ text, onClick }: ActionButtonProps) {
  return (
    <button
      className={styles.actionButton}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}
