"use client";
import * as React from "react";
import styles from "./ProjectCard.module.css";
import { ProjectStats } from "./ProjectStats";
import { ProjectInfo } from "./ProjectInfo";
import { ActionButton } from "../button/ActionButton";

interface ProjectCardProps {
  id: number,
  imageUrl?: string;
  projectCount?: number;
  title?: string;
  description?: string;
  buttonText?: string;
  isButtonClick?: boolean;
  onButtonClick?: () => void;
  projectUrl?: string;
}

export function ProjectCard({ imageUrl, projectCount, title, description, buttonText, onButtonClick, projectUrl
}: ProjectCardProps) {
  return (
    <div className={styles.cardContainer}>
      <article className={styles.card}>
        <section className={styles.imageSection}>
          {imageUrl &&
            <img
              src={imageUrl}
              alt={title}
              className={styles.backgroundImage}
            />
          }
          {projectCount &&
            <ProjectStats count={projectCount} />}
        </section>
        {title && description &&
          <ProjectInfo
            title={title}
            description={description}
          />}

        <div className={styles.actionSection}>
          {buttonText &&
            <ActionButton
              text={buttonText}
              onClick={onButtonClick}
            />}
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
