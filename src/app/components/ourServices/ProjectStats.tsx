"use client";
import * as React from "react";
import styles from "./ProjectStats.module.css";

interface ProjectStatsProps {
  count: number;
}

export function ProjectStats({ count }: ProjectStatsProps) {
  return (
    <div className={styles.statsContainer}>
      Total Project : <span className={styles.countNumber}>{count}</span>
    </div>
  );
}
