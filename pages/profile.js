import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import FriendInfo from "../components/FriendInfo";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";


export default function ProfilePage(){
    const router = useRouter();
    const {asPath:pathname} = router;
    const isPost = pathname.includes('posts') || pathname === '/profile';
const isAbout = pathname.includes('about');
const isFriends = pathname.includes('friends');
const isContent = pathname.includes('content');
const tabClasses ='flex gap-1 px-4 items-center border-b-4 border-b-white';
const activeTabClasses ='flex gap-1 px-4  py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';
return(
<Layout>
<Card noPadding={true}>
    <div className="relative overflow-hidden rounded-md">
    <div className="h-36 overflow-hidden flex justify-center items-center">
    <img src="https://images.unsplash.com/photo-1561158318-83210510d944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
    </div>
    <div className="absolute top-24 left-4">
    <Avatar size={'lg'} />
    </div>
<div className="p-4 pt-0 md:pt-4 pb-0">
<div className="ml-24 md:ml-40">
<h1 className="ml-0 text-3xl font-bold">
    Cryptonova 
</h1>
<div className="text-gray-500 leading-4">Ireland, Europe</div>
</div>
<div className="mt-4 md:mt-10 flex gap-1">
<Link href={'/profile/posts'} className={isPost ? activeTabClasses : tabClasses}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

<span className="hidden sm:block">Posts</span>
</Link> 
<Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>

<span className="hidden sm:block">About</span>
</Link> 
<Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

<span className="hidden sm:block">Friends</span>
</Link> 
<Link href={'/profile/content'} className={isContent ? activeTabClasses : tabClasses}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
</svg>

<span className="hidden sm:block">Content</span>
</Link> 
</div>
    </div>
    </div>
</Card>
{isPost && (
 <div>
<PostCard />
 </div>
)}
{isAbout && (
    <div>
      <Card>
        <h2 className="text-3xl mb-2 ">About me</h2>
        <p className="mb-2 text-sm">I love Bare</p>
        <p className="mb-2 text-sm">I love Solana</p>
        </Card> 
    </div>
)} 
{isFriends && (
    <div>
      <Card>
        <h2 className="text-3xl mb-2 ">Friends</h2>
        <div className="">
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
          <div className="border-b border-b-gray-100 p-4 -mx-4">
            <FriendInfo/>
          </div>
        </div>
        </Card> 
    </div>
)} 
{isContent && (
<div>
  <Card>
    <div className="grid md:grid-cols-2 gap-4 ">
    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md"> 
  <img src="https://i.imgur.com/cPfAfQ4.png" alt=""/>
  </div>
  <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md"> 
  <img src="https://i.imgur.com/l2lBO1W.png" alt=""/>
  </div>
  <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md"> 
  <img src="https://i.imgur.com/J8TUr6H.png" alt=""/>
  </div>
  <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md"> 
  <img src="https://i.imgur.com/8vhYdyu.png" alt=""/>
  </div>
    </div>
  </Card>
</div>
)}
</Layout>
    );
}