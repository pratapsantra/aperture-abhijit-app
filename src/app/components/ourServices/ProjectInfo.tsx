"use client";
import * as React from "react";
import styles from "./ProjectInfo.module.css";

interface ProjectInfoProps {
  title: string;
  description: string;
}

export function ProjectInfo({ title, description }: ProjectInfoProps) {
  return (
    <section className={styles.infoContainer}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>
        {description}
      </p>
    </section>
  );
}
