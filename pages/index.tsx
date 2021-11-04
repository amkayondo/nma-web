import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useUserRepository } from "../application/repostiories/useUserRepository";
import AppTopNav from "../components/AppTopNav";
import PageHead from "../components/PageHead";
import PageLayOut from "../components/PageLayOut";
import { useObservable } from "../infrastructure/hooks/useObservable";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());

  useEffect(() => {
    userRepository.getUserProfileAction();
    if (userState.isLoggedIn === false && userState.isError === false) {
      router.replace("/login");
    }
  }, []);

  return (
    <div>
      <PageHead pageName="Dashboard" />
      {userState.isLoading === false && userState.isError === false ? (
        <>
          <AppTopNav userState={userState} />

          <PageLayOut fluid>
            <Card
              text={"dark"}
              style={{ width: "18rem" }}
              className="mb-2 mt-4 ms-2"
            >
              <Card.Header>A note to you</Card.Header>
              <Card.Body>
                <Card.Title>Welcome {userState.data.fullName}</Card.Title>
                <Card.Text>Email: {userState.data.email}</Card.Text>
                <Card.Text>add more new features soon</Card.Text>
              </Card.Body>
            </Card>
          </PageLayOut>
        </>
      ) : null}
    </div>
  );
};

export default Home;
