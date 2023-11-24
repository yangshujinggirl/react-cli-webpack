/*
 * @Author: 杨静 jing.yang03@weimob.com
 * @Date: 2023-11-01 21:22:41
 * @LastEditors: 杨静 jing.yang03@weimob.com
 * @LastEditTime: 2023-11-01 21:26:39
 * @Description:
 */
import { Suspense } from 'react';
import { fetchProfileData } from "./fakeApi";

const resource = fetchProfileData();
function ProfileDetails(){
  const user = resource.user.read();
  return <h2>{user.name}</h2>
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
function ProfilePage() {
  return <Suspense fallback={<h1>Loading profile</h1>}>
            <ProfileDetails/>
            <Suspense fallback={<h2>Loading posts</h2>}>
              <ProfileTimeline />
            </Suspense>
        </Suspense>
}

export default ProfilePage;