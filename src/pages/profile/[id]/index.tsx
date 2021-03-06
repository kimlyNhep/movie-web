import { Button, Divider } from "antd";
import { useRouter } from "next/router";
import { ProfileSide } from "../../../components/ProfileSide";
import {
  MeDocument,
  MeQuery,
  useGetMovieStateQuery,
  useMeQuery,
  UserRoles,
} from "../../../generated/graphql";
import Layout from "../../../layout";
import { IUserType } from "../../../types/user";
import cx from "classnames";
import styles from "./styles.module.css";
import { ApolloQueryResult, useApolloClient } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";

const ProfileDetail = () => {
  const { data } = useMeQuery({ fetchPolicy: "cache-only" });
  const router = useRouter();
  const client = useApolloClient();
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const { data: movieStateData } = useGetMovieStateQuery();
  const [currentUser, setCurrentUser] = useState<ApolloQueryResult<MeQuery>>();
  const [joinDate, setJoinDate] = useState<string>();

  const handleAddMovie = () => {
    router.push("/movie/create");
  };

  const handleNewGenre = () => {
    router.push("/genre/create");
  };

  const id = router.query.id as string;

  const fetchUser = async () => {
    const currentUser = await client.query<MeQuery>({ query: MeDocument });
    setCurrentUser(currentUser);

    setJoinDate(new Date(currentUser.data.me?.createdAt).toDateString());

    const adminState = currentUser.data.me?.role === UserRoles.Admin;
    setIsAdmin(adminState);
  };

  const handleRoutingMovieList = () => {
    router.push(`/profile/${id}/movies`);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout>
      <div className={cx(styles.profileInfo, "flex flex-col h-full")}>
        <strong className='mb-2 text-center'>
          {currentUser?.data.me?.username}
        </strong>
        <ProfileSide profile={data?.me as IUserType} />
        <div className='bg-gray-200 flex justify-between items-center'>
          <span>Joined</span>
          <span className='text-xs'>{joinDate}</span>
        </div>
        <Button
          type='primary'
          size='small'
          className='mt-1'
          onClick={handleRoutingMovieList}
        >
          Movie List
        </Button>
        <Divider />
      </div>
      <div className='flex w-full'>
        <Divider type='vertical' style={{ height: "100%" }} />
        <div className='w-full'>
          <div>
            <strong>Biology</strong>
          </div>
          <Divider className='w-full' style={{ margin: 0 }} />
          <div>
            <strong>Statistics</strong>
          </div>
          <Divider className='w-full' style={{ margin: 0 }} />
          <div className='flex justify-between mt-5'>
            <div style={{ width: "45%" }}>
              <div>
                <strong>Movie State</strong>
              </div>
              <Divider style={{ margin: 0 }} />
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-green-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Watching</div>
                </div>
                <span>{movieStateData?.getMovieState.watching}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-gray-400 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Plan to watch</div>
                </div>
                <span>{movieStateData?.getMovieState.planToWatch}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-blue-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Completed</div>
                </div>
                <span>{movieStateData?.getMovieState.completed}</span>
              </div>
              <div className='flex mt-2 items-center justify-between w-full'>
                <div className='flex items-center'>
                  <div className='bg-red-600 rounded-full h-3 w-3 justify-between'></div>
                  <div className='ml-2'>Drop</div>
                </div>
                <span>{movieStateData?.getMovieState.drop}</span>
              </div>
            </div>
            <div style={{ width: "45%" }}>
              <div>
                <strong>Last Movie Updated</strong>
              </div>
              <Divider style={{ margin: 0 }} />
            </div>
          </div>
          <Divider style={{ margin: 0 }} />
          <Button size='small' onClick={handleAddMovie} className='mt-3'>
            Add Movie
          </Button>
          {isAdmin && (
            <Button size='small' onClick={handleNewGenre} className='ml-3'>
              New Genre
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileDetail;
