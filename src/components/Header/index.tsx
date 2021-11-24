import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="110" height="30" />
        <nav>
          <ActiveLink activeClass={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClass={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
